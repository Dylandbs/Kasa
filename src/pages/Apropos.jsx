import React from "react";
import Header from "../components/Header/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import InfoList from "../components/InfoList/InfoList";
import Footer from "../components/Footer/Footer";
import montagne from "../assets/images/montagne2.png";
import "../assets/styles/sass/main.scss";

function Apropos() {
  return (
    <div className="app">
      <div className="home">
        <Header />
        <HeroBanner paysage={montagne} />
        <div className="container__infolist">
          <InfoList
            title="Fiabilité"
            contents="Les annonces postées sur Kasa garantissent 
            une fiabilité totale. Les photos sont conformes aux logements, 
            et toutes les informations sont régulièrement 
            vérifiées par nos équipes."
          />
          <InfoList
            title="Respect"
            contents="La bienveillance fait partie 
          des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage 
          entraînera une exclusion de notre plateforme"
          />
          <InfoList
            title="Service"
            contents="Les annonces postées sur Kasa 
          garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, 
          et toutes les informations sont régulièrement 
          vérifiées par nos équipes."
          />
          <InfoList
            title="Sécurité"
            contents="La sécurité est la priorité de Kasa. 
          Aussi bien pour nos hôtes que pour les voyageurs, c
          haque logement correspond aux critères 
          de sécurité établis par nos services. 
          En laissant une note aussi bien à l’hôte qu’au locataire, 
          cela permet à nos équipes de vérifier 
          que les standards sont bien respectés. 
          Nous organisons également des ateliers 
          sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
