import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";

import "./nav-list.styles.scss";

const NavList = ({ children, className }) => (
  <ul className={className}>{children}</ul>
);

export const NavListItem = ({ className, text, isDropdown }) => (
  <li className={`nav-list--item ${className}`}>
    <a href="/">{text}</a>
    {isDropdown ? <ArrowDown style={{ marginLeft: "13px" }} /> : null}
  </li>
);

NavList.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
};

NavListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isDropdown: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

NavListItem.defaultProps = {
  isDropdown: false,
};

export default NavList;
