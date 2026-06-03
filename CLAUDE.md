# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Status

This is a web-based video presentation for "赤峰人社AI应用实践" (Chifeng HR Social Security AI Application Practice).

## Project Structure

- `presentation/` - Main Vite + React + TypeScript project
  - `src/chapters/01-intro/` - Introduction chapter
  - `src/chapters/02-evolution/` - AI Engineering Evolution chapter (main content)
  - `src/chapters/03-context/` - Context Engineering chapter (empty - content moved to evolution)
  - `src/chapters/04-harness/` - Harness Engineering chapter (empty - content moved to evolution)
  - `src/styles/` - Global styles and theme tokens
  - `public/` - Static assets (videos, images)
- `outline.md` - Development plan with chapter breakdown
- `script.md` - Oral script for the presentation
- `article.md` - Source article about Chifeng HR AI applications

## Theme

The presentation uses a `neon-cyber` theme with:
- Electric cyan accent color (#00ffcc)
- Dark background (#0a0a12)
- Sci-fi inspired design elements

## Content Framework

The presentation follows a six-generation AI engineering evolution framework:

1. **Prompt Engineering** (2023) - How to speak correctly
2. **RAG Engineering** (2024) - How to give models more knowledge
3. **Context Engineering** (2025) - How to manage all context
4. **Agent Engineering** (2025-2026) - How to let models complete tasks
5. **Agentic Systems** (2026) - How to manage many agents
6. **Harness Engineering** (2026+) - How to build reliable environments for agents

## Chifeng HR Practice Integration

Each generation includes Chifeng HR's practice:
- Gen 1: Simple policy Q&A
- Gen 2: Knowledge base + 赤AI人社智能体
- Gen 3: MCP tool integration
- Gen 4: AI预审系统 (business capture + rules + AI analysis)
- Gen 5: GovClaw autonomous agent
- Gen 6: Exploration towards self-improving agents

## Development Guidelines

- Focus on clarity and maintainability
- Use consistent naming conventions across the project
- Write unit tests for new functionality
- Keep components modular and reusable
- Follow the established chapter structure

## Assets

- Videos: `prompt示例.mp4` (2.6 MB)
- Images: `rag示例.jpg`, `mcp示例.jpg`, `业务预审*.jpg`
- All assets are in `presentation/public/`

## GitHub Repository

- URL: https://github.com/binbin/ChiFAI.git
- Branch: main
