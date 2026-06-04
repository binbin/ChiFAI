# ────────────────────────────────────────────────────────────────────
# MiMo TTS provider — Xiaomi MiMo-V2.5-TTS via REST API.
#
# Docs:    https://platform.xiaomimimo.com/docs/zh-CN/usage-guide/speech-synthesis-v2.5
# Env:     MIMO_API_KEY=...           required
#          MIMO_VOICE_FILE=...        path to voice sample for voiceclone (optional)
#          MIMO_VOICE=...             preset voice ID (default: 白桦)
#          MIMO_BASE_URL=...          optional (default: https://token-plan-cn.xiaomimimo.com/v1)
#
# Two modes:
#   - VoiceClone: set MIMO_VOICE_FILE to your audio sample (mp3/wav/m4a)
#   - Preset:     leave MIMO_VOICE_FILE unset, use MIMO_VOICE (白桦/冰糖/茉莉/苏打/Mia/Chloe/Milo/Dean)
# ────────────────────────────────────────────────────────────────────

tts_check() {
  if ! command -v curl >/dev/null; then
    echo "✗ curl not found in PATH." >&2
    return 1
  fi
  if ! command -v jq >/dev/null; then
    echo "✗ jq is required to build the request payload safely." >&2
    return 1
  fi
  if [[ -z "${MIMO_API_KEY:-}" ]]; then
    echo "✗ MIMO_API_KEY is not set." >&2
    return 1
  fi
  # VoiceClone mode needs extra deps
  if [[ -n "${MIMO_VOICE_FILE:-}" ]]; then
    if ! command -v base64 >/dev/null; then
      echo "✗ base64 is required for voice encoding." >&2
      return 1
    fi
    if ! command -v ffmpeg >/dev/null; then
      echo "✗ ffmpeg is required to convert audio formats." >&2
      return 1
    fi
    if [[ ! -f "${MIMO_VOICE_FILE}" ]]; then
      echo "✗ MIMO_VOICE_FILE not found: ${MIMO_VOICE_FILE}" >&2
      return 1
    fi
  fi
}

tts_install_help() {
  cat <<'EOF' >&2
To use the MiMo TTS provider:

  Set your key:      export MIMO_API_KEY=tp-...
                     (get one at https://platform.xiaomimimo.com)

  Preset voice mode (default):
    export MIMO_VOICE=白桦        # 白桦/冰糖/茉莉/苏打/Mia/Chloe/Milo/Dean

  VoiceClone mode:
    export MIMO_VOICE_FILE=/path/to/your/voice.mp3
    (supports mp3, wav, m4a — will be auto-converted)

  Optional:          export MIMO_BASE_URL=https://token-plan-cn.xiaomimimo.com/v1

Install deps (only if missing):
  curl    — brew install curl
  jq      — brew install jq
  ffmpeg  — brew install ffmpeg (only needed for voiceclone)

Or pick another provider:  PRESENTATION_TTS=<name> npm run synthesize-audio
EOF
}

# Internal: convert any audio to mp3 (mono, 24k) for consistent API input
_mimo_to_mp3() {
  local input="$1"
  local output="$2"
  ffmpeg -y -i "$input" -ar 24000 -ac 1 -codec:a libmp3lame -qscale:a 2 "$output" >/dev/null 2>&1
}

tts_synthesize() {
  local text="$1"
  local out="$2"
  local voice="${3:-}"
  local base="${MIMO_BASE_URL:-https://token-plan-cn.xiaomimimo.com/v1}"
  local api_key="${MIMO_API_KEY}"

  local model
  local voice_field

  # Determine mode: voiceclone or preset
  if [[ -n "${MIMO_VOICE_FILE:-}" ]]; then
    # VoiceClone mode
    model="mimo-v2.5-tts-voiceclone"

    # Convert voice sample to mp3 if needed (m4a → mp3)
    local voice_mp3
    voice_mp3=$(mktemp -t mimo_voice).mp3
    if ! _mimo_to_mp3 "${MIMO_VOICE_FILE}" "$voice_mp3"; then
      echo "✗ failed to convert voice sample to mp3" >&2
      rm -f "$voice_mp3"
      return 1
    fi

    # Base64 encode the voice sample
    local voice_b64
    voice_b64=$(base64 < "$voice_mp3" | tr -d '\n')
    rm -f "$voice_mp3"

    voice_field="data:audio/mpeg;base64,${voice_b64}"
  else
    # Preset voice mode
    model="mimo-v2.5-tts"
    [[ -z "$voice" ]] && voice="${MIMO_VOICE:-白桦}"
    voice_field="$voice"
  fi

  # Build payload using jq for safe JSON escaping
  local payload
  payload=$(jq -n \
    --arg t "$text" \
    --arg v "$voice_field" \
    --arg m "$model" \
    '{
      model: $m,
      messages: [
        {role: "user", content: ""},
        {role: "assistant", content: $t}
      ],
      audio: {
        format: "wav",
        voice: $v
      }
    }')

  # Call API — returns base64-encoded wav in response.choices[0].message.audio.data
  local response
  response=$(curl -fsS -X POST "$base/chat/completions" \
    -H "api-key: $api_key" \
    -H "Content-Type: application/json" \
    -d "$payload" 2>/dev/null)

  if [[ $? -ne 0 ]]; then
    echo "✗ MiMo API request failed" >&2
    return 1
  fi

  # Extract and decode audio data
  local audio_b64
  audio_b64=$(echo "$response" | jq -r '.choices[0].message.audio.data // empty')

  if [[ -z "$audio_b64" ]]; then
    echo "✗ no audio data in MiMo response" >&2
    return 1
  fi

  # Decode base64 wav → convert to mp3 for browser compatibility
  local tmp_wav
  tmp_wav=$(mktemp -t mimo_out).wav
  echo "$audio_b64" | base64 -d > "$tmp_wav"

  if ! ffmpeg -y -i "$tmp_wav" -codec:a libmp3lame -qscale:a 2 "$out" >/dev/null 2>&1; then
    echo "✗ failed to convert wav to mp3" >&2
    rm -f "$tmp_wav"
    return 1
  fi

  rm -f "$tmp_wav"
  return 0
}
