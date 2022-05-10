import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar-wrapper">
      <div className="Navbar">
        <p>
          <Link to="/">CocktailsTale</Link>
        </p>
        <div>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
