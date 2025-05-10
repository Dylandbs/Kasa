import React from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/tag";
import Infologement from "../../public/logement.json";
import InfoList from "../components/InfoList/InfoList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Fichelogement = () => {
  const { id } = useParams(); 
  const logement = Infologement.find((item) => item.id === id);

  return (
    <div className="app">
      <div className="home">
        <Header />
        <h3>{logement.title}</h3>
        <p>{logement.location}</p>
        <Tag tags={logement.tags} />
        <div className="user">
          <p className="user__name">{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <InfoList title="Description" contents={logement.description} />
        <InfoList title="equipments" contents={logement.equipments} />
      </div>
      <Footer />
    </div>
  );
};

export default Fichelogement;
