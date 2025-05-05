import React from "react";
import Header from "../components/Header/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Logement from "../components/logement"
import Footer from "../components/Footer/Footer";
import montagne from "../assets/images/montagne1.jpg";
import "../assets/styles/sass/main.scss";

function home() {
  return (
    <div className="app">
      <div className="home">
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
