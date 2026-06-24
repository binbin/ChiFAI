import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Injury.css";

interface InjuryProps {
  step: number;
}

/**
 * Injury — 第5章：工伤鉴定AI辅助系统
 *
 * 4 steps:
 * 0: 总览 — 三个角色
 * 1: 管理员功能 — AI诊断与专家管理
 * 2: 专家组功能 — 鉴定与现场管理
 * 3: 系统部署 — 一键安装
 */
const Injury: React.FC<InjuryProps> = ({ step }) => {
  return (
    <div className="injury-chapter" data-step={step}>
      {/* Step 0: 总览 */}
      {step === 0 && (
        <div className="injury-overview">
          <div className="injury-overview__label">工伤鉴定AI辅助系统</div>
          <h2 className="injury-overview__title">AI辅助与现场管理</h2>
          <div className="injury-overview__roles">
            {[
              {
                icon: "user-cog",
                title: "管理员",
                desc: "鉴定流程管理、AI诊断、专家抽取与分组",
              },
              {
                icon: "users",
                title: "专家组",
                desc: "查看诊断信息、进行鉴定、现场签到",
              },
              {
                icon: "user-injured",
                title: "被鉴定人员",
                desc: "提交材料、现场候诊、交互大屏叫号",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="injury-overview__role"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <FontAwesomeIcon
                  icon={item.icon as any}
                  className="injury-overview__icon"
                />
                <div className="injury-overview__title-role">{item.title}</div>
                <div className="injury-overview__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: 管理员功能 */}
      {step === 1 && (
        <div className="injury-admin">
          <div className="injury-admin__header">
            <div className="injury-admin__label">管理员功能</div>
            <div className="injury-admin__subtitle">AI诊断与专家管理</div>
          </div>
          <div className="injury-admin__content">
            <div className="injury-admin__section">
              <div className="injury-admin__section-title">
                <FontAwesomeIcon icon="file-medical" />
                <span>被鉴定人员导入</span>
              </div>
              <div className="injury-admin__section-desc">
                导入ZIP压缩文件，包含身份证号命名的文件夹，内含各类报告扫描件（PDF或图片）
              </div>
            </div>
            <div className="injury-admin__section">
              <div className="injury-admin__section-title">
                <FontAwesomeIcon icon="robot" />
                <span>AI智能诊断</span>
              </div>
              <div className="injury-admin__section-desc">
                自动分析医疗材料，识别所需鉴定专业、主要诊疗机构，推荐伤残等级
              </div>
            </div>
            <div className="injury-admin__section">
              <div className="injury-admin__section-title">
                <FontAwesomeIcon icon="user-md" />
                <span>专家抽取与分组</span>
              </div>
              <div className="injury-admin__section-desc">
                智能抽取专家，自动回避治疗医院专家，支持指定权威专家，自动分组
              </div>
            </div>
            <div className="injury-admin__section">
              <div className="injury-admin__section-title">
                <FontAwesomeIcon icon="clipboard-list" />
                <span>现场管理</span>
              </div>
              <div className="injury-admin__section-desc">
                激活鉴定场次、生成一次性密码、管理专家签到、导出鉴定结论与审计材料
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: 专家组功能 */}
      {step === 2 && (
        <div className="injury-expert">
          <div className="injury-expert__header">
            <div className="injury-expert__label">专家组功能</div>
            <div className="injury-expert__subtitle">鉴定与现场管理</div>
          </div>
          <div className="injury-expert__content">
            <div className="injury-expert__feature">
              <FontAwesomeIcon icon="key" className="injury-expert__icon" />
              <div>
                <div className="injury-expert__title">一次性密码激活</div>
                <div className="injury-expert__desc">
                  现场激活后生成密码，未激活无法登录
                </div>
              </div>
            </div>
            <div className="injury-expert__feature">
              <FontAwesomeIcon icon="brain" className="injury-expert__icon" />
              <div>
                <div className="injury-expert__title">AI诊断信息</div>
                <div className="injury-expert__desc">
                  查看左侧AI分析结果，辅助鉴定判断
                </div>
              </div>
            </div>
            <div className="injury-expert__feature">
              <FontAwesomeIcon
                icon="file-alt"
                className="injury-expert__icon"
              />
              <div>
                <div className="injury-expert__title">附件资料查看</div>
                <div className="injury-expert__desc">
                  查看被鉴定人员的医疗报告和扫描件
                </div>
              </div>
            </div>
            <div className="injury-expert__feature">
              <FontAwesomeIcon icon="tv" className="injury-expert__icon" />
              <div>
                <div className="injury-expert__title">交互大屏叫号</div>
                <div className="injury-expert__desc">
                  现场大屏显示候诊人员、叫号信息
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: 系统部署 */}
      {step === 3 && (
        <div className="injury-deploy">
          <div className="injury-deploy__header">
            <div className="injury-deploy__label">系统部署</div>
            <div className="injury-deploy__subtitle">一键安装</div>
          </div>
          <div className="injury-deploy__content">
            <div className="injury-deploy__feature">
              <div className="injury-deploy__feature-title">
                <FontAwesomeIcon icon="terminal" />
                <span>一条命令启动</span>
              </div>
              <div className="injury-deploy__feature-desc">
                系统一键安装，直接运行，无需复杂配置
              </div>
            </div>
            <div className="injury-deploy__feature">
              <div className="injury-deploy__feature-title">
                <FontAwesomeIcon icon="desktop" />
                <span>系统要求</span>
              </div>
              <div className="injury-deploy__feature-desc">
                Win10以上系统，推荐Linux或Mac环境
              </div>
            </div>
            <div className="injury-deploy__ai">
              <div className="injury-deploy__ai-title">
                <FontAwesomeIcon icon="brain" />
                <span>AI模型配置</span>
              </div>
              <div className="injury-deploy__ai-items">
                <div className="injury-deploy__ai-item">
                  <span className="injury-deploy__ai-label">OCR模型</span>
                  <span>识别医疗材料中的文字信息</span>
                </div>
                <div className="injury-deploy__ai-item">
                  <span className="injury-deploy__ai-label">大语言模型</span>
                  <span>进行诊断分析、生成鉴定建议</span>
                </div>
              </div>
              <div className="injury-deploy__ai-note">
                支持在线API或本地部署，每鉴定一人成本约0.2元
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Injury;
