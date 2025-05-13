import React from "react";
import Logo from "./Logo/Logo.jsx";
import NavButton from "./NavButton/NavButton.jsx";
import logo from "../../assets/images/logo.png";


function Header() {
  return (
    <header className="header-container">
      <Logo addImg={logo} />
      <nav className="navbar">
        <NavButton path={"/"} label={"Accueil"} />
        <NavButton path={"/A-propos"} label={"A Propos"} />
      </nav>
    </header>
  );
}

export default Header;
