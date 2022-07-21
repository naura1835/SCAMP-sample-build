import React from "react";

import "./CTA-button.styles.scss";

const CTAButton = ({ text, isFlatBtn }) => (
  <button className={`cta-btn ${isFlatBtn ? "btn--flat" : ""}`}>{text}</button>
);

export default CTAButton;
