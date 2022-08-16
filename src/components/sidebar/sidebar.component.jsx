import React from "react";

import useInput from "../../custom-hooks/useInput";

import CustomInput from "../custom-input/custom-input.component";
import VerticalTab from "../vertical-tab/vertical-tab.component";

import "./sidebar.styles.scss";

const Sidebar = ({ categories }) => {
  const { value, handleChange } = useInput("");
  return (
    <aside className="sidebar">
      <CustomInput
        type="search"
        name="search-category"
        placeholder="Search"
        inputValue={value}
        handleChange={handleChange}
      />
      <VerticalTab title="Blog categories" categories={categories} />
    </aside>
  );
};

export default Sidebar;
