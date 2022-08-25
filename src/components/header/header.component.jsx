import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import Button from "../button/button.component";
import NavList from "../nav-list/nav-list.component";

import "./header.styles.scss";

const Header = ({ navItems, logo }) => {
  return (
    <>
      <header className="container header">
        <div className="header__content">
          <div className="header__logo">{logo}</div>
          <button aria-label="menu" className="header__nav-menu">
            <span className="menu__line"></span>
            <span className="menu__line"></span>
            <span className="menu__line"></span>
          </button>
          <nav className="nav">
            <NavList mode="horizontal" items={navItems} />
          </nav>
        </div>
        <div className="nav__actions">
          <Button label="log in" primary={false} className="btn--flat" />
          <Button label="sign up" />
        </div>
      </header>
      <Outlet />
    </>
  );
};

Header.propTypes = {
  logo: PropTypes.element,
  navItems: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  logo: <Logo />,
  navItems: [
    { title: "Home", className: "nav-list__item--horizontal" },
    {
      title: "resources",
      className: "nav-list__item--horizontal",
      isDropdown: true,
    },
    {
      title: "resources",
      className: "nav-list__item--horizontal",
      isDropdown: true,
    },
    { title: "Pricing", className: "nav-list__item--horizontal" },
  ],
};

export default Header;
