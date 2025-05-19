import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavButton({ path, label }) {
  const location = useLocation()

  return (
    <button>
      <Link to={path} className={`nav-link ${location.pathname === path ? 'active' : ''}`}>
      {label}
      </Link>
    </button>
  );
}

export default NavButton;
