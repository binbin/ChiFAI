import React from "react";
import "./Relationship.css";

interface RelationshipProps {
  step: number;
}

/**
 * Relationship — 第5章：AI工程六代演进
 *
 * 8 steps:
 * 0: 时间轴引入
 * 1: 第一代 Prompt Engineering (2023) + 赤峰人社简单问答
 * 2: 第二代 RAG Engineering (2024) + 赤峰人社知识库
 * 3: 第三代 Context Engineering (2025) + 赤峰人社AI预审
 * 4: 第四代 Agent Engineering (2025-2026) + 赤峰人社智能体
 * 5: 第五代 Agentic Systems (2026) + 赤峰人社GovClaw
 * 6: 第六代 Harness + Self-Improving (2026+) + 未来展望
 * 7: 结论
 */
const Relationship: React.FC<RelationshipProps> = ({ step }) => {
  return (
    <div className="rl-chapter" data-step={step}>
      {/* Step 0: 时间轴引入 */}
      {step === 0 && (
        <div className="rl-intro">
          <div className="rl-intro__label">发展脉络</div>
          <div className="rl-intro__text">
            AI工程六代演进
          </div>
          <div className="rl-intro__sub">
            赤峰人社的<span className="rl-intro__accent">实践之路</span>
          </div>
        </div>
      )}

      {/* Step 1: 第一代 Prompt Engineering + 赤峰人社简单问答 */}
      {step === 1 && (
        <div className="rl-generation">
          <div className="rl-generation__header">
            <div className="rl-generation__num">第一代</div>
            <div className="rl-generation__time">2023</div>
          </div>
          <div className="rl-generation__title">Prompt Engineering</div>
          <div className="rl-generation__subtitle">提示词工程</div>
          <div className="rl-generation__focus">核心：如何把话说对</div>
          <div className="rl-generation__items">
            {["你是一位资深律师...", "请一步一步思考", "Think step by step"].map((item, i) => (
              <div key={i} className="rl-generation__item" style={{ animationDelay: `${i * 120}ms` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="rl-generation__practice">
            <div className="rl-generation__practice-label">赤峰人社实践</div>
            <div className="rl-generation__practice-content">
              简单政策问答，用提示词引导AI回答人社问题
            </div>
          </div>
        </div>
      )}

      {/* Step 2: 第二代 RAG Engineering + 赤峰人社知识库 */}
      {step === 2 && (
        <div className="rl-generation">
          <div className="rl-generation__header">
            <div className="rl-generation__num">第二代</div>
            <div className="rl-generation__time">2024</div>
          </div>
          <div className="rl-generation__title">RAG Engineering</div>
          <div className="rl-generation__subtitle">检索增强工程</div>
          <div className="rl-generation__focus">核心：如何给模型更多知识</div>
          <div className="rl-generation__items">
            {["向量数据库", "知识库", "RAG"].map((item, i) => (
              <div key={i} className="rl-generation__item" style={{ animationDelay: `${i * 120}ms` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="rl-generation__practice">
            <div className="rl-generation__practice-label">赤峰人社实践</div>
            <div className="rl-generation__practice-content">
              构建人社领域知识库，整理政策文件和业务规则
            </div>
          </div>
        </div>
      )}

      {/* Step 3: 第三代 Context Engineering + 赤峰人社AI预审 */}
      {step === 3 && (
        <div className="rl-generation">
          <div className="rl-generation__header">
            <div className="rl-generation__num">第三代</div>
            <div className="rl-generation__time">2025</div>
          </div>
          <div className="rl-generation__title">Context Engineering</div>
          <div className="rl-generation__subtitle">上下文工程</div>
          <div className="rl-generation__focus">核心：如何管理模型的全部上下文</div>
          <div className="rl-generation__items">
            {["System Prompt", "用户历史", "Memory", "MCP工具", "RAG知识", "工作状态", "文件", "网页", "数据库"].map((item, i) => (
              <div key={i} className="rl-generation__item" style={{ animationDelay: `${i * 80}ms` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="rl-generation__practice">
            <div className="rl-generation__practice-label">赤峰人社实践</div>
            <div className="rl-generation__practice-content">
              AI预审系统：业务抓取 + 业务规则 + AI分析，一键批量预审
            </div>
          </div>
        </div>
      )}

      {/* Step 4: 第四代 Agent Engineering + 赤峰人社智能体 */}
      {step === 4 && (
        <div className="rl-generation">
          <div className="rl-generation__header">
            <div className="rl-generation__num">第四代</div>
            <div className="rl-generation__time">2025-2026</div>
          </div>
          <div className="rl-generation__title">Agent Engineering</div>
          <div className="rl-generation__subtitle">智能体工程</div>
          <div className="rl-generation__focus">核心：如何让模型完成任务</div>
          <div className="rl-generation__loop">
            {["Goal", "Plan", "Tool Use", "Observe", "Reflect", "Continue"].map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="rl-generation__arrow">↓</div>}
                <div className="rl-generation__loop-item" style={{ animationDelay: `${i * 100}ms` }}>
                  {item}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="rl-generation__practice">
            <div className="rl-generation__practice-label">赤峰人社实践</div>
            <div className="rl-generation__practice-content">
              赤AI人社智能体：基于RAG的知识库问答，MCP接入岗位和培训推荐
            </div>
          </div>
        </div>
      )}

      {/* Step 5: 第五代 Agentic Systems + 赤峰人社GovClaw */}
      {step === 5 && (
        <div className="rl-generation">
          <div className="rl-generation__header">
            <div className="rl-generation__num">第五代</div>
            <div className="rl-generation__time">2026</div>
          </div>
          <div className="rl-generation__title">Agentic Systems</div>
          <div className="rl-generation__subtitle">智能体系统工程</div>
          <div className="rl-generation__focus">核心：如何管理大量智能体</div>
          <div className="rl-generation__items">
            {["Gateway", "多平台接入", "技能市场", "长期记忆", "自我反思", "自我学习"].map((item, i) => (
              <div key={i} className="rl-generation__item" style={{ animationDelay: `${i * 100}ms` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="rl-generation__practice">
            <div className="rl-generation__practice-label">赤峰人社实践</div>
            <div className="rl-generation__practice-content">
              GovClaw自主Agent：自主决策、文档生成、多步骤任务执行
            </div>
          </div>
        </div>
      )}

      {/* Step 6: 第六代 Harness + Self-Improving + 未来展望 */}
      {step === 6 && (
        <div className="rl-generation">
          <div className="rl-generation__header">
            <div className="rl-generation__num">第六代</div>
            <div className="rl-generation__time">2026+</div>
          </div>
          <div className="rl-generation__title">Harness Engineering</div>
          <div className="rl-generation__subtitle">驾驭工程 + 自进化智能体</div>
          <div className="rl-generation__focus">核心：如何给Agent搭建可靠的运行环境</div>
          <div className="rl-generation__items">
            {["权限系统", "安全系统", "多Agent编排", "Memory系统", "审计系统", "Sandbox系统", "Workflow系统"].map((item, i) => (
              <div key={i} className="rl-generation__item" style={{ animationDelay: `${i * 80}ms` }}>
                {item}
              </div>
            ))}
          </div>
          <div className="rl-generation__practice">
            <div className="rl-generation__practice-label">赤峰人社探索</div>
            <div className="rl-generation__practice-content">
              构建更稳定、更可靠的AI系统，向自进化智能体方向探索
            </div>
          </div>
        </div>
      )}

      {/* Step 7: 结论 */}
      {step === 7 && (
        <div className="rl-conclusion">
          <div className="rl-conclusion__label">结论</div>
          <div className="rl-conclusion__boxes">
            <div className="rl-conclusion__box">
              <div className="rl-conclusion__box-label">决定上限</div>
              <div className="rl-conclusion__box-title">模型</div>
            </div>
            <div className="rl-conclusion__vs">VS</div>
            <div className="rl-conclusion__box rl-conclusion__box--highlight">
              <div className="rl-conclusion__box-label">决定落地</div>
              <div className="rl-conclusion__box-title">Harness</div>
            </div>
          </div>
          <div className="rl-conclusion__thanks">谢谢大家</div>
        </div>
      )}
    </div>
  );
};

export default Relationship;
