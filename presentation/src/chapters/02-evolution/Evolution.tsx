import React from "react";
import "./Evolution.css";

interface EvolutionProps {
  step: number;
}

/**
 * Evolution — 第2章：AI工程六代演进
 *
 * 主线：六代演进 + 赤峰人社实践融入
 * 融合了原 Prompt、Context、Harness 章节的核心内容
 *
 * 18 steps:
 * 0: 时间轴引入
 * 1: 第一代 Prompt Engineering (2023) - 原理
 * 2: 第一代 Prompt Engineering (2023) - 赤峰人社实践
 * 3: 第二代 RAG Engineering (2024) - 原理
 * 4: 第二代 RAG Engineering (2024) - 赤峰人社实践
 * 5: 第三代 Context Engineering (2025) - 原理
 * 6: 第三代 Context Engineering (2025) - 赤峰人社MCP示例
 * 7: 第三代 Context Engineering (2025) - 工伤鉴定AI辅助
 * 8: 第三代 Context Engineering (2025) - 就业岗位数字人讲解
 * 9: 第四代 Agent Engineering (2025-2026) - 原理
 * 10: 第四代 Agent Engineering (2025-2026) - 赤峰人社AI预审
 * 11: 第五代 Agentic Systems (2026) - 原理
 * 12: 第五代 Agentic Systems (2026) - GovClaw介绍
 * 13: GovClaw演示 - 对话式业务办理
 * 14: GovClaw演示 - 信息收集
 * 15: GovClaw演示 - 文档生成与交付
 * 16: 第六代 Harness Engineering (2026+) - 原理
 * 17: 第六代 Harness Engineering (2026+) - 赤峰人社探索
 */
const Evolution: React.FC<EvolutionProps> = ({ step }) => {
  return (
    <div className="ev-chapter" data-step={step}>
      {/* Step 0: 时间轴引入 */}
      {step === 0 && (
        <div className="ev-intro">
          <div className="ev-intro__label">发展脉络</div>
          <div className="ev-intro__text">AI工程六代演进</div>
          <div className="ev-intro__sub">
            赤峰人社的<span className="ev-intro__accent">实践之路</span>
          </div>
        </div>
      )}

      {/* Step 1: 第一代 Prompt Engineering - 原理 */}
      {step === 1 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第一代</div>
            <div className="ev-generation__time">2023</div>
          </div>
          <div className="ev-generation__title">Prompt Engineering</div>
          <div className="ev-generation__subtitle">提示词工程</div>
          <div className="ev-generation__focus">核心：如何把话说对</div>
          <div className="ev-generation__items">
            {[
              "你是一位资深律师...",
              "请一步一步思考",
              "Think step by step",
            ].map((item, i) => (
              <div
                key={i}
                className="ev-generation__item"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="ev-generation__essence">
            本质：调教模型回答问题，AI更像搜索引擎升级版
          </div>
        </div>
      )}

      {/* Step 2: 第一代 Prompt Engineering - 赤峰人社实践 */}
      {step === 2 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第一代</div>
            <div className="ev-generation__time">2023</div>
          </div>
          <div className="ev-generation__title">
            Prompt Engineering 实际应用示例
          </div>
          <div className="ev-generation__demo">
            <video
              src="/prompt示例.mp4"
              controls
              autoPlay
              muted
              loop
              className="ev-generation__video"
            />
            <div className="ev-generation__demo-label">
              视频内容源引抖音号 @AI帮我干活
            </div>
          </div>
        </div>
      )}

      {/* Step 3: 第二代 RAG Engineering - 原理 */}
      {step === 3 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第二代</div>
            <div className="ev-generation__time">2024</div>
          </div>
          <div className="ev-generation__title">RAG Engineering</div>
          <div className="ev-generation__subtitle">检索增强工程</div>
          <div className="ev-generation__focus">核心：如何给模型更多知识</div>
          <div className="ev-generation__items">
            {["向量数据库", "知识库", "RAG"].map((item, i) => (
              <div
                key={i}
                className="ev-generation__item"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="ev-generation__essence">
            本质：不训练模型，而是给模型查资料
          </div>
        </div>
      )}

      {/* Step 4: 第二代 RAG Engineering - 赤峰人社实践 */}
      {step === 4 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第二代</div>
              <div className="ev-generation__time">2024</div>
            </div>
            <div className="ev-generation__title">RAG Engineering</div>
            <div className="ev-generation__subtitle">赤峰人社实践</div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">实践案例</div>
              <div className="ev-generation__practice-content">
                构建人社领域知识库，整理政策文件和业务规则
              </div>
            </div>
            <div className="ev-generation__features">
              <div className="ev-generation__feature">
                <div className="ev-generation__feature-num">1000+</div>
                <div className="ev-generation__feature-desc">
                  赤AI人社智能体 - 人社领域常见问答
                </div>
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <img
              src="/rag示例.jpg"
              alt="RAG示例"
              className="ev-generation__img"
            />
            <div className="ev-generation__demo-label">RAG 知识库示例</div>
          </div>
        </div>
      )}

      {/* Step 5: 第三代 Context Engineering - 原理 */}
      {step === 5 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第三代</div>
            <div className="ev-generation__time">2025</div>
          </div>
          <div className="ev-generation__title">Context Engineering</div>
          <div className="ev-generation__subtitle">上下文工程</div>
          <div className="ev-generation__focus">
            核心：如何管理模型的全部上下文
          </div>
          <div className="ev-generation__items">
            {[
              "System Prompt",
              "用户历史",
              "Memory",
              "MCP工具",
              "RAG知识",
              "工作状态",
              "文件",
              "网页",
              "数据库",
            ].map((item, i) => (
              <div
                key={i}
                className="ev-generation__item"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="ev-generation__essence">
            本质：从如何写Prompt，变成如何设计整个上下文环境
          </div>
        </div>
      )}

      {/* Step 6: 第三代 Context Engineering - 赤峰人社MCP示例 */}
      {step === 6 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第三代</div>
              <div className="ev-generation__time">2025</div>
            </div>
            <div className="ev-generation__title">Context Engineering</div>
            <div className="ev-generation__subtitle">
              赤峰人社实践 - MCP工具调用
            </div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">MCP示例</div>
              <div className="ev-generation__practice-content">
                通过MCP接入岗位推荐和培训信息推荐
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <img
              src="/mcp示例.jpg"
              alt="MCP示例"
              className="ev-generation__img"
            />
            <div className="ev-generation__demo-label">MCP 工具调用示例</div>
          </div>
        </div>
      )}

      {/* Step 7: 第三代 Context Engineering - 工伤鉴定AI辅助 */}
      {step === 7 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第三代</div>
              <div className="ev-generation__time">2025</div>
            </div>
            <div className="ev-generation__title">Context Engineering</div>
            <div className="ev-generation__subtitle">
              赤峰人社实践 - 工伤鉴定AI辅助
            </div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">技术方案</div>
              <div className="ev-generation__practice-content">
                OCR识别 + 大语言模型分析
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <img
              src="/gs.png"
              alt="工伤鉴定AI辅助系统"
              className="ev-generation__img"
            />
            <div className="ev-generation__demo-label">AI模型配置界面</div>
          </div>
        </div>
      )}

      {/* Step 8: 第三代 Context Engineering - 就业岗位数字人讲解 */}
      {step === 8 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第三代</div>
              <div className="ev-generation__time">2025</div>
            </div>
            <div className="ev-generation__title">Context Engineering</div>
            <div className="ev-generation__subtitle">
              赤峰人社实践 - 就业岗位数字人讲解
            </div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">技术方案</div>
              <div className="ev-generation__practice-content">
                数字人 + 语音合成 + 口型同步
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <img
              src="/jy.png"
              alt="就业岗位数字人讲解"
              className="ev-generation__img"
            />
            <div className="ev-generation__demo-label">数字人岗位介绍</div>
          </div>
        </div>
      )}

      {/* Step 9: 第四代 Agent Engineering - 原理 */}
      {step === 9 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第四代</div>
            <div className="ev-generation__time">2025-2026</div>
          </div>
          <div className="ev-generation__title">Agent Engineering</div>
          <div className="ev-generation__subtitle">智能体工程</div>
          <div className="ev-generation__focus">核心：如何让模型完成任务</div>
          <div className="ev-generation__loop">
            {["Goal", "Plan", "Tool Use", "Observe", "Reflect", "Continue"].map(
              (item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="ev-generation__arrow">↓</div>}
                  <div
                    className="ev-generation__loop-item"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {item}
                  </div>
                </React.Fragment>
              ),
            )}
          </div>
          <div className="ev-generation__essence">
            本质：Agent Loop，从怎么回答变成怎么完成任务
          </div>
        </div>
      )}

      {/* Step 10: 第四代 Agent Engineering - 赤峰人社AI预审 */}
      {step === 10 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第四代</div>
            <div className="ev-generation__time">2025-2026</div>
          </div>
          <div className="ev-generation__title">Agent Engineering</div>
          <div className="ev-generation__subtitle">
            赤峰人社实践 - AI预审系统
          </div>
          <div className="ev-generation__practice">
            <div className="ev-generation__practice-label">核心思路</div>
            <div className="ev-generation__practice-flow">
              <div
                className="ev-generation__flow-item"
                style={{ animationDelay: "100ms" }}
              >
                业务抓取
              </div>
              <div className="ev-generation__flow-plus">+</div>
              <div
                className="ev-generation__flow-item"
                style={{ animationDelay: "200ms" }}
              >
                业务规则
              </div>
              <div className="ev-generation__flow-plus">+</div>
              <div
                className="ev-generation__flow-item"
                style={{ animationDelay: "300ms" }}
              >
                AI分析
              </div>
            </div>
          </div>
          <div className="ev-generation__demo">
            <div className="ev-generation__screenshots">
              <div className="ev-generation__screenshot">
                <img src="/业务预审示例图1（扫码登录）.jpg" alt="扫码登录" />
                <div className="ev-generation__screenshot-label">扫码登录</div>
              </div>
              <div className="ev-generation__screenshot">
                <img src="/业务预审图2（设置规则）.jpg" alt="设置规则" />
                <div className="ev-generation__screenshot-label">设置规则</div>
              </div>
              <div className="ev-generation__screenshot">
                <img src="/业务预审图3（自动预审）.jpg" alt="自动预审" />
                <div className="ev-generation__screenshot-label">自动预审</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 11: 第五代 Agentic Systems - 原理 */}
      {step === 11 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第五代</div>
            <div className="ev-generation__time">2026</div>
          </div>
          <div className="ev-generation__title">Agentic Systems</div>
          <div className="ev-generation__subtitle">智能体系统工程</div>
          <div className="ev-generation__focus">核心：如何管理大量智能体</div>
          <div className="ev-generation__items">
            {[
              "Gateway",
              "多平台接入",
              "技能市场",
              "长期记忆",
              "自我反思",
              "自我学习",
            ].map((item, i) => (
              <div
                key={i}
                className="ev-generation__item"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="ev-generation__essence">
            本质：Agent Operating System，智能体操作系统
          </div>
        </div>
      )}

      {/* Step 12: 第五代 Agentic Systems - GovClaw介绍 */}
      {step === 12 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第五代</div>
            <div className="ev-generation__time">2026</div>
          </div>
          <div className="ev-generation__title">Agentic Systems</div>
          <div className="ev-generation__subtitle">GovClaw自主Agent</div>
          <div className="ev-generation__practice">
            <div className="ev-generation__practice-label">自主决策Agent</div>
            <div className="ev-generation__practice-content">
              能记住用户偏好，自主完成多步骤任务
            </div>
          </div>
          {/* <div className="ev-generation__demo">
            <div className="ev-generation__url">govclaw.51chifeng.cn</div>
            <div className="ev-generation__demo-label">体验地址</div>
          </div> */}
        </div>
      )}

      {/* Step 13: GovClaw演示 - 对话式业务办理 */}
      {step === 13 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第五代</div>
              <div className="ev-generation__time">2026</div>
            </div>
            <div className="ev-generation__title">GovClaw</div>
            <div className="ev-generation__subtitle">对话式业务办理</div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">场景</div>
              <div className="ev-generation__practice-content">
                用户说想开一家包子铺，需要生成创业登记表
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <img
              src="/govclaw1.png"
              alt="GovClaw对话界面"
              className="ev-generation__img"
            />
            <div className="ev-generation__demo-label">
              用户表达需求，AI理解并引导
            </div>
          </div>
        </div>
      )}

      {/* Step 14: GovClaw演示 - 信息收集 */}
      {step === 14 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第五代</div>
              <div className="ev-generation__time">2026</div>
            </div>
            <div className="ev-generation__title">GovClaw</div>
            <div className="ev-generation__subtitle">信息收集与确认</div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">能力</div>
              <div className="ev-generation__practice-content">
                AI主动询问必要信息，比如名称，确保生成的文档完整准确
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <img
              src="/govclaw2.png"
              alt="GovClaw信息收集"
              className="ev-generation__img"
            />
            <div className="ev-generation__demo-label">
              AI主动询问，补全关键信息
            </div>
          </div>
        </div>
      )}

      {/* Step 15: GovClaw演示 - 文档生成与交付 */}
      {step === 15 && (
        <div className="ev-generation ev-generation--split">
          <div className="ev-generation__left">
            <div className="ev-generation__header">
              <div className="ev-generation__num">第五代</div>
              <div className="ev-generation__time">2026</div>
            </div>
            <div className="ev-generation__title">GovClaw</div>
            <div className="ev-generation__subtitle">文档生成与成果交付</div>
            <div className="ev-generation__practice">
              <div className="ev-generation__practice-label">结果</div>
              <div className="ev-generation__practice-content">
                自动生成《个体工商户开业登记申请表》，用户可直接下载使用
              </div>
            </div>
            <div className="ev-generation__vision">
              <div className="ev-generation__vision-label">本质</div>
              <div className="ev-generation__vision-content">
                不是AI回答问题，而是AI替你干活
              </div>
            </div>
          </div>
          <div className="ev-generation__right">
            <div className="ev-generation__screenshots">
              <div className="ev-generation__screenshot">
                <img src="/govclaw3.png" alt="GovClaw文档生成" />
                <div className="ev-generation__screenshot-label">
                  自动生成文档
                </div>
              </div>
              <div className="ev-generation__screenshot">
                <img src="/govclaw4.png" alt="GovClaw成果交付" />
                <div className="ev-generation__screenshot-label">下载使用</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 16: 第六代 Harness Engineering - 原理 */}
      {step === 16 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第六代</div>
            <div className="ev-generation__time">2026+</div>
          </div>
          <div className="ev-generation__title">Harness Engineering</div>
          <div className="ev-generation__subtitle">驾驭工程 + 自进化智能体</div>
          <div className="ev-generation__focus">
            核心：如何给Agent搭建可靠的运行环境
          </div>
          <div className="ev-generation__items">
            {[
              "权限系统",
              "安全系统",
              "多Agent编排",
              "Memory系统",
              "审计系统",
              "Sandbox系统",
              "Workflow系统",
            ].map((item, i) => (
              <div
                key={i}
                className="ev-generation__item"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="ev-generation__essence">
            本质：如何让Agent自己变强，Self-Improving Agents
          </div>
        </div>
      )}

      {/* Step 17: 第六代 Harness Engineering - 赤峰人社探索 */}
      {step === 17 && (
        <div className="ev-generation">
          <div className="ev-generation__header">
            <div className="ev-generation__num">第六代</div>
            <div className="ev-generation__time">2026+</div>
          </div>
          <div className="ev-generation__title">Harness Engineering</div>
          <div className="ev-generation__subtitle">
            赤峰人社探索 - 向自进化智能体
          </div>
          <div className="ev-generation__practice">
            <div className="ev-generation__practice-label">探索方向</div>
            <div className="ev-generation__practice-content">
              构建更稳定、更可靠的AI系统，向自进化智能体方向探索
            </div>
          </div>
          <div className="ev-generation__vision">
            <div className="ev-generation__vision-label">未来愿景</div>
            <div className="ev-generation__vision-content">
              真正决定上限的可能是模型，但真正决定能不能落地、能不能稳定交付的，就是Harness
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Evolution;
