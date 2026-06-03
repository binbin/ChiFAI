# 更新总结：六代发展框架 + 示例素材

## 更新内容

### 1. 六代发展框架

按照用户提供的新内容，将原来的三阶段（Prompt → Context → Harness）框架扩展为六代发展脉络：

| 阶段 | 时间 | 核心关注点 | 代表技术 |
|------|------|----------|---------|
| Prompt Engineering | 2023 | 如何把话说对 | Prompt、CoT、Few-shot |
| RAG Engineering | 2024 | 如何给模型更多知识 | RAG、向量库、知识库 |
| Context Engineering | 2025 | 如何管理模型的全部上下文 | MCP、Tool Calling、Memory、RAG 2.0 |
| Agent Engineering | 2025-2026 | 如何让模型完成任务 | Claude Code、Codex、OpenAI Agents、LangGraph |
| Agentic Systems | 2026 | 如何管理大量智能体 | OpenClaw、Hermes、多Agent协作 |
| Self-Improving Agents | 2026+ | 如何让Agent自己变强 | Hermes GEPA、Agent Memory、Skill Learning |

### 2. 示例素材集成

从 `/Users/binbin/work_claude/video_test/素材/` 目录复制以下素材到演示项目：

- `prompt示例.mp4` - Prompt Engineering 实际应用示例视频
- `rag示例.jpg` - RAG 知识库示例图片
- `mcp示例.jpg` - MCP 工具调用示例图片
- `业务预审示例图1（扫码登录）.jpg` - 业务预审扫码登录示例
- `业务预审图2（设置规则）.jpg` - 业务预审设置规则示例
- `业务预审图3（自动预审）.jpg` - 业务预审自动预审示例

## 演示结构（重构后）

**主线：六代演进 + 赤峰人社实践融入**

原来三个独立章节（Prompt、Context、Harness）已合并到六代演进的主线中：

### Chapter 1: Intro（开场致辞）
- Step 0: 问候 + 身份
- Step 1: 背景说明（六代演进概述）
- Step 2: 核心变化（能用 → 能干活 → 能自己变强）
- Step 3: 结构说明（六代发展脉络）

### Chapter 2: Evolution（AI工程六代演进）
- Step 0: 时间轴引入
- Step 1: 第一代 Prompt Engineering (2023) - 原理
- Step 2: 第一代 Prompt Engineering (2023) - 赤峰人社实践（视频示例）
- Step 3: 第二代 RAG Engineering (2024) - 原理
- Step 4: 第二代 RAG Engineering (2024) - 赤峰人社实践（RAG示例 + 赤AI人社智能体）
- Step 5: 第三代 Context Engineering (2025) - 原理
- Step 6: 第三代 Context Engineering (2025) - 赤峰人社MCP示例
- Step 7: 第四代 Agent Engineering (2025-2026) - 原理
- Step 8: 第四代 Agent Engineering (2025-2026) - 赤峰人社AI预审（业务预审流程图）
- Step 9: 第五代 Agentic Systems (2026) - 原理
- Step 10: 第五代 Agentic Systems (2026) - 赤峰人社GovClaw
- Step 11: 第六代 Harness Engineering (2026+) - 原理
- Step 12: 第六代 Harness Engineering (2026+) - 赤峰人社探索
- Step 13: 结论

## 修改的文件

### 1. Intro 章节（六代框架）
- `presentation/src/chapters/01-intro/narrations.ts` - 更新口播文本
- `presentation/src/chapters/01-intro/Intro.tsx` - 更新 Step 3 展示六代脉络
- `presentation/src/chapters/01-intro/Intro.css` - 添加时间样式，更新动画

### 2. Evolution 章节（新章节，融合原 Prompt、Context、Harness）
- `presentation/src/chapters/02-evolution/Evolution.tsx` - 14步，每代原理+赤峰人社实践
- `presentation/src/chapters/02-evolution/narrations.ts` - 14步口播文本
- `presentation/src/chapters/02-evolution/Evolution.css` - 六代演进样式

### 3. 章节注册
- `presentation/src/registry/chapters.ts` - 只保留 Intro 和 Evolution 两个章节

### 4. 存储版本
- `presentation/src/hooks/useStepper.ts` - 更新 STORAGE_KEY 到 v6

## 验证

- TypeScript 编译通过
- 开发服务器运行在 http://localhost:5174/
- 所有章节步骤正确对应
- 素材文件已复制到 public 目录
- 六代演进布局已优化，确保所有内容完整显示
- MCP工具调用页面已改为左右布局，避免内容溢出
- RAG Engineering 赤峰人社实践页面已改为左右布局

## GitHub 同步

- 仓库地址：git@github.com:binbin/ChiFAI.git
- 分支：main
- 提交信息：Initial commit: ChiFAI presentation
- 包含内容：
  - 六代AI工程演进框架
  - 赤峰人社AI实践集成
  - 可视化素材（视频、图片）
  - Neon-cyber 主题和响应式布局

## 文档更新

已更新所有项目文档，反映六代演进框架：

1. **outline.md** - 更新为六代演进结构，包含14步开发计划
2. **script.md** - 更新口播文本，包含六代演进和赤峰人社实践
3. **article.md** - 更新文章结构，详细描述六代演进和每个阶段的实践
4. **CLAUDE.md** - 更新项目状态说明，包含六代框架和赤峰人社实践集成

文档特点：
- 统一使用"各位领导、同事们"称呼
- 包含完整的六代演进框架说明
- 融入赤峰人社在每个阶段的实践案例
- 保持与代码实现的一致性

## 素材使用位置

1. **Prompt 示例视频** (`prompt示例.mp4`)
   - 位置：Evolution 章节 Step 2
   - 自动播放、循环、静音
   - 展示 Prompt Engineering 实际应用

2. **RAG 示例图片** (`rag示例.jpg`)
   - 位置：Evolution 章节 Step 4
   - 展示 RAG 知识库实际界面

3. **MCP 示例图片** (`mcp示例.jpg`)
   - 位置：Evolution 章节 Step 6
   - 展示 MCP 工具调用实际界面

4. **业务预审流程图片**
   - 位置：Evolution 章节 Step 8
   - 展示完整的预审流程：扫码登录 → 设置规则 → 自动预审

## 说明

- 原来的三个独立章节（Prompt、Context、Harness）已合并到六代演进的主线中
- 赤峰人社实践融入六代演进的每一步，作为行业发展的具体案例
- 六代框架是领域演进的完整脉络，赤峰人社的实践贯穿其中
- 所有素材已优化大小，确保演示流畅

## 最新更新 (2026-06-04)

### 章节简化

为进一步简化演示结构，已清空以下章节的内容：

1. **Context Engineering 章节** (`03-context/Context.tsx`)
   - 删除全部14个步骤
   - 保留空容器组件

2. **Harness Engineering 章节** (`04-harness/Harness.tsx`)
   - 删除全部8个步骤
   - 保留空容器组件

### 原因

这两个章节的内容已经完全整合到 `02-evolution/Evolution.tsx` 中，作为六代演进框架的一部分。清空独立章节可以：
- 减少代码重复
- 简化项目结构
- 避免维护多套内容

### 当前活跃章节

- **01-intro**: 开场致辞（4步）
- **02-evolution**: AI工程六代演进（14步，包含所有核心内容）

### 文档更新

已同步更新以下文档：
- `CLAUDE.md` - 项目结构说明
- `UPDATE_SUMMARY.md` - 本更新记录
