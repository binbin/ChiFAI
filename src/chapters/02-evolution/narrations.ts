/**
 * narrations.ts — evolution 章节口播文本
 *
 * 主线：六代演进 + 赤峰人社实践融入
 * 融合了原 Prompt、Context、Harness 章节的核心内容
 *
 * 每个 string = 该 step 的口播内容
 * 数组长度 = 章节代码里 if (step === N) 用到的最大 N + 1
 */
export const narrations: string[] = [
  // step 0
  "我们用一个时间轴，来看清整个AI工程的发展脉络，以及赤峰人社在每个阶段的实践。",
  // step 1
  "2023年，Prompt Engineering。大家都在研究怎么把话说对，让模型更好地回答问题。本质是调教模型，当时AI更像搜索引擎升级版。",
  // step 2
  "我们赤峰人社最初也是从这个阶段起步，用简单的提示词实现政策问答。这是一个Prompt Engineering的实际应用示例。",
  // step 3
  "2024年，RAG Engineering。大家发现Prompt再牛，也不知道企业内部文档。于是出现向量数据库、知识库，思路变成不训练模型，而是给模型查资料。",
  // step 4
  "我们赤峰人社在这个阶段开始构建人社领域的知识库，整理政策文件和业务规则。我们还开发了赤AI人社智能体，基于RAG的知识库问答，包含1000多条人社领域常见问答。",
  // step 5
  "2025年，Context Engineering。Anthropic把这个概念带火，大家发现Prompt只是Context的一部分。Context包括System Prompt、用户历史、Memory、MCP工具、RAG知识、工作状态、文件、网页、数据库等。",
  // step 6
  "我们赤峰人社在这个阶段通过MCP接入了岗位推荐和培训信息推荐。这是MCP工具调用的实际界面。",
  // step 7
  "2025-2026年，Agent Engineering。Claude Code、Codex、Cursor出现后，重点从怎么回答变成怎么完成任务。Agent开始拥有工具调用、浏览器、文件系统、Shell、记忆、工作流，形成Agent Loop。",
  // step 8
  "我们赤峰人社在这个阶段开发了AI预审系统，通过业务抓取、业务规则、AI分析，实现了一键批量预审。这是预审系统的完整流程。",
  // step 9
  "2026年，Agentic Systems。OpenClaw、Hermes等项目出现后，Agent不再是一个程序，而是一个数字员工。这些项目已经不只是Agent，而是Agent Operating System，智能体操作系统。",
  // step 10
  "我们赤峰人社在这个阶段探索了GovClaw自主Agent，实现了自主决策、文档生成、多步骤任务执行。大家可以通过govclaw.51chifeng.cn来体验。",
  // step 11
  "2026年以后，Harness Engineering和Self-Improving Agents。未来竞争的是权限系统、安全系统、多Agent编排、Memory系统、审计系统、Sandbox系统。如何给Agent搭建一整套可靠的运行环境，如何让Agent自己变强，这是新的方向。",
  // step 12
  "我们赤峰人社正在向这个方向探索，目标是构建更稳定、更可靠的AI系统。真正决定上限的可能是模型，但真正决定能不能落地、能不能稳定交付的，就是Harness。",
  // step 13
  "这就是我们赤峰人社在AI应用方面的探索和实践。谢谢大家。",
];
