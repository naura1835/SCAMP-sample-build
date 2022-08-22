import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

import "./nav-list.styles.scss";

const NavList = ({ items, mode, className }) => (
  <ul className={`nav-list nav-list--${mode} ${className}`}>
    {items &&
      items.map((item, id) => {
        const { title, className, isDropdown } = item;
        return (
          <NavListItem
            key={id}
            title={title || item}
            className={className}
            isDropdown={isDropdown}
          />
        );
      })}
  </ul>
);

export const NavListItem = ({ className, title, isDropdown }) => (
  <li className={`${className}`}>
    <a href="/">{title}</a>
    {isDropdown ? <ArrowDown style={{ marginLeft: "13px" }} /> : null}
  </li>
);

NavList.propTypes = {
  items: PropTypes.array.isRequired,
  mode: PropTypes.string,
  className: PropTypes.string,
};

NavList.defaultProps = {
  mode: "horizontal",
};

NavListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isDropdown: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

NavListItem.defaultProps = {
  isDropdown: false,
  title: "micro",
};

export default NavList;
