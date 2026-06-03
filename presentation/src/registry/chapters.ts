import type { ChapterDef } from "./types";
import Intro from "../chapters/01-intro/Intro";
import { narrations as introNarrations } from "../chapters/01-intro/narrations";
import Evolution from "../chapters/02-evolution/Evolution";
import { narrations as evolutionNarrations } from "../chapters/02-evolution/narrations";
import Conclusion from "../chapters/03-conclusion/Conclusion";
import { narrations as conclusionNarrations } from "../chapters/03-conclusion/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "intro",
    title: "开场致辞",
    narrations: introNarrations,
    Component: Intro,
  },
  {
    id: "evolution",
    title: "AI工程六代演进",
    narrations: evolutionNarrations,
    Component: Evolution,
  },
  {
    id: "conclusion",
    title: "致谢",
    narrations: conclusionNarrations,
    Component: Conclusion,
  },
];
