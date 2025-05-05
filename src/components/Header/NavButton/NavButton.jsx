import React from 'react';


function NavButton({ nameBtn }) {
  return (
    <button className="nav__btn--active">
      {nameBtn}
    </button>
  );
}

export default NavButton;

