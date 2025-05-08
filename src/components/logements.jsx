import React from "react";
import { Link } from "react-router-dom";
import Infologement from "../../public/logement.json";

const logement = () => {
  return (
    <div>
      <ul className="logement__info">
        {Infologement.map((logements) => (
          <li className="logement__item" key={logements.id}>
            <Link to={`/logement/${logements.id}`} className="logement__link">
            <h3 className="logement__title">{logements.title}</h3>
            <img
              className="logement__cover"
              src={logements.cover}
              alt={`Couverture de ${logements.title}`}
            />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default logement;

