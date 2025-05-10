




import React, { useState, useRef, useEffect } from "react";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import RecipeSection from "./RecipeSection";
import SignInModal from "./SignInModal";
import "./App.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const aboutRef = useRef(null);

  const [query, setQuery] = useState("");
const [geminiResponse, setGeminiResponse] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToAbout = () => {
    const offset = 80;
    if (aboutRef.current) {
      const topPos = aboutRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPos - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <HeaderSection
        setActiveSection={setActiveSection}
        scrollToAbout={scrollToAbout}
      />

      {activeSection === "home" && (
        <HeroSection
          goToRecipes={() => setActiveSection("recipes")}
          aboutRef={aboutRef}
        />
      )}

      {activeSection === "recipes" && (
        <>
          <SearchSection
           query={query}
           setQuery={setQuery}
           setGeminiResponse={setGeminiResponse} />
          <RecipeSection
          query={query}
          geminiResponse={geminiResponse}
         />
        </>
      )}

      {activeSection === "signin" && (
        <SignInModal onClose={() => setActiveSection("home")} />
      )}
    </div>
  );
};

export default App;
