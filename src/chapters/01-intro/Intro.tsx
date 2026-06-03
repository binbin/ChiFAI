import React from "react";
import "./Intro.css";

interface IntroProps {
  step: number;
}

/**
 * Intro — 第1章：开场致辞
 *
 * 4 steps:
 * 0: 开场致辞 — 大标题 + 机构名 + 淡入动画
 * 1: 背景说明 — 六代演进概述
 * 2: 核心变化 — 等式动画：模型能用 → 模型能干活 → 模型能自己变强
 * 3: 结构说明 — 六代发展脉络依次点亮
 */
const Intro: React.FC<IntroProps> = ({ step }) => {
  return (
    <div className="intro-chapter" data-step={step}>
      {/* Step 0: 开场致辞 */}
      {step === 0 && (
        <div className="intro-greeting">
          <div className="intro-greeting__org">赤峰市人力资源和社会保障局</div>
          <div className="intro-greeting__line" />
          <h1 className="intro-greeting__title">
            <span className="intro-greeting__title-main">AI 应用实践</span>
            <span className="intro-greeting__title-sub"></span>
          </h1>
          <div className="intro-greeting__subtitle">
            <div className="intro-greeting__speaker">主讲人：宁彬彬</div>
            <div className="intro-greeting__titles">
              <span className="intro-greeting__title-item" style={{ animationDelay: "0.4s" }}>系统分析师</span>
              <span className="intro-greeting__title-divider" style={{ animationDelay: "0.5s" }}>·</span>
              <span className="intro-greeting__title-item" style={{ animationDelay: "0.6s" }}>系统架构设计师</span>
              <span className="intro-greeting__title-divider" style={{ animationDelay: "0.7s" }}>·</span>
              <span className="intro-greeting__title-item" style={{ animationDelay: "0.8s" }}>信息系统项目管理师</span>
            </div>
          </div>
          <div className="intro-greeting__year">2026年6月</div>
        </div>
      )}

      {/* Step 1: 背景说明 */}
      {step === 1 && (
        <div className="intro-context">
          <div className="intro-context__label">背景</div>
          <div className="intro-context__year-row">
            <span className="intro-context__year">2024</span>
            <span className="intro-context__arrow" />
            <span className="intro-context__year">2026</span>
          </div>
          <div className="intro-context__text">
            过去两年，AI 工程领域发生了深刻变化
          </div>
          <div className="intro-context__grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="intro-context__grid-cell"
                style={{ animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step 2: 核心变化 */}
      {step === 2 && (
        <div className="intro-shift">
          <div className="intro-shift__label">核心变化</div>
          <div className="intro-shift__equation">
            <div className="intro-shift__from">
              <span className="intro-shift__text">模型能回答</span>
              <span className="intro-shift__desc">Model Works</span>
            </div>
            <div className="intro-shift__arrow">
              <svg width="120" height="36" viewBox="0 0 120 36">
                <path
                  d="M0 18 L100 18 M88 6 L108 18 L88 30"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="intro-shift__to">
              <span className="intro-shift__text intro-shift__text--highlight">
                模型<span className="intro-shift__emphasis">能干活</span>
              </span>
              <span className="intro-shift__desc">
                Model Works <em>for You</em>
              </span>
            </div>
          </div>
          <div className="intro-shift__timeline">
            <div className="intro-shift__timeline-dot intro-shift__timeline-dot--past" />
            <div className="intro-shift__timeline-line" />
            <div className="intro-shift__timeline-dot intro-shift__timeline-dot--now" />
          </div>
        </div>
      )}

      {/* Step 3: 六代发展脉络 */}
      {step === 3 && (
        <div className="intro-structure">
          <div className="intro-structure__title">AI工程六代演进</div>
          <div className="intro-structure__stages">
            {[
              { num: "01", label: "Prompt", zh: "提示词工程", time: "2023" },
              { num: "02", label: "RAG", zh: "检索增强工程", time: "2024" },
              { num: "03", label: "Context", zh: "上下文工程", time: "2025" },
              {
                num: "04",
                label: "Agent",
                zh: "智能体工程",
                time: "2025-2026",
              },
              {
                num: "05",
                label: "Agentic Systems",
                zh: "智能体系统工程",
                time: "2026",
              },
              {
                num: "06",
                label: "Self-Improving",
                zh: "自进化智能体",
                time: "2026+",
              },
            ].map((stage, i) => (
              <React.Fragment key={stage.num}>
                {i > 0 && (
                  <div className="intro-structure__connector">
                    <svg width="40" height="20" viewBox="0 0 40 20">
                      <path
                        d="M0 10 L30 10 M22 4 L34 10 L22 16"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className="intro-structure__stage"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="intro-structure__stage-num hero-num">
                    {stage.num}
                  </div>
                  <div className="intro-structure__stage-label">
                    {stage.label}
                  </div>
                  <div className="intro-structure__stage-zh">{stage.zh}</div>
                  <div className="intro-structure__stage-time">
                    {stage.time}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="intro-structure__progress">
            <div className="intro-structure__progress-bar" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
