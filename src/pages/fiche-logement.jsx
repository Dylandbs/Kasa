import React from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/tag";
import Infologement from "../../public/logement.json";
import InfoList from "../components/InfoList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Gallerie from "../components/gallerie";
import StarRating from "../components/ratingStar";
import User from "../components/user";

const Fichelogement = () => {
  const { id } = useParams();
  const logement = Infologement.find((item) => item.id === id);

  return (
    <div className="app">
      <div className="content">
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
          <InfoList
            styleName={"text-content"}
            title="Description"
            contents={logement.description}
          />
          <InfoList
            styleName={"text-content"}
            title="Équipements"
            contents={logement.equipments}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fichelogement;
