import React from "react";
import "./Harness.css";

interface HarnessProps {
  step: number;
}

/**
 * Harness — 第4章：Harness Engineering
 *
 * 11 steps:
 * 0: 标题
 * 1: 词源
 * 2: 核心理念
 * 3: 核心差异
 * 4: 六层架构总览
 * 5: 六层详解1
 * 6: 六层详解2
 * 7: 六层详解3
 * 8: GovClaw案例
 * 9: GovClaw四项能力
 * 10: 总结
 */
const Harness: React.FC<HarnessProps> = ({ step }) => {
  return (
    <div className="hn-chapter" data-step={step}>
      {/* Step 0: 标题 */}
      {step === 0 && (
        <div className="hn-title">
          <div className="hn-title__num hero-num">03</div>
          <h1 className="hn-title__main">Harness Engineering</h1>
          <div className="hn-title__zh">驾驭工程</div>
          <div className="hn-title__line" />
        </div>
      )}

      {/* Step 1: 词源 */}
      {step === 1 && (
        <div className="hn-etymology">
          <div className="hn-etymology__label">词源</div>
          <div className="hn-etymology__word">Harness</div>
          <div className="hn-etymology__meanings">
            {["缰绳", "马具", "约束装置"].map((item, i) => (
              <div key={i} className="hn-etymology__meaning" style={{ animationDelay: `${i * 150}ms` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: 核心理念 */}
      {step === 2 && (
        <div className="hn-concept">
          <div className="hn-concept__label">核心理念</div>
          <div className="hn-concept__text">
            当模型从<span className="hn-concept__accent">回答问题</span>走向<span className="hn-concept__accent">执行任务</span>
          </div>
          <div className="hn-concept__sub">
            系统不只要能喂信息，还要能<span className="hn-concept__highlight">驾驭整个过程</span>
          </div>
        </div>
      )}

      {/* Step 3: 核心差异 */}
      {step === 3 && (
        <div className="hn-diff">
          <div className="hn-diff__label">核心差异</div>
          <div className="hn-diff__compare">
            <div className="hn-diff__old">
              <div className="hn-diff__old-label">Prompt + Context</div>
              <div className="hn-diff__old-text">让模型更会想</div>
            </div>
            <div className="hn-diff__vs">VS</div>
            <div className="hn-diff__new">
              <div className="hn-diff__new-label">Harness</div>
              <div className="hn-diff__new-items">
                <div className="hn-diff__new-item" style={{ animationDelay: "200ms" }}>别跑偏</div>
                <div className="hn-diff__new-item" style={{ animationDelay: "300ms" }}>跑得稳</div>
                <div className="hn-diff__new-item" style={{ animationDelay: "400ms" }}>出错能拉回来</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: 六层架构总览 */}
      {step === 4 && (
        <div className="hn-layers">
          <div className="hn-layers__label">六层架构</div>
          <div className="hn-layers__stack">
            {[
              { num: "01", name: "上下文管理" },
              { num: "02", name: "工具系统" },
              { num: "03", name: "执行编排" },
              { num: "04", name: "记忆状态" },
              { num: "05", name: "评估观测" },
              { num: "06", name: "约束恢复" },
            ].map((layer, i) => (
              <div key={i} className="hn-layers__item" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="hn-layers__num">{layer.num}</div>
                <div className="hn-layers__name">{layer.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: 六层详解1 */}
      {step === 5 && (
        <div className="hn-detail1">
          <div className="hn-detail1__label">Layer 1-2</div>
          <div className="hn-detail1__items">
            <div className="hn-detail1__item" style={{ animationDelay: "100ms" }}>
              <div className="hn-detail1__num">01</div>
              <div className="hn-detail1__content">
                <div className="hn-detail1__title">上下文管理</div>
                <div className="hn-detail1__desc">让模型在正确的信息边界内思考</div>
              </div>
            </div>
            <div className="hn-detail1__item" style={{ animationDelay: "300ms" }}>
              <div className="hn-detail1__num">02</div>
              <div className="hn-detail1__content">
                <div className="hn-detail1__title">工具系统</div>
                <div className="hn-detail1__desc">没有工具，大模型本质上还是文本预测器</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 6: 六层详解2 */}
      {step === 6 && (
        <div className="hn-detail2">
          <div className="hn-detail2__label">Layer 3-4</div>
          <div className="hn-detail2__items">
            <div className="hn-detail2__item" style={{ animationDelay: "100ms" }}>
              <div className="hn-detail2__num">03</div>
              <div className="hn-detail2__content">
                <div className="hn-detail2__title">执行编排</div>
                <div className="hn-detail2__desc">模型下一步该做什么？</div>
              </div>
            </div>
            <div className="hn-detail2__item" style={{ animationDelay: "300ms" }}>
              <div className="hn-detail2__num">04</div>
              <div className="hn-detail2__content">
                <div className="hn-detail2__title">记忆状态</div>
                <div className="hn-detail2__desc">没有状态的agent每轮都会像失忆</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 7: 六层详解3 */}
      {step === 7 && (
        <div className="hn-detail3">
          <div className="hn-detail3__label">Layer 5-6</div>
          <div className="hn-detail3__items">
            <div className="hn-detail3__item" style={{ animationDelay: "100ms" }}>
              <div className="hn-detail3__num">05</div>
              <div className="hn-detail3__content">
                <div className="hn-detail3__title">评估观测</div>
                <div className="hn-detail3__desc">生成完了不知道自己做得好不好</div>
              </div>
            </div>
            <div className="hn-detail3__item" style={{ animationDelay: "300ms" }}>
              <div className="hn-detail3__num">06</div>
              <div className="hn-detail3__content">
                <div className="hn-detail3__title">约束恢复</div>
                <div className="hn-detail3__desc">失败不是例外，而是常态</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 8: GovClaw案例 */}
      {step === 8 && (
        <div className="hn-govclaw">
          <div className="hn-govclaw__label">我们的探索</div>
          <div className="hn-govclaw__title">GovClaw</div>
          <div className="hn-govclaw__url">govclaw.51chifeng.cn</div>
          <div className="hn-govclaw__desc">自主决策Agent</div>
        </div>
      )}

      {/* Step 9: GovClaw四项能力 */}
      {step === 9 && (
        <div className="hn-ability">
          <div className="hn-ability__label">四项能力</div>
          <div className="hn-ability__grid">
            {[
              { title: "记住历史", desc: "对话历史和用户偏好" },
              { title: "生成文档", desc: "自主生成文档、报告" },
              { title: "完成任务", desc: "复杂的多步骤任务" },
              { title: "自主判断", desc: "根据上下文判断下一步" },
            ].map((item, i) => (
              <div key={i} className="hn-ability__item" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="hn-ability__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="hn-ability__title">{item.title}</div>
                <div className="hn-ability__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 10: 总结 */}
      {step === 10 && (
        <div className="hn-summary">
          <div className="hn-summary__label">总结</div>
          <div className="hn-summary__boxes">
            <div className="hn-summary__old">
              <div className="hn-summary__old-label">过去</div>
              <div className="hn-summary__old-text">AI回答问题</div>
            </div>
            <div className="hn-summary__arrow">
              <svg width="60" height="30" viewBox="0 0 60 30">
                <path d="M0 15 L45 15 M35 5 L50 15 L35 25" fill="none" stroke="var(--accent)" strokeWidth="2" />
              </svg>
            </div>
            <div className="hn-summary__new">
              <div className="hn-summary__new-label">现在</div>
              <div className="hn-summary__new-text">AI替你干活</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Harness;
