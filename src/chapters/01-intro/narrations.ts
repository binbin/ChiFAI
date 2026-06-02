/**
 * narrations.ts — intro 章节口播文本
 *
 * 每个 string = 该 step 的口播内容（来自 script.md 对应段落）
 * 数组长度 = 章节代码里 if (step === N) 用到的最大 N + 1
 */
export const narrations: string[] = [
  // step 0
  "各位领导、各位同仁，今天我代表赤峰市人社局，向大家汇报我们在AI应用方面的一些探索和实践。",
  // step 1
  "如果从AI应用工程的发展脉络来看，大致可以分为六个阶段。",
  // step 2
  '核心变化是什么？就是从"模型能用"，走向了"模型能干活"，再走向"模型能自己变强"。',
  // step 3
  "从2023年的Prompt Engineering，到2024年的RAG Engineering，到2025年的Context Engineering，再到2025-2026年的Agent Engineering，然后到2026年的Agentic Systems / Harness Engineering，最后到2026年以后的Self-Improving Agents。每个阶段都在前一个基础上，扩展了AI的能力边界。",
];
