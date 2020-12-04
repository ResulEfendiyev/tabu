import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from '../images/logo-png-2.png'
import './Navbar.css'
function Navbar() {
  const [button, setButton] = useState(false);
  const [click, setClick] = useState(false);

  const showButton = () => {
    if (window.innerWidth < 968) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (

    <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {" "}
              <img src={logo} alt="" className="navbar-logo"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Ana səhifə
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/privacy" className="nav-links" onClick={closeMobileMenu}>
                  Məxfilik siyasəti
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
  );
}

export default Navbar;
