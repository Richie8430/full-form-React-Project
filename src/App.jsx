import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Registration from "./components/Registration/registration";

function App() {
  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem("theme") || "light";
  // });

  // useEffect(() => {
  //   document.body.classList.remove("light", "dark");
  //   document.body.classList.add(theme);

  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toogleTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
