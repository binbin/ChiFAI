import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Conclusion.css";

interface ConclusionProps {
  step: number;
}

/**
 * Conclusion — 第3章：致谢
 *
 * 1 step:
 * 0: 致谢 + AI生成声明
 */
const Conclusion: React.FC<ConclusionProps> = ({ step }) => {
  return (
    <div className="conclusion-chapter" data-step={step}>
      {/* Step 0: 致谢 */}
      {step === 0 && (
        <div className="conclusion">
          <div className="conclusion__label">
            <FontAwesomeIcon icon="heart" className="conclusion__label-icon" />
            致谢
          </div>
          <div className="conclusion__thanks">
            <FontAwesomeIcon
              icon="thumbs-up"
              className="conclusion__thanks-icon"
            />
            谢谢大家
          </div>
          <div className="conclusion__ai-note">
            <FontAwesomeIcon icon="robot" className="conclusion__ai-icon" />
            {/* 本视频由AI生成 */}
            本次讲解内容由AI生成
          </div>
          <div className="conclusion__details">
            <FontAwesomeIcon
              icon="building"
              className="conclusion__details-icon"
            />
            赤峰人社 ·
            大模型落地实战：人社政务服务数字场景AI探索与试点成果线上推广
          </div>
        </div>
      )}
    </div>
  );
};

export default Conclusion;
