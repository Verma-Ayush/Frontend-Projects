import React from "react";
import { Link } from "react-router-dom";
export default function CocktailCard({ cocktail }) {
  return (
    <div className="CocktailCard">
      <img src={cocktail.img} alt="Cocktail" />
      <h2>{cocktail.name}</h2>
      <h3>{cocktail.glass}</h3>
      <p>{cocktail.info}</p>
      <Link to={`cocktail/${cocktail.id}`}>Details</Link>
    </div>
  );
}
