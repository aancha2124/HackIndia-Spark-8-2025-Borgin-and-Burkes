import React from "react";
import { motion } from "framer-motion";
import "./RecipeSection.css";
import poha from "./poha.jpeg";
import bhindi from "./bhindi-masala.webp";
import idli from "./idli.jpeg";
import paneer from "./saag-paneer.webp";
import chana from "./chana-masala.webp";
import arhar from "./arhar-dal.webp";

const RecipeSection = ({ query, geminiResponse }) => {
  const healthyRecipes = [
    { title: "Poha", description: "A protein-packed twist with boiled eggs and seeds.", image: poha },
    { title: "Bhindi Masala", description: "Colorful, crunchy, and crazy healthy.", image: bhindi },
    { title: "Idli", description: "Layers of yogurt, oats, and antioxidant-rich berries.", image: idli },
    { title: "Saag Paneer", description: "Low-carb, high-flavor, mom-approved dinner.", image: paneer },
  ];

  const indianRecipes = [
    { title: "Chana Masala", description: "A protein-packed twist with boiled eggs and seeds.", image: chana },
    { title: "Arhar Dal", description: "Colorful, crunchy, and crazy healthy.", image: arhar },
    { title: "Idli", description: "Layers of yogurt, oats, and antioxidant-rich berries.", image: idli },
    { title: "Saag Paneer", description: "Low-carb, high-flavor, mom-approved dinner.", image: paneer },
  ];

  const showGemini = query.trim() && geminiResponse;

  const renderGeminiResponse = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const elements = [];
    let bulletItems = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      const formattedText = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

      if (formattedText.startsWith("-") || formattedText.startsWith("•")) {
        bulletItems.push(formattedText.replace(/^[-•]\s*/, ""));
      } else {
        if (bulletItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`}>
              {bulletItems.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
          bulletItems = [];
        }

        if (formattedText.toLowerCase().startsWith("tip:")) {
          elements.push(
            <div className="tip" key={`tip-${index}`} dangerouslySetInnerHTML={{ __html: formattedText }} />
          );
        } else {
          elements.push(<p key={index} dangerouslySetInnerHTML={{ __html: formattedText }} />);
        }
      }
    });

    if (bulletItems.length > 0) {
      elements.push(
        <ul key="last-list">
          {bulletItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <motion.section
      className="recipe-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {showGemini ? (
        <>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Suggested Recipes
          </motion.h2>
          <motion.div
            className="recipe-card gemini-response"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {renderGeminiResponse(geminiResponse)}
          </motion.div>
        </>
      ) : (
        <>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Featured Healthy Recipes
          </motion.h2>
          <motion.div
            className="recipe-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {healthyRecipes.map((recipe, index) => (
              <motion.div
                className="recipe-card"
                key={index}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-card-content">
                  <div className="recipe-card-title">{recipe.title}</div>
                  <div className="recipe-card-description">{recipe.description}</div>
                  <button>Save Recipe</button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Featured Indian Meals
          </motion.h2>
          <motion.div
            className="recipe-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {indianRecipes.map((recipe, index) => (
              <motion.div
                className="recipe-card"
                key={index}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-card-content">
                  <div className="recipe-card-title">{recipe.title}</div>
                  <div className="recipe-card-description">{recipe.description}</div>
                  <button>Save Recipe</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

export default RecipeSection;
