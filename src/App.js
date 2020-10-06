import React, { useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/CheckOut";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<<<< POWERFUL
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in.....

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out....
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations go in here....
      unsuscribe();
    };
  }, []);

  console.log("USER IS >>>> ", user);

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
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
