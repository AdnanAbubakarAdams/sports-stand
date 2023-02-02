import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../Services/Firebase";
import { UserContext } from "../../Providers/UserProvider";

import "./Navbar.css";

// components 
import SoccerDropdown from "../Soccer/SoccerDropdown";
import StoresDropdown from "../Stores/StoresDropdown";
import BasketBallDropdown from "../BasketBall/BasketBallDropdown";


const UserNav = ({applicationUser, cartNum, setModalOpen,}) => {
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



    const user = useContext(UserContext);
    const navigate = useNavigate();
    const { displayName, photoURL } = user;
  return (
    
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
            <Link to="/leagues" className="nav-links" onClick={closeMobileMenu}>
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
              to="/nba"
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
          <Link to="/cart" onClick={closeMobileMenu}>
          <li className="cart-icon">
            <span>
            <i className="fas fa-cart-arrow-down"></i>
            </span>
            <span>{cartNum}</span>
          </li>
          </Link>
          {/* <li>
             {applicationUser.verified ? (
                        <i className='fas fa-circle-check'></i>
                    ) : null}
                    {displayName.split(" ").shift()}
            </li> */}
            <span className='bell-span'>
            <li className='bell-envelope'>
            <i className='far fa-envelope' id='envelope'></i>
            <i className='far fa-bell' id='bell'></i>
            </li>
            <li className='profile-photo'>
          <img src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="profile-pic" alt={displayName} onClick={()=> setModalOpen(true)}/>
          </li>
          </span>
          <button onClick={signOut}>signout</button>
          {/* <li className="nav-item" onClick={closeMobileMenu}>
          <button onClick={() => setModalOpen(true)} className="nav-links-mobile" >
            Login
          </button>
        </li> */}
        </ul>
    </nav>
  )
}

export default UserNav;