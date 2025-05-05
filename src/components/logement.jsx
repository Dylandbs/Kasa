import React from "react";
import Infologement from "../../public/logement.json";

const logement = () => {
  return (
    <div>
      <ul className="logement__info">
        {Infologement.map((logement) => (
          <li className="logement__item" key={logement.id}>
            <h3 className="logement__title">{logement.title}</h3>
            <img
              className="logement__cover"
              src={logement.cover}
              alt={`Couverture de ${logement.title}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default logement;
