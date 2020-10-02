import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/logout">
          <h1>checkout</h1>
        </Route>
        <Route path="/login">
          <h2>Login</h2>
        </Route>

        <Route path="/">
          <Header />
          <h1>Home Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
