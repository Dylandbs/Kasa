import React from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/tag";
import Infologement from "../../public/logement.json";
import InfoList from "../components/InfoList/InfoList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Gallerie from "../components/gallerie/gallerie";
import StarRating from "../components/ratingStar/ratingStar";
import User from "../components/user";

const Fichelogement = () => {
  const { id } = useParams();
  const logement = Infologement.find((item) => item.id === id);

  return (
    <div className="app">
      <div className="home">
        <Header />
        <Gallerie images={logement.pictures} />

        <div className="logement-section">
          <div className="logement-info-header">
            <div className="logement-header">
              <h3 className="logement-name">{logement.title}</h3>
              <p className="logement-location">{logement.location}</p>
            </div>
            <Tag tags={logement.tags} />
          </div>

          <div className="user-rating">
            <User name={logement.host.name} picture={logement.host.picture} />
            <StarRating rating={logement.rating} />
          </div>
        </div>
        <div className="container-info">
          <InfoList title="Description" contents={logement.description} />
          <InfoList title="Équipements" contents={logement.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fichelogement;
