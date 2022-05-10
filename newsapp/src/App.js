import "./App.css";
//App.js is predeclared and required

import React, { useState } from "react";
import NavBar from "./Components/navBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./Components/About";

const App = () => {
  const apiKey = "d366d55df2c647ae8e375a77075add85";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar
          color="#f11946"
          height={4}
          progress={progress} //we are assigning a defined progress argument our progress value.
        />
        <NavBar />
        {/* The problem with Router in class based component is it doesnt re-render when a new link is assigned to a page content.
          To make it happen we have assign a key to every route content written. 

          Switch is just like the switch-case , only one of the Route under a switch will be active at a time.
          */}
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              category="general"
            />
          </Route>
          {/* If any link has written "/business" as it's "to=" ,then it will be assigned to the content written inside given route -> <News...> */}
          <Route exact path="/business">
            <News
              setProgress={setProgress} //passed function ref (when it's called in <News/> component , this page's function will be called)
              apiKey={apiKey}
              key="business" //Unique key is given to every Route (even tho is has no use as an argument in <News/>)
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              country="in"
              category="technology"
            />
          </Route>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="about"
              country="in"
              category="about"
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
