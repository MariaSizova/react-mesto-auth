import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import burgerMenu from "../images/Line.svg";
import closeMenuIcon from "../images/close-icon-mobile.svg";
import logo from "../images/header-logo.svg";
import NavBar from "./NavBar.js";

function Header({
  loggedIn,
  onSignOut,
  userEmail,
  isOpen,
  onMobileMenu,
  onClose,
  isLoading,
}) {
  return (
    <header className={`header ${isOpen && "header_is-enlarged"}`}>
      <img className="header__logo" src={logo} alt="Логотип" />
      <NavBar
        loggedIn={loggedIn}
        onSignOut={onSignOut}
        userEmail={userEmail}
        isOpen={isOpen}
        onMobileMenu={onMobileMenu}
        onClose={onClose}
        isLoading={isLoading}
      />
    </header>
  );
}

export default Header;
