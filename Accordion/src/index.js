import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //App.js

ReactDOM.render(
  //redering App.js with div of HTML.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
