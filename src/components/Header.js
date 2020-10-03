import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ cart }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        {/* <h1 className="header__logo">atrons</h1> */}
        <img
          className="header__logo"
          src="http://www.pngmart.com/files/7/Web-Design-Transparent-Background.png"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* search box */}
      {/* links */}
      {/* cart */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Hello</span>
            <span className="header__optionTwo">Login</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <span>
              <ShoppingCartIcon />
            </span>
            <span className="header__optionTwo header__cartCount">
              {" "}
              {cart?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
