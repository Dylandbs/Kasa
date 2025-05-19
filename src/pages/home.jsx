import React from "react";
import Header from "../components/Header/Header";
import HeroBanner from "../components/HeroBanner";
import Logement from "../components/logements";
import Footer from "../components/Footer";
import montagne from "../assets/images/montagne1.jpg";
import "../assets/styles/sass/main.scss";

function home() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <div>
          <HeroBanner
            title={"Chez vous, partout et ailleurs"}
            paysage={montagne}
          />
        </div>
        <Logement />
      </div>
      <Footer />
    </div>
  );
}

export default home;
