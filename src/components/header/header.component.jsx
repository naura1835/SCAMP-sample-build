import React from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Button from "../button/button.component";
import NavListItem from "../nav-list-item/nav-list-item.component";
import NavList from "../nav-list/nav-list.component";

import "./header.styles.scss";

const Header = () => {
  const headerData = [
    { title: "Home" },
    { title: "resources", isDropdown: "isDropdown" },
    { title: "resources", isDropdown: "isDropdown" },
    { title: "Pricing" },
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
          <NavList className="nav__list">
            {headerData.map(({ title, isDropdown }, index) => (
              <NavListItem
                key={index}
                className="nav__list__item"
                text={title}
                isDropdown={isDropdown}
              />
            ))}
          </NavList>
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
