import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    //login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in redirect to home page.
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const registor = (event) => {
    event.preventDefault();
    //registor logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in redirect home page
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://www.pngmart.com/files/7/Web-Design-Transparent-Background.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Login</h1>

        <form>
          <div className="login__topborder">
            <h4>Email</h4>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
            />
            <h4>Password</h4>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="text"
            />
            <button onClick={login} className="login__signIn">
              Login
            </button>
          </div>

          <p>
            If it is your first time Please Register by pressing the signup
            button
          </p>
          <button onClick={registor} className="login__signUp">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
