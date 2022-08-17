import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

import "./custom-dropdown.styles.scss";

const CustomDropdown = ({ categories }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(categories[0]);
  }, [categories]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-dropdown">
      <select value={inputValue} onChange={handleChange}>
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ArrowDown />
    </div>
  );
};

CustomDropdown.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CustomDropdown;
