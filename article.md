# 赤峰人社AI应用实践

## 一、AI工程六代演进

如果从AI应用工程的发展脉络来看，大致可以分为六个阶段：

| 阶段 | 时间 | 核心关注点 | 代表技术 |
|------|------|----------|---------|
| Prompt Engineering | 2023 | 如何把话说对 | Prompt、CoT、Few-shot |
| RAG Engineering | 2024 | 如何给模型更多知识 | RAG、向量库、知识库 |
| Context Engineering | 2025 | 如何管理模型的全部上下文 | MCP、Tool Calling、Memory |
| Agent Engineering | 2025-2026 | 如何让模型完成任务 | Claude Code、Codex、LangGraph |
| Agentic Systems | 2026 | 如何管理大量智能体 | OpenClaw、Hermes、多Agent协作 |
| Harness Engineering | 2026+ | 如何给Agent搭建可靠的运行环境 | 权限、安全、编排、Memory |

核心变化是从"模型能用"走向了"模型能干活"，再走向"模型能自己变强"。

## 二、第一代：Prompt Engineering (2023)

Prompt Engineering是AI应用的基础。简单说，就是怎么跟AI有效沟通。

通过设定角色、明确任务、规定格式、提供示例，让AI输出符合预期的结果。这是最基础的AI交互方式，也是所有AI应用的起点。

**赤峰人社实践**：我们最初从这个阶段起步，用简单的提示词实现政策问答。

## 三、第二代：RAG Engineering (2024)

RAG Engineering解决了Prompt无法获取企业内部文档的问题。通过向量数据库、知识库，让AI能够检索和引用外部知识。

**赤峰人社实践**：我们构建了人社领域的知识库，整理政策文件和业务规则。开发了赤AI人社智能体，基于RAG的知识库问答，包含1000多条人社领域常见问答。

## 四、第三代：Context Engineering (2025)

Context Engineering在Prompt的基础上，进一步扩展了能力。不只给AI一句指令，而是把知识库、业务规则、历史数据、实时信息，全部注入进去。

Context包括System Prompt、用户历史、Memory、MCP工具、RAG知识、工作状态、文件、网页、数据库等。

**赤峰人社实践**：我们通过MCP接入了岗位推荐和培训信息推荐。

## 五、第四代：Agent Engineering (2025-2026)

Agent Engineering的重点从"怎么回答"变成"怎么完成任务"。Agent开始拥有工具调用、浏览器、文件系统、Shell、记忆、工作流，形成Agent Loop。

**赤峰人社实践**：我们开发了AI预审系统，通过业务抓取、业务规则、AI分析，实现了一键批量预审。

### AI预审系统

核心思路：业务抓取 + 业务规则 + AI分析

预审流程：
1. 经办人员登录：进入预审平台
2. 平台抓取信息：业务信息 + 要件
3. 设置预审规则：一次设置，长期生效
4. 一键批量预审：线上线下全覆盖

## 六、第五代：Agentic Systems (2026)

Agentic Systems让Agent不再是一个程序，而是一个数字员工。这些项目已经不只是Agent，而是Agent Operating System，智能体操作系统。

**赤峰人社实践**：我们探索了GovClaw自主Agent，实现了自主决策、文档生成、多步骤任务执行。

### GovClaw自主Agent

GovClaw（govclaw.51chifeng.cn）是我们的探索成果，具备四项核心能力：
- 能记住对话历史和用户偏好
- 能自主生成文档、报告
- 能完成复杂的多步骤任务
- 能根据上下文自主判断下一步该做什么

## 七、第六代：Harness Engineering (2026+)

Harness Engineering是未来竞争的核心。Prompt和Context已经不是核心竞争力，未来竞争的是：
- 权限系统
- 安全系统
- 多Agent编排
- Memory系统
- 审计系统
- Sandbox系统
- Workflow系统

**赤峰人社探索**：我们正在向自进化智能体方向探索，目标是构建更稳定、更可靠的AI系统。

## 八、结论

真正决定上限的可能是模型，但真正决定能不能落地、能不能稳定交付的，就是Harness。

这就是我们赤峰人社在AI应用方面的探索和实践。
