import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Assistant.css";

interface AssistantProps {
  step: number;
}

/**
 * Assistant — 第4章：人社业务经办助手
 *
 * 参考PPT设计，每个功能独立展示
 *
 * 12 steps:
 * 0: 总览 — 五大功能概览
 * 1: 业务AI预审 - 标题
 * 2: 业务AI预审 - 传统痛点
 * 3: 业务AI预审 - AI预审流程
 * 4: 业务AI预审 - 对比与价值
 * 5: 养老金调整明白单 - 痛点
 * 6: 养老金调整明白单 - 内容与价值
 * 7: 受理业务规范化交接 - 痛点
 * 8: 受理业务规范化交接 - 流程与成效
 * 9: 职工退休业务预查询 - 痛点
 * 10: 职工退休业务预查询 - 解决方案
 * 11: 测算养老金
 */
const Assistant: React.FC<AssistantProps> = ({ step }) => {
  return (
    <div className="assistant-chapter" data-step={step}>
      {/* Step 0: 总览 */}
      {step === 0 && (
        <div className="assistant-overview">
          <div className="assistant-overview__label">CONTENTS</div>
          <h2 className="assistant-overview__title">人社业务经办助手</h2>
          <div className="assistant-overview__grid">
            {[
              { num: "01", icon: "search", label: "业务AI预审", en: "BUSINESS AI PRE-REVIEW" },
              { num: "02", icon: "file-invoice-dollar", label: "养老金调整明白单", en: "PENSION ADJUSTMENT STATEMENT" },
              { num: "03", icon: "exchange-alt", label: "受理业务规范化交接", en: "STANDARDIZED HANDOVER" },
              { num: "04", icon: "user-check", label: "职工退休业务预查询", en: "PRE-QUERY FOR RETIREMENT" },
              { num: "05", icon: "calculator", label: "测算养老金", en: "PENSION CALCULATION" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-overview__item"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="assistant-overview__num">{item.num}</div>
                <FontAwesomeIcon icon={item.icon as any} className="assistant-overview__icon" />
                <div className="assistant-overview__item-label">{item.label}</div>
                <div className="assistant-overview__item-en">{item.en}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: 业务AI预审 - 标题 */}
      {step === 1 && (
        <div className="assistant-section-title">
          <div className="assistant-section-title__num">01</div>
          <FontAwesomeIcon icon="search" className="assistant-section-title__icon" />
          <h2 className="assistant-section-title__text">业务AI预审</h2>
          <div className="assistant-section-title__en">BUSINESS AI PRE-EXAMINATION</div>
        </div>
      )}

      {/* Step 2: 业务AI预审 - 传统痛点 */}
      {step === 2 && (
        <div className="assistant-preaudit-pain">
          <div className="assistant-preaudit-pain__header">
            <div className="assistant-preaudit-pain__label">传统人工预审流程</div>
            <div className="assistant-preaudit-pain__subtitle">繁琐 · 低效 · 易出错</div>
            <div className="assistant-preaudit-pain__en">MANUAL PROCESS PAIN POINTS</div>
          </div>
          <div className="assistant-preaudit-pain__grid">
            {[
              { num: "01", icon: "folder-open", title: "材料审核繁琐", desc: "审核员需手动翻阅大量纸质档案，逐页核对信息，过程耗时耗力且极易出现遗漏。" },
              { num: "02", icon: "random", title: "信息核对复杂", desc: "需在多个独立业务系统间频繁切换，手动录入并比对关键数据，操作链条长，效率低下。" },
              { num: "03", icon: "balance-scale", title: "标准难以统一", desc: "审核标准依赖个人经验，不同审核人员对政策细则的理解和把握存在差异，执行尺度不一。" },
              { num: "04", icon: "users", title: "人力成本高昂", desc: "大量人力资源被消耗在机械、重复性的基础核对工作中，难以投入到更高价值的专业服务和管理工作上。" },
              { num: "05", icon: "shield-alt", title: "风险防控滞后", desc: "人工审核手段有限，难以有效识别虚假信息和潜在的欺诈骗保行为，无法形成事前拦截，为基金安全埋下隐患。" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-preaudit-pain__item"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="assistant-preaudit-pain__num">{item.num}</div>
                <FontAwesomeIcon icon={item.icon as any} className="assistant-preaudit-pain__icon" />
                <div className="assistant-preaudit-pain__title">{item.title}</div>
                <div className="assistant-preaudit-pain__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: 业务AI预审 - AI预审流程 */}
      {step === 3 && (
        <div className="assistant-preaudit-ai">
          <div className="assistant-preaudit-ai__header">
            <div className="assistant-preaudit-ai__label">改进后的AI预审流程</div>
            <div className="assistant-preaudit-ai__subtitle">智能预审 + 人工复核</div>
            <div className="assistant-preaudit-ai__desc">通过技术赋能与流程重塑，实现审核效率与准确性双重提升</div>
          </div>
          <div className="assistant-preaudit-ai__steps">
            {[
              { num: "01", icon: "camera", title: "材料智能采集", desc: "通过大模型技术自动识别上传的各类申报材料，精准提取关键信息，减少人工录入操作。" },
              { num: "02", icon: "sync", title: "信息自动比对", desc: "自动登录多业务系统，将提取信息与数据库交叉比对，消除数据孤岛。" },
              { num: "03", icon: "check-circle", title: "智能审核判断", desc: "自定义规则自动校验数据合规性，自动生成问题清单，对无异常数据直接通过。" },
              { num: "04", icon: "user-check", title: "人工精准复核", desc: "审核人员从重复劳动中解放，聚焦问题清单中的异常情况进行人工介入，高效完成终审。" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-preaudit-ai__step"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="assistant-preaudit-ai__step-num">{item.num}</div>
                <FontAwesomeIcon icon={item.icon as any} className="assistant-preaudit-ai__icon" />
                <div className="assistant-preaudit-ai__title">{item.title}</div>
                <div className="assistant-preaudit-ai__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: 业务AI预审 - 对比与价值 */}
      {step === 4 && (
        <div className="assistant-preaudit-compare">
          <div className="assistant-preaudit-compare__header">
            <div className="assistant-preaudit-compare__label">比较一下两种方式</div>
            <div className="assistant-preaudit-compare__subtitle">全面对比改进点</div>
          </div>
          <div className="assistant-preaudit-compare__table">
            <div className="assistant-preaudit-compare__row assistant-preaudit-compare__row--header">
              <div className="assistant-preaudit-compare__cell">对比项</div>
              <div className="assistant-preaudit-compare__cell">原有方式</div>
              <div className="assistant-preaudit-compare__cell">新方式（AI预审）</div>
            </div>
            {[
              { item: "效率", old: "低，手动翻阅查询耗时耗力", new: "高，AI数秒内完成比对，效率提升超90%" },
              { item: "准确性", old: "易出错，易因疲劳导致疏忽", new: "高，AI严格执行规则，准确率接近100%" },
              { item: "标准化", old: "难统一，依赖个人经验", new: "高，AI基于统一规则引擎，标准一致" },
            ].map((row, i) => (
              <div
                key={i}
                className="assistant-preaudit-compare__row"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="assistant-preaudit-compare__cell assistant-preaudit-compare__cell--item">{row.item}</div>
                <div className="assistant-preaudit-compare__cell assistant-preaudit-compare__cell--old">{row.old}</div>
                <div className="assistant-preaudit-compare__cell assistant-preaudit-compare__cell--new">{row.new}</div>
              </div>
            ))}
          </div>
          <div className="assistant-preaudit-compare__value">
            <div className="assistant-preaudit-compare__value-title">AI预审的价值与意义</div>
            <div className="assistant-preaudit-compare__value-items">
              {[
                { icon: "tachometer-alt", title: "提升服务效率", desc: "分流近三分之一的人工服务，替代近一半的人工预审工作" },
                { icon: "cogs", title: "优化工作模式", desc: "有效压缩业务环节、减少重复劳动，聚焦高价值环节" },
                { icon: "lightbulb", title: "推动治理创新", desc: "助力政务服务向更加高效、智能、便捷的方向发展" },
              ].map((item, i) => (
                <div key={i} className="assistant-preaudit-compare__value-item">
                  <FontAwesomeIcon icon={item.icon as any} />
                  <div>
                    <div className="assistant-preaudit-compare__value-item-title">{item.title}</div>
                    <div className="assistant-preaudit-compare__value-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 5: 养老金调整明白单 - 痛点 */}
      {step === 5 && (
        <div className="assistant-pension-pain">
          <div className="assistant-pension-pain__header">
            <div className="assistant-pension-pain__label">传统养老金调整告知的痛点</div>
            <div className="assistant-pension-pain__subtitle">政策复杂，群众难懂</div>
            <div className="assistant-pension-pain__desc">在推出明白单之前，养老金调整告知方式存在诸多弊端，严重影响了群众的获得感与满意度。</div>
          </div>
          <div className="assistant-pension-pain__grid">
            {[
              { num: "01", icon: "book", title: "政策晦涩", desc: "调整方案涉及定额、挂钩、倾斜等多种因素，规则繁多，普通群众难以理解具体含义。" },
              { num: "02", icon: "calculator", title: "计算复杂", desc: "个人养老金增加额的计算逻辑不透明，缺乏明细支撑，群众无法自行核对金额准确性。" },
              { num: "03", icon: "phone", title: "咨询量大", desc: "群众因对政策和金额不理解，频繁致电或前往经办大厅咨询，大幅增加了经办人员的工作压力。" },
              { num: "04", icon: "frown", title: "体验不佳", desc: "群众往往感觉稀里糊涂涨了钱，对政策红利感知不强，获得感低，甚至产生不必要的误解。" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-pension-pain__item"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="assistant-pension-pain__num">{item.num}</div>
                <FontAwesomeIcon icon={item.icon as any} className="assistant-pension-pain__icon" />
                <div className="assistant-pension-pain__title">{item.title}</div>
                <div className="assistant-pension-pain__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 6: 养老金调整明白单 - 内容与价值 */}
      {step === 6 && (
        <div className="assistant-pension-content">
          <div className="assistant-pension-content__header">
            <div className="assistant-pension-content__label">养老金调整明白单内容与价值</div>
            <div className="assistant-pension-content__subtitle">让每一分钱都清清楚楚</div>
          </div>
          <div className="assistant-pension-content__grid">
            {[
              { icon: "user", title: "个人信息", desc: "姓名、身份证号、原养老金信息" },
              { icon: "file-alt", title: "政策摘要", desc: "简明扼要介绍本次调整核心方案" },
              { icon: "list-ol", title: "调整明细", desc: "列出定额、挂钩、倾斜各项增加金额" },
              { icon: "chart-bar", title: "前后对比", desc: "直观展示调整前后养老金水平变化" },
              { icon: "clock", title: "发放说明", desc: "明确执行时间及补发、发放到账时间节点" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-pension-content__item"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <FontAwesomeIcon icon={item.icon as any} className="assistant-pension-content__icon" />
                <div className="assistant-pension-content__title">{item.title}</div>
                <div className="assistant-pension-content__desc">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="assistant-pension-content__value">
            <div className="assistant-pension-content__value-title">作用和意义</div>
            <div className="assistant-pension-content__value-items">
              {[
                { icon: "handshake", title: "消除疑虑，增进信任", desc: "清晰的计算过程消除了群众对暗箱操作的疑虑，增强了对社保部门的信任。" },
                { icon: "language", title: "简化理解，降低成本", desc: "群众无需研究复杂的政策文件，数据和结果一目了然，大幅降低了咨询成本。" },
                { icon: "heart", title: "体现温度，提升获得感", desc: "通过主动、精准的服务让群众感受到政府的用心与关怀，切实将政策红利转化为幸福感。" },
              ].map((item, i) => (
                <div key={i} className="assistant-pension-content__value-item">
                  <FontAwesomeIcon icon={item.icon as any} />
                  <div>
                    <div className="assistant-pension-content__value-item-title">{item.title}</div>
                    <div className="assistant-pension-content__value-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 7: 受理业务规范化交接 - 痛点 */}
      {step === 7 && (
        <div className="assistant-handover-pain">
          <div className="assistant-handover-pain__header">
            <div className="assistant-handover-pain__label">传统业务交接流程的痛点</div>
            <div className="assistant-handover-pain__subtitle">业务痛点分析</div>
          </div>
          <div className="assistant-handover-pain__grid">
            {[
              { num: "01", icon: "database", title: "信息孤岛", desc: "各系统独立，数据不共享，需手动多次整理材料，增加办事负担。" },
              { num: "02", icon: "random", title: "流程断点", desc: "业务在部门间流转时，交接标准不一，信息传递不顺畅，容易导致延误和遗漏。" },
              { num: "03", icon: "question-circle", title: "责任不清", desc: "出现问题时，难以追溯具体环节和责任人，导致问题解决缓慢，推诿扯皮现象偶发。" },
              { num: "04", icon: "clock", title: "效率低下", desc: "业务多为串行办理，各环节等待时间长，整体办理周期长，经办效率亟待提升。" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-handover-pain__item"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="assistant-handover-pain__num">{item.num}</div>
                <FontAwesomeIcon icon={item.icon as any} className="assistant-handover-pain__icon" />
                <div className="assistant-handover-pain__title">{item.title}</div>
                <div className="assistant-handover-pain__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 8: 受理业务规范化交接 - 流程与成效 */}
      {step === 8 && (
        <div className="assistant-handover-flow">
          <div className="assistant-handover-flow__header">
            <div className="assistant-handover-flow__label">规范化交接与受理量公示</div>
            <div className="assistant-handover-flow__subtitle">一窗受理 · 内部流转 · 统一出件</div>
            <div className="assistant-handover-flow__desc">通过规范化交接流程，系统自动生成交接表单，确保业务不遗漏、流程更顺畅。同时，实时公示所有柜员的受理量，激发工作积极性，实现经办效率与管理水平的双重提升。</div>
          </div>
          <div className="assistant-handover-flow__steps">
            {[
              { num: "01", icon: "file-contract", title: "自动生成表单", desc: "系统根据受理业务自动生成标准化交接表单，规范交接内容。" },
              { num: "02", icon: "check-double", title: "避免业务遗漏", desc: "所有交接事项清晰明确，责任到人，杜绝业务遗漏风险。" },
              { num: "03", icon: "project-diagram", title: "理顺内部流程", desc: "优化岗位间流转逻辑，权责清晰，业务追溯方便快捷。" },
              { num: "04", icon: "chart-line", title: "公示受理量", desc: "实时公开柜员业务受理数据，透明化管理，激发工作积极性。" },
              { num: "05", icon: "tachometer-alt", title: "提升经办效率", desc: "全流程优化，减少等待时间，显著提升整体经办效率。" },
            ].map((item, i) => (
              <div
                key={i}
                className="assistant-handover-flow__step"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="assistant-handover-flow__step-num">{item.num}</div>
                <FontAwesomeIcon icon={item.icon as any} className="assistant-handover-flow__icon" />
                <div className="assistant-handover-flow__title">{item.title}</div>
                <div className="assistant-handover-flow__desc">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="assistant-handover-flow__stats">
            <div className="assistant-handover-flow__stat">
              <div className="assistant-handover-flow__stat-value">0.5小时</div>
              <div className="assistant-handover-flow__stat-label">每日为每位受理人员节省</div>
            </div>
            <div className="assistant-handover-flow__stat">
              <div className="assistant-handover-flow__stat-value">90%</div>
              <div className="assistant-handover-flow__stat-label">业务遗漏风险降低</div>
            </div>
            <div className="assistant-handover-flow__stat">
              <div className="assistant-handover-flow__stat-value">20%以内</div>
              <div className="assistant-handover-flow__stat-label">柜员平均叫号量差距</div>
            </div>
            <div className="assistant-handover-flow__stat">
              <div className="assistant-handover-flow__stat-value">95%</div>
              <div className="assistant-handover-flow__stat-label">业务办理满意度</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 9: 职工退休业务预查询 - 痛点 */}
      {step === 9 && (
        <div className="assistant-retire-pain-image">
          <img src={`${import.meta.env.BASE_URL}paint1.png`} alt="职工退休业务预查询痛点" className="assistant-retire-pain-image__img" />
        </div>
      )}

      {/* Step 10: 职工退休业务预查询 - 解决方案 */}
      {step === 10 && (
        <div className="assistant-retire-solution">
          <div className="assistant-retire-solution__header">
            <div className="assistant-retire-solution__label">业务预查询</div>
            <div className="assistant-retire-solution__subtitle">真正的"跑一次"</div>
          </div>
          <div className="assistant-retire-solution__content">
            <div className="assistant-retire-solution__desc">
              现在在系统的受理直接把上述问题一次性摸清，一次性处理，做到真正的跑一次。
            </div>
            <div className="assistant-retire-solution__features">
              {[
                { icon: "eye", title: "提升透明度", desc: "让职工提前了解退休政策和个人权益，消除信息不对称，让政策更公开透明。" },
                { icon: "running", title: "减少跑腿次数", desc: "一次性告知所需材料清单，优化办事流程，避免职工因材料不全而多次往返窗口。" },
                { icon: "smile", title: "增强服务体验", desc: "提供便捷、高效的线上+线下一体化服务，让职工切实感受到数字化带来的便利与温度。" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="assistant-retire-solution__feature"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <FontAwesomeIcon icon={item.icon as any} className="assistant-retire-solution__icon" />
                  <div className="assistant-retire-solution__title">{item.title}</div>
                  <div className="assistant-retire-solution__desc">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="assistant-retire-solution__slogan">
              <FontAwesomeIcon icon="hand-pointer" />
              <span>真正跑一次</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 11: 测算养老金 */}
      {step === 11 && (
        <div className="assistant-calc">
          <div className="assistant-calc__header">
            <div className="assistant-calc__label">测算养老金</div>
            <div className="assistant-calc__en">PENSION CALCULATION</div>
          </div>
          <div className="assistant-calc__content">
            <div className="assistant-calc__painpoints">
              <div className="assistant-calc__subtitle">传统养老金测算方式的痛点</div>
              <div className="assistant-calc__desc">计算复杂，耗时费力</div>
              <div className="assistant-calc__pain-list">
                {[
                  { icon: "square-root-alt", text: "公式复杂：养老金计算公式涉及多个参数，普通群众难以理解和手动计算，门槛较高。" },
                  { icon: "database", text: "数据缺失：个人难以获取完整的历年缴费基数、缴费年限、社平工资等关键精确数据。" },
                  { icon: "map-marked-alt", text: "咨询不便：线下咨询需前往社保大厅，排队等待耗费大量时间和精力，效率较低。" },
                  { icon: "eye-slash", text: "结果不直观：人工测算往往仅给出总额数字，缺乏基础养老金、个人账户等详细构成说明。" },
                ].map((item, i) => (
                  <div key={i} className="assistant-calc__pain-item">
                    <FontAwesomeIcon icon={item.icon as any} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="assistant-calc__solution">
              <div className="assistant-calc__subtitle">提供个性化服务</div>
              <div className="assistant-calc__solution-title">精准测算</div>
              <div className="assistant-calc__solution-desc">消除困惑，促进正确认知</div>
              <div className="assistant-calc__features">
                {[
                  { icon: "chart-pie", title: "提升政策知晓度", desc: "让参保人员直观了解养老金的计算方式和影响因素。" },
                  { icon: "lightbulb", title: "辅助个人养老规划", desc: "帮助用户根据测算结果，合理规划未来的缴费策略。" },
                  { icon: "heart", title: "增强参保积极性", desc: "清晰的待遇预期，能有效提升群众的参保和持续缴费的积极性。" },
                ].map((item, i) => (
                  <div key={i} className="assistant-calc__feature">
                    <FontAwesomeIcon icon={item.icon as any} />
                    <div>
                      <div className="assistant-calc__feature-title">{item.title}</div>
                      <div className="assistant-calc__feature-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
