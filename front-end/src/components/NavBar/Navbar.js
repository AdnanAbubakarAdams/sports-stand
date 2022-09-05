import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button/Button";
import SoccerDropdown from "../Soccer/SoccerDropdown";
import StoresDropdown from "../Stores/StoresDropdown";
import BasketBallDropdown from "../BasketBall/BasketBallDropdown";

const Navbar = ({ cartNum }) => {
  // click for the dropdown
  const [click, setClick] = useState(false);
  // states for each drop-down
  const [soccerdropdown, setSoccerDropdown] = useState(false);
  const [storesdropdown, setStoresDropdown] = useState(false);
  const [basketballdropdown, setBasketballDropdown] = useState(false);

  // functions // methods
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // DROPDOWN MOUSE FUNCTIONS
  // SOCCER
  const hadndleSoc = () => {
    if (window.innerWidth < 960) {
      setSoccerDropdown(false);
    } else {
      setSoccerDropdown(true);
    }
  };

  const handleSocc = () => {
    if (window.innerWidth < 960) {
      setSoccerDropdown(false);
    } else {
      setSoccerDropdown(false);
    }
  };

  // BASKETBALL
  const hadndleBas = () => {
    if (window.innerWidth < 960) {
      setBasketballDropdown(false);
    } else {
      setBasketballDropdown(true);
    }
  };

  const handleBask = () => {
    if (window.innerWidth < 960) {
      setBasketballDropdown(false);
    } else {
      setBasketballDropdown(false);
    }
  };

  // STORES
  const hadndleSto = () => {
    if (window.innerWidth < 960) {
      setStoresDropdown(false);
    } else {
      setStoresDropdown(true);
    }
  };

  const handleStor = () => {
    if (window.innerWidth < 960) {
      setStoresDropdown(false);
    } else {
      setStoresDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-badge" onClick={closeMobileMenu}>
          ADDYSPORTS 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/players" className="nav-links" onClick={closeMobileMenu}>
              IDOLS
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={hadndleSoc}
            onMouseLeave={handleSocc}
          >
            <Link to="/soccer" className="nav-links" onClick={closeMobileMenu}>
              SOCCER
            </Link>
            {soccerdropdown && <SoccerDropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={hadndleBas}
            onMouseLeave={handleBask}
          >
            <Link
              to="/basketball"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              BASKETBALL
            </Link>
            {basketballdropdown && <BasketBallDropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={hadndleSto}
            onMouseLeave={handleStor}
          >
            <Link to="/stores" className="nav-links" onClick={closeMobileMenu}>
              STORES
            </Link>
            {storesdropdown && <StoresDropdown />}
          </li>
          <Link to="/cart">
          <li className="cart-icon">
            <span>
            <i className="fas fa-cart-arrow-down"></i>
            </span>
            <span>{cartNum}</span>
          </li>
          </Link>
        </ul>

        <Button />
      </nav>
    </>
  );
};

export default Navbar;
