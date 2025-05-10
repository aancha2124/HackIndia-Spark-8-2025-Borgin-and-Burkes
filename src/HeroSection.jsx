import React from "react";
import { FaHeart, FaUtensils } from "react-icons/fa";
import "./HeroSection.css";
import cover from "./mainCover1.png";

const HeroSection = ({ goToRecipes, aboutRef }) => {
  return (
    <section>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text" data-aos="fade-right">
            <h1>
              Healthy Recipes,<br />
              <span className="highlight">Mom-Approved</span>
            </h1>
            <p>
              HackSnacks is your cozy kitchen companion. Just type your cravings or snap a fridge pic—
              we'll serve up nutritious meals your mom would love.
            </p>
            <button className="cta-button" onClick={goToRecipes}>
              <FaUtensils /> Get a Recipe <FaHeart />
            </button>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src={cover} alt="Healthy food" />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section" ref={aboutRef} data-aos="fade-up">
        <h2>What is HackSnacks?</h2>
        <p>
          HackSnacks is your smart kitchen companion. We help you discover healthy, home-style recipes
          using ingredients you already have.
        </p>
        <p>
          Whether you're a student, a working professional, or someone trying to eat better, HackSnacks
          makes healthy cooking easy and fun.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="features-section" data-aos="zoom-in-up">
        <h2>Why Choose HackSnacks?</h2>
        <ul className="features-list">
          <li data-aos="fade-up">🔍 Search recipes by ingredients</li>
          <li data-aos="fade-up" data-aos-delay="100">📷 Upload fridge photos for suggestions</li>
          <li data-aos="fade-up" data-aos-delay="200">🍲 Save and organize your favorites</li>
          <li data-aos="fade-up" data-aos-delay="300">🧠 Smart suggestions based on preferences</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-it-works" data-aos="fade-up">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step" data-aos="fade-right">
            <h3>1. Snap or Type</h3>
            <p>Enter ingredients or upload a fridge photo.</p>
          </div>
          <div className="step" data-aos="fade-up">
            <h3>2. Get Recipes</h3>
            <p>Receive a list of healthy recipe ideas instantly.</p>
          </div>
          <div className="step" data-aos="fade-left">
            <h3>3. Cook & Enjoy</h3>
            <p>Follow easy steps and enjoy your home-cooked meal.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer" data-aos="fade-in">
        <p>Made with ❤️ by HackSnacks Team</p>
        <p>Contact: support@hacksnacks.com</p>
      </footer>
    </section>
  );
};

export default HeroSection;
