import React from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Button from "../button/button.component";
import NavList from "../nav-list/nav-list.component";

import "./header.styles.scss";

const Header = () => {
  const headerData = [
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
  ];
  return (
    <>
      <header className="container header">
        <div className="header__logo">
          <Logo />
        </div>
        <button aria-label="menu" className="header__nav-menu">
          <span className="menu__line"></span>
          <span className="menu__line"></span>
          <span className="menu__line"></span>
        </button>
        <nav className="nav">
          <NavList mode="horizontal" items={headerData} />
          <div className="nav__actions">
            <Button label="log in" primary={false} className="btn--flat" />
            <Button label="sign up" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
