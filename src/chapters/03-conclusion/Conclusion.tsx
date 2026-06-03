import React from "react";
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
          <div className="conclusion__label">致谢</div>
          <div className="conclusion__thanks">谢谢大家</div>
          <div className="conclusion__ai-note">
            本视频由AI生成
          </div>
          <div className="conclusion__details">
            赤峰人社 · AI应用实践
          </div>
        </div>
      )}
    </div>
  );
};

export default Conclusion;
