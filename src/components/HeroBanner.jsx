import React from "react";

/** 
 * @param {string} title
*/
const HeroBanner = ({title, paysage}) => {
  let bannerClass = "banner";

  if (!title) {
    bannerClass += " no-before"; 
  }
  return (
    <div className={bannerClass}>
      <img src={paysage} alt="" />
      {title && <p className="banner__Title">{title}</p>}
    </div>
  );
};

export default HeroBanner;
