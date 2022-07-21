import React from "react";

import CTAButton from "../CTA-button/CTA-button.component";
import CustomInput from "../custom-input/custom-input.component";

import useInput from "../../custom-hooks/useInput";

import "./email-capture.styles.scss";

const EmailCapture = ({ children, className }) => {
  const { value, handleChange } = useInput();

  return (
    <div className="email-capture">
      <div className={`${className ? className : ""}`}>
        <CustomInput
          type="text"
          placeholder="Enter your email"
          handleChange={handleChange}
          value={value}
        />
        <span className="medium-text email-capture__hint-text">{children}</span>
      </div>
      <CTAButton text="Subscribe" />
    </div>
  );
};

export default EmailCapture;
