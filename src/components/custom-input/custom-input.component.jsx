import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-lg.svg";

import "./custom-input.styles.scss";

const CustomInput = ({ inputValue, handleChange, ...otherProps }) => {
  const { type } = otherProps;

  return (
    <div className="input-search">
      {type === "search" && <SearchIcon />}
      <input value={inputValue} onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default CustomInput;
