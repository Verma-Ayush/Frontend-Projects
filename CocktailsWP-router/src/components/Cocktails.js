import React from "react";
import CocktailCard from "./CocktailCard";
import { useGlobalContext } from "./Context";

export default function Cocktails() {
  const { cocktailsList } = useGlobalContext();

  //console.log(cocktailsList);
  if (cocktailsList.length < 1) {
    return (
      <div className="single-text">
        <h1>No Cocktails Matched Your Search Criteria</h1>
      </div>
    );
  }
  return (
    <div className="Cocktails-wrapper">
      <h1 style={{ color: "blue" }}>Cocktails</h1>
      <div className="Cocktails">
        {cocktailsList.map((cocktail, index) => {
          return <CocktailCard cocktail={cocktail} key={index} />;
        })}
      </div>
    </div>
  );
}
