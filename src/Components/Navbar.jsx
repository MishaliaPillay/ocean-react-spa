// Navbar.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
//Reference for the Navbar: hitensharma. (n.d.). Responsive Animated Navbar [CodePen]. CodePen. https://codepen.io/hitensharma/pen/dybryGE
const Navbar = ({ pages }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //After the user navigates to a page , the is open state is false
  const navigateTo = (page) => {
    navigate(`/${page}`);
    setIsOpen(false); // Close the navbar after navigating
  };

  return (
    <nav>
      <div className="logo">
        <img src="whale.png" alt="whale" />
      </div>
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={toggleNavbar}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {pages.map((page, index) => (
          <li key={index} className={isOpen ? "fade" : ""}>
            <button onClick={() => navigateTo(page.route)}>{page.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
