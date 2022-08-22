import React from "react";

import useInput from "../../custom-hooks/useInput";

import CustomInput from "../custom-input/custom-input.component";
import NavList from "../nav-list/nav-list.component";

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
      <nav className="vertical-tab">
        <h3 className="vertical-tab__heading medium-text">Blog categories</h3>
        <NavList mode="vertical" items={categories} />
      </nav>
    </aside>
  );
};

export default Sidebar;
