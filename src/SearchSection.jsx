import React from "react";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import "./SearchSection.css";

const SearchSection = ({ query, setQuery, setGeminiResponse }) => {
  const handleSearch = async () => {
    if (!query.trim()) {
      setGeminiResponse("");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      setGeminiResponse(data.answer || "No response from Gemini.");
    } catch (error) {
      console.error("Gemini API error:", error);
      setGeminiResponse("Error connecting to Gemini.");
    }
  };

  return (
    <motion.section
      className="search-section"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="section-container"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2
          className="search-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Find Your Next Favorite Snack
        </motion.h2>

        <motion.div
          className="search-bar-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Type ingredients or search recipes..."
            aria-label="Search recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="search-icons">
            <button className="icon-button" aria-label="Search" onClick={handleSearch}>
              <FaSearch />
            </button>
            <button className="icon-button" aria-label="Voice Search">
              <FaMicrophone />
            </button>
            <button className="icon-button" aria-label="Camera Input">
              <FaCamera />
            </button>
          </div>
        </motion.div>

        <motion.p
          className="favorites-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Use voice, camera, or text to discover delicious recipes!
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default SearchSection;
