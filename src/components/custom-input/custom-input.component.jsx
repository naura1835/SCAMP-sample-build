import React from "react";
import PropType from "prop-types";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-lg.svg";

import "./custom-input.styles.scss";

const CustomInput = (props) => {
  const { inputValue, handleChange, label, direction, color, ...otherProps } =
    props;
  const { type } = otherProps;

  return (
    <div className="input" style={{ flexDirection: direction }}>
      <div
        className="input__box"
        style={direction === "column-reverse" ? { marginBottom: "1rem" } : null}
      >
        {type === "search" && <SearchIcon />}
        <input value={inputValue} onChange={handleChange} {...otherProps} />
      </div>
      {label && (
        <span className="medium-text input__label" style={{ color: color }}>
          {label}
        </span>
      )}
    </div>
  );
};

CustomInput.propType = {
  type: PropType.string.isRequired,
  inputValue: PropType.string,
  placeholder: PropType.string,
  handleChange: PropType.func,
  label: PropType.string,
  direction: PropType.string,
};

CustomInput.defaultProps = {
  type: "text",
  direction: "column",
};

export default CustomInput;
