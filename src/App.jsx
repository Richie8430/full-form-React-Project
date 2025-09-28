import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Registration from "./components/Registration/registration";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Registration theme={theme} toogleTheme={toogleTheme} />}
        />
        <Route
          path="/registration"
          element={<Registration theme={theme} toogleTheme={toogleTheme} />}
        />
        <Route path="/login" element={<Login theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
