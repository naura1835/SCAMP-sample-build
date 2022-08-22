import React from "react";

// import NavListItem from "../nav-list-item/nav-list-item.component";
import NavList from "../nav-list/nav-list.component";

import "./vertical-tab.styles.scss";

const VerticalTab = ({ title, categories }) => {
  return (
    <nav className="vertical-tab">
      <h3 className="vertical-tab__heading medium-text">{title}</h3>
      <NavList mode="verticsl" items={categories} />
    </nav>
  );
};

export default VerticalTab;
