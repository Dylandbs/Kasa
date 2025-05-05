import React from "react";
import Logo from "../Header/Logo/Logo"
import logo from "../../assets/images/logo.png";


const Footer = () => {
  return (
    <div className="footer">
      <Logo addImg={logo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
