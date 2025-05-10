
import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import "./HeaderSection.css";

const HeaderSection = ({ setActiveSection, scrollToAbout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="header-wrapper">
      <header className="hacksnacks-header">
        <div className="logo">
          <FaUtensils className="logo-icon" />
          <span className="logo-text">HackSnacks</span>
        </div>
        <div className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => setActiveSection("home")}><a href="#">Home</a></li>
            <li onClick={() => setActiveSection("recipes")}><a href="#">Recipes</a></li>
            <li onClick={scrollToAbout}><a href="#">About</a></li>
            <li onClick={() => setActiveSection("signin")}><a href="#">Sign In</a></li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;

