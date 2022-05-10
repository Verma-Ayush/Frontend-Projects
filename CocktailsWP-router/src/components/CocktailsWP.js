import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import CocktailPage from "./CocktailPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

export default function CocktailsWP() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}
