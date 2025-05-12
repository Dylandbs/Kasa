import React from "react";

const user = ({name, picture}) => {
  return (
    <div className="user">
      <p className="user__name">{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
};

export default user;
