import React from "react";
import "./Prompt.css";

interface PromptProps {
  step: number;
}

/**
 * Prompt — 第2章：Prompt Engineering
 *
 * 8 steps:
 * 0: 标题
 * 1: 定位
 * 2: 原理 — 概率生成系统
 * 3: 原理 — 塑造概率空间
 * 4: 本质 — 不是命令模型
 * 5: 天花板 — 遇到了边界
 * 6: 擅长 vs 不擅长
 * 7: 总结 — 表达 vs 信息
 */
const Prompt: React.FC<PromptProps> = ({ step }) => {
  return (
    <div className="pm-chapter" data-step={step}>
      {/* Step 0: 标题 */}
      {step === 0 && (
        <div className="pm-title">
          <div className="pm-title__num hero-num">01</div>
          <h1 className="pm-title__main">Prompt Engineering</h1>
          <div className="pm-title__zh">提示词工程</div>
          <div className="pm-title__line" />
        </div>
      )}

      {/* Step 1: 定位 */}
      {step === 1 && (
        <div className="pm-position">
          <div className="pm-position__label">基础</div>
          <div className="pm-position__text">
            怎么跟AI<span className="pm-position__accent">有效沟通</span>
          </div>
          <div className="pm-position__sub">
            AI应用的起点
          </div>
        </div>
      )}

      {/* Step 2: 原理 — 概率生成系统 */}
      {step === 2 && (
        <div className="pm-system">
          <div className="pm-system__label">原理</div>
          <div className="pm-system__core">
            <div className="pm-system__icon">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="none" stroke="var(--accent)" strokeWidth="2" />
                <circle cx="40" cy="40" r="20" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
                <circle cx="40" cy="40" r="5" fill="var(--accent)" />
              </svg>
            </div>
            <div className="pm-system__text">
              <div className="pm-system__main">大模型是</div>
              <div className="pm-system__highlight">概率生成系统</div>
              <div className="pm-system__sub">对上下文非常敏感</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: 原理 — 三个输入 */}
      {step === 3 && (
        <div className="pm-inputs">
          <div className="pm-inputs__label">输入 → 输出</div>
          <div className="pm-inputs__grid">
            {[
              { input: "身份", output: "沿着身份回答", icon: "👤" },
              { input: "样例", output: "沿着范式补全", icon: "📋" },
              { input: "约束", output: "把约束当重点", icon: "🔒" },
            ].map((item, i) => (
              <div key={i} className="pm-inputs__item" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="pm-inputs__icon">{item.icon}</div>
                <div className="pm-inputs__arrow">
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <path d="M0 10 L30 10 M22 4 L34 10 L22 16" fill="none" stroke="var(--accent)" strokeWidth="2" />
                  </svg>
                </div>
                <div className="pm-inputs__result">{item.output}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: 本质 */}
      {step === 4 && (
        <div className="pm-essence">
          <div className="pm-essence__label">本质</div>
          <div className="pm-essence__equation">
            <div className="pm-essence__left">
              <span className="pm-essence__cross">✗</span>
              <span>命令模型</span>
            </div>
            <div className="pm-essence__vs">VS</div>
            <div className="pm-essence__right">
              <span className="pm-essence__check">✓</span>
              <span>塑造<span className="pm-essence__accent">局部概率空间</span></span>
            </div>
          </div>
          <div className="pm-essence__visual">
            <div className="pm-essence__space">
              <div className="pm-essence__dot pm-essence__dot--1" />
              <div className="pm-essence__dot pm-essence__dot--2" />
              <div className="pm-essence__dot pm-essence__dot--3" />
              <div className="pm-essence__boundary" />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: 天花板 */}
      {step === 5 && (
        <div className="pm-ceiling">
          <div className="pm-ceiling__label">天花板</div>
          <div className="pm-ceiling__wall">
            <div className="pm-ceiling__bar" />
            <div className="pm-ceiling__text">遇到边界了</div>
          </div>
          <div className="pm-ceiling__reason">
            不是你说清楚就行，而是你<span className="pm-ceiling__accent">真的得知道</span>
          </div>
        </div>
      )}

      {/* Step 6: 擅长 vs 不擅长 */}
      {step === 6 && (
        <div className="pm-compare">
          <div className="pm-compare__side pm-compare__side--good">
            <div className="pm-compare__header">擅长</div>
            <ul className="pm-compare__list">
              <li className="pm-compare__item" style={{ animationDelay: "100ms" }}>约束输出</li>
              <li className="pm-compare__item" style={{ animationDelay: "200ms" }}>激发已有能力</li>
            </ul>
          </div>
          <div className="pm-compare__divider" />
          <div className="pm-compare__side pm-compare__side--bad">
            <div className="pm-compare__header">不擅长</div>
            <ul className="pm-compare__list">
              <li className="pm-compare__item" style={{ animationDelay: "300ms" }}>弥补缺失知识</li>
              <li className="pm-compare__item" style={{ animationDelay: "400ms" }}>管理动态信息</li>
            </ul>
          </div>
        </div>
      )}

      {/* Step 7: 总结 */}
      {step === 7 && (
        <div className="pm-summary">
          <div className="pm-summary__label">总结</div>
          <div className="pm-summary__boxes">
            <div className="pm-summary__box pm-summary__box--yes">
              <div className="pm-summary__box-label">解决</div>
              <div className="pm-summary__box-title">表达的问题</div>
            </div>
            <div className="pm-summary__box pm-summary__box--no">
              <div className="pm-summary__box-label">不解决</div>
              <div className="pm-summary__box-title">信息的问题</div>
            </div>
          </div>
          <div className="pm-summary__arrow">
            <svg width="60" height="30" viewBox="0 0 60 30">
              <path d="M0 15 L45 15 M35 5 L50 15 L35 25" fill="none" stroke="var(--accent)" strokeWidth="2" />
            </svg>
          </div>
          <div className="pm-summary__next">→ Context Engineering</div>
        </div>
      )}

      {/* Step 8: 示例演示 */}
      {step === 8 && (
        <div className="pm-demo">
          <div className="pm-demo__label">示例演示</div>
          <div className="pm-demo__video">
            <video
              src="/prompt示例.mp4"
              controls
              autoPlay
              muted
              loop
              className="pm-demo__player"
            />
          </div>
          <div className="pm-demo__desc">
            Prompt Engineering 实际应用示例
          </div>
        </div>
      )}
    </div>
  );
};

export default Prompt;
