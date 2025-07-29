import React, { useState, useEffect } from "react";
import "./dark.css"; // Assuming you have some basic CSS in App.css

function DarklightMode() {
  // 1. State to manage the theme (true for dark, false for light)
  // We initialize it with a function that reads from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      // Return true if 'dark' is saved, otherwise false
      return savedTheme === "dark";
    } catch (error) {
      console.error("Failed to read theme from localStorage:", error);
      // Fallback to false (light mode) if localStorage is not accessible
      return false;
    }
  });

  // 2. useEffect hook to apply the theme to the <body> element
  // and to update localStorage whenever `isDarkMode` changes.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]); // Dependency array: this effect runs whenever `isDarkMode` changes

  // 3. Event handler for the button click
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the state
  };

  return (
    <div className="App">
      <h1>Welcome to my React App!</h1>
      <button onClick={toggleTheme}>
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <p>This is some content that will change with the theme.</p>
      <p>Current theme: {isDarkMode ? "Dark" : "Light"}</p>
    </div>
  );
}

export default DarklightMode;
