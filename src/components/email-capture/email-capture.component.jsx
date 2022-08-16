import React from "react";

import Button from "../button/button.component";
import CustomInput from "../custom-input/custom-input.component";

import useInput from "../../custom-hooks/useInput";

import "./email-capture.styles.scss";

const EmailCapture = ({ direction, children }) => {
  const { value, handleChange } = useInput();

  return (
    <div className="email-capture">
      <CustomInput
        type="text"
        placeholder="Enter your email"
        label={children}
        handleChange={handleChange}
        value={value}
        direction={direction}
      />
      <Button label="Subscribe" />
    </div>
  );
};

export default EmailCapture;
