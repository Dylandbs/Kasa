import React from "react";

const tag = ({ tags }) => {
  return (
    <div className="tags__container">
      {tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default tag;
