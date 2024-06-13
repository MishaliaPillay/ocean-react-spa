import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import turtle from "./turtlelogo.jpg";
import { CaretCircleDown } from "@phosphor-icons/react";
import ThemeSet from "../../Context/ThemeSet";
const Navbar = ({ pages }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (page) => {
    if (page.route === "") {
      navigate("/");
    } else {
      navigate(`/${page.route}`);
    }
    setIsOpen(false); // Close the navbar after navigating
  };

  return (
    <nav>
      <section className="logoo">
        <img src={turtle} alt="turtle" />
      </section>
      <section
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={toggleNavbar}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </section>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {pages.map((page, index) => (
          <li key={index} className={isOpen ? "fade" : ""}>
            <button
              onClick={() => navigateTo(page)}
              className={
                location.pathname === `/${page.route}` ||
                (page.route === "" && location.pathname === "/")
                  ? "active"
                  : ""
              }
            >
              {page.name}
            </button>
          </li>
        ))}
        <li className="dropdown">
          <button>
            Exploration <CaretCircleDown size={20} />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() =>
                  navigateTo({ name: "Sea Turtles", route: "seaturtle" })
                }
              >
                Sea Turtles
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo({ name: "Sharks", route: "sharks" })}
              >
                Sharks
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  navigateTo({ name: "Dolphins", route: "dolphins" })
                }
              >
                Dolphins
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo({ name: "Tips", route: "tips" })}
              >
                Tips
              </button>
            </li>{" "}
            <li>
              <button
                onClick={() => navigateTo({ name: "Whales", route: "whales" })}
              >
                Whales
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo({ name: "Fish", route: "fish" })}
              >
                Fish
              </button>
            </li>
          </ul>
        </li>
        <ThemeSet />
      </ul>
    </nav>
  );
};

export default Navbar;
