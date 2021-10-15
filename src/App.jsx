import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import "./components/style/css/main.css";
import Home from "./components/MainComponent/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
