import React from "react";
import "./Context.css";

interface ContextProps {
  step: number;
}

/**
 * Context — 第3章：Context Engineering
 *
 * 14 steps:
 * 0: 标题
 * 1: 定义
 * 2: Context不只是背景资料
 * 3: 8类信息源
 * 4: 核心原则
 * 5: Prompt ⊂ Context
 * 6: 过渡
 * 7: 案例1：AI预审系统
 * 8: 案例1核心思路
 * 9: 案例1四项能力
 * 10: 案例2："赤AI人社"智能体
 * 11: 案例2数据1
 * 12: 案例3：工伤鉴定AI辅助系统
 * 13: 案例4：就业岗位数字人讲解
 */
const Context: React.FC<ContextProps> = ({ step }) => {
  return (
    <div className="ct-chapter" data-step={step}>
      {/* Step 0: 标题 */}
      {step === 0 && (
        <div className="ct-title">
          <div className="ct-title__num hero-num">02</div>
          <h1 className="ct-title__main">Context Engineering</h1>
          <div className="ct-title__zh">上下文工程</div>
          <div className="ct-title__line" />
        </div>
      )}

      {/* Step 1: 定义 */}
      {step === 1 && (
        <div className="ct-def">
          <div className="ct-def__label">定义</div>
          <div className="ct-def__text">
            在Prompt基础上，注入<span className="ct-def__accent">完整上下文</span>
          </div>
          <div className="ct-def__items">
            {["知识库", "业务规则", "历史数据", "实时信息"].map((item, i) => (
              <div key={i} className="ct-def__item" style={{ animationDelay: `${i * 150}ms` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Context不只是背景资料 */}
      {step === 2 && (
        <div className="ct-scope">
          <div className="ct-scope__label">Scope</div>
          <div className="ct-scope__main">
            不只是几段背景资料
          </div>
          <div className="ct-scope__sub">
            所有影响模型当前决策的<span className="ct-scope__accent">信息总和</span>
          </div>
        </div>
      )}

      {/* Step 3: 8类信息源 */}
      {step === 3 && (
        <div className="ct-info">
          <div className="ct-info__label">8类信息源</div>
          <div className="ct-info__grid">
            {[
              "用户输入",
              "历史对话",
              "检索结果",
              "工具返回",
              "任务状态",
              "中间产物",
              "系统规则",
              "安全约束",
            ].map((item, i) => (
              <div key={i} className="ct-info__item" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="ct-info__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="ct-info__text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: 核心原则 */}
      {step === 4 && (
        <div className="ct-principle">
          <div className="ct-principle__label">核心原则</div>
          <div className="ct-principle__box">
            <div className="ct-principle__when">合适的时机</div>
            <div className="ct-principle__plus">+</div>
            <div className="ct-principle__what">正确的信息</div>
          </div>
          <div className="ct-principle__arrow">
            <svg width="60" height="30" viewBox="0 0 60 30">
              <path d="M0 15 L45 15 M35 5 L50 15 L35 25" fill="none" stroke="var(--accent)" strokeWidth="2" />
            </svg>
          </div>
          <div className="ct-principle__result">稳定输出</div>
        </div>
      )}

      {/* Step 5: Prompt ⊂ Context */}
      {step === 5 && (
        <div className="ct-relation">
          <div className="ct-relation__label">关系</div>
          <div className="ct-relation__diagram">
            <div className="ct-relation__outer">
              <div className="ct-relation__outer-label">Context</div>
              <div className="ct-relation__inner">
                <div className="ct-relation__inner-label">Prompt</div>
              </div>
            </div>
          </div>
          <div className="ct-relation__text">
            Prompt 只是 Context 的一部分
          </div>
        </div>
      )}

      {/* Step 6: 过渡 */}
      {step === 6 && (
        <div className="ct-transition">
          <div className="ct-transition__text">
            在这个阶段，我们做了<span className="ct-transition__accent">多个应用</span>
          </div>
          <div className="ct-transition__apps">
            <div className="ct-transition__app" style={{ animationDelay: "200ms" }}>
              <div className="ct-transition__app-num">01</div>
              <div className="ct-transition__app-name">AI预审系统</div>
            </div>
            <div className="ct-transition__app" style={{ animationDelay: "400ms" }}>
              <div className="ct-transition__app-num">02</div>
              <div className="ct-transition__app-name">"赤AI人社"智能体</div>
            </div>
            <div className="ct-transition__app" style={{ animationDelay: "600ms" }}>
              <div className="ct-transition__app-num">03</div>
              <div className="ct-transition__app-name">工伤鉴定AI辅助</div>
            </div>
            <div className="ct-transition__app" style={{ animationDelay: "800ms" }}>
              <div className="ct-transition__app-num">04</div>
              <div className="ct-transition__app-name">就业岗位数字人讲解</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 7: 案例1标题 */}
      {step === 7 && (
        <div className="ct-case1">
          <div className="ct-case1__label">案例 01</div>
          <div className="ct-case1__title">AI预审系统</div>
          <div className="ct-case1__sub">赤峰市人社局自主研发</div>
        </div>
      )}

      {/* Step 8: 案例1核心思路 */}
      {step === 8 && (
        <div className="ct-case1-idea">
          <div className="ct-case1-idea__label">核心思路</div>
          <div className="ct-case1-idea__flow">
            <div className="ct-case1-idea__item" style={{ animationDelay: "100ms" }}>业务抓取</div>
            <div className="ct-case1-idea__plus">+</div>
            <div className="ct-case1-idea__item" style={{ animationDelay: "200ms" }}>业务规则</div>
            <div className="ct-case1-idea__plus">+</div>
            <div className="ct-case1-idea__item" style={{ animationDelay: "300ms" }}>AI分析</div>
          </div>
        </div>
      )}

      {/* Step 9: 案例1流程 */}
      {step === 9 && (
        <div className="ct-case1-flow">
          <div className="ct-case1-flow__label">预审流程</div>
          <div className="ct-case1-flow__steps">
            {[
              { num: "01", title: "经办人员登录", desc: "进入预审平台", img: "/业务预审示例图1（扫码登录）.jpg" },
              { num: "02", title: "平台抓取信息", desc: "业务信息 + 要件", img: null },
              { num: "03", title: "设置预审规则", desc: "一次设置，长期生效", img: "/业务预审图2（设置规则）.jpg" },
              { num: "04", title: "一键批量预审", desc: "线上线下全覆盖", img: "/业务预审图3（自动预审）.jpg" },
            ].map((item, i) => (
              <div key={i} className="ct-case1-flow__item" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="ct-case1-flow__num">{item.num}</div>
                <div className="ct-case1-flow__content">
                  <div className="ct-case1-flow__title">{item.title}</div>
                  <div className="ct-case1-flow__desc">{item.desc}</div>
                </div>
                {item.img && (
                  <div className="ct-case1-flow__img">
                    <img src={item.img} alt={item.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ct-case1-flow__scope">
            人社综柜平台线上线下业务均可预审
          </div>
        </div>
      )}

      {/* Step 10: 案例2标题 */}
      {step === 10 && (
        <div className="ct-case2">
          <div className="ct-case2__label">案例 02</div>
          <div className="ct-case2__title">"赤AI人社"智能体</div>
          <div className="ct-case2__type">基于RAG的知识库问答应用</div>
          <div className="ct-case2__features">
            <div className="ct-case2__feature" style={{ animationDelay: "200ms" }}>
              <div className="ct-case2__feature-num">1000+</div>
              <div className="ct-case2__feature-desc">人社领域常见问答</div>
            </div>
            <div className="ct-case2__feature" style={{ animationDelay: "400ms" }}>
              <div className="ct-case2__feature-num">MCP</div>
              <div className="ct-case2__feature-desc">接入岗位 + 培训推荐</div>
            </div>
          </div>
          <div className="ct-case2__examples">
            <div className="ct-case2__example">
              <img src="/rag示例.jpg" alt="RAG示例" />
              <div className="ct-case2__example-label">RAG知识库示例</div>
            </div>
            <div className="ct-case2__example">
              <img src="/mcp示例.jpg" alt="MCP示例" />
              <div className="ct-case2__example-label">MCP工具调用示例</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 11: 案例2入口 */}
      {step === 11 && (
        <div className="ct-case2-entry">
          <div className="ct-case2-entry__label">使用入口</div>
          <div className="ct-case2-entry__platform">微信公众号</div>
          <div className="ct-case2-entry__desc">全天候政策答疑服务</div>
        </div>
      )}

      {/* Step 12: 案例3标题 */}
      {step === 12 && (
        <div className="ct-case3">
          <div className="ct-case3__label">案例 03</div>
          <div className="ct-case3__title">工伤鉴定AI辅助系统</div>
          <div className="ct-case3__sub">OCR识别 + 大语言模型分析</div>
          <div className="ct-case3__examples">
            <div className="ct-case3__example">
              <img src="/gs.png" alt="工伤鉴定AI辅助系统" />
              <div className="ct-case3__example-label">AI模型配置界面</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 13: 案例4标题 */}
      {step === 13 && (
        <div className="ct-case4">
          <div className="ct-case4__label">案例 04</div>
          <div className="ct-case4__title">就业岗位数字人讲解</div>
          <div className="ct-case4__sub">数字人 + 语音合成 + 口型同步</div>
          <div className="ct-case4__examples">
            <div className="ct-case4__example">
              <img src="/jy.png" alt="就业岗位数字人讲解" />
              <div className="ct-case4__example-label">数字人岗位介绍</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Context;
