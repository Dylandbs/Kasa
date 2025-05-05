import React from 'react';
import Logo from './Logo/Logo.jsx';
import NavButton from './NavButton/NavButton.jsx';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header-container">
      <Logo addImg={logo}/>
      <div className="nav-buttons">
        <Link to="/">ACCUEIL</Link>
        <Link to="/A-propos">A PROPOS</Link> 
      </div>
    </header>
  );
}

export default Header;
