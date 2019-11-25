import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
