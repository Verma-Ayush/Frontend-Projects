import React from "react";
import { AppProvider } from "./components/Context";
import MyProject from "./components/CocktailsWP";

function App() {
  return (
    <>
      <AppProvider>
        <MyProject />
      </AppProvider>
    </>
  );
}

export default App;
