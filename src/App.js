import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h2>Login</h2>
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
