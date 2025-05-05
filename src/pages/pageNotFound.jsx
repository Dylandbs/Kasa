import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../assets/styles/sass/main.scss";

function Error404() {
  return (
    <div className="app">
      <div className="home">
        <Header />
        <div className="error404">
          <h4>404</h4>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Error404;
