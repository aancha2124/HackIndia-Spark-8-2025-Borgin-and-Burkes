import React, { useState } from "react";
import "./SignInModal.css";

const SignInModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{isSignUp ? "Create Account 🚀" : "Welcome Back 👋"}</h2>
        <p>{isSignUp ? "Sign up to get started" : "Sign in to save your favorite recipes"}</p>

        <form className="signin-form ">
          {isSignUp && <input type="text" placeholder="Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>

        <p className="signup-prompt">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <a href="#" onClick={toggleMode}>
            {isSignUp ? "Sign in" : "Sign up"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
