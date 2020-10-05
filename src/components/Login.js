import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
function Login() {
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
            <input type="text" />
            <h4>Password</h4>
            <input type="text" />
            <button className="login__signIn">Login</button>
          </div>

          <p>
            If it is your first time Please Register by pressing the signup
            button
          </p>
          <button className="login__signUp">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
