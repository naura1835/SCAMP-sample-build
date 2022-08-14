import React from "react";
import PropTypes from "prop-types";

import "./button.styles.scss";

const Button = ({ label, primary, className }) => {
  const mode = primary ? "primary" : "secondary";

  return <button className={`btn btn--${mode} ${className}`}>{label}</button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  primary: true,
};

export default Button;
