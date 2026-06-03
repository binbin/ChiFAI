import React from "react";
import "./Harness.css";

interface HarnessProps {
  step: number;
}

/**
 * Harness — 第4章：Harness Engineering
 *
 * 1 step:
 * 0: 标题
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

    </div>
  );
};

export default Harness;
