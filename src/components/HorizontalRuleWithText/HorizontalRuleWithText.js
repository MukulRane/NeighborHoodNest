import React from "react";
import "./HorizontalRuleWithText.css";

const HorizontalRuleWithText = ({ text }) => {
  return (
    <div className="horizontal-rule-wit-text">
      <hr className="horizontal-rule-wit-text-line" />
      <span className="horizontal-rule-wit-text-text">{text}</span>
      <hr className="horizontal-rule-wit-text-line" />
    </div>
  );
};

export default HorizontalRuleWithText;
