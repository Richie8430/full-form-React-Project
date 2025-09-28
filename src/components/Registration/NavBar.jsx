import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blackAieseclogo from "../../assets/Aiesecwhite.png";
import aieseclogo from "../../assets/Aiesecblue.png";
import lightMode from "../../assets/lightMode.png";
import darkMode from "../../assets/darkMode.png";
import profile from "../../assets/user.svg";
import styles from "./register.module.scss";

function NavBar({ theme, toogleTheme }) {
  return (
    <div>
      <nav className={styles.navbar}>
        <img
          className={styles.aieseclogo}
          src={theme === "light" ? aieseclogo : blackAieseclogo}
          alt="AIESEC Logo"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={toogleTheme}
        >
          {
            <img
              className={styles.mode}
              src={theme === "light" ? lightMode : darkMode}
              alt="Light/dark mode"
            />
          }
        </div>
        <div className={styles.left}>
          <button className={styles.loginbtn}>
            <Link className={styles.login} to="/login">
              LOGIN
            </Link>
          </button>
          <img className={styles.profile} src={profile} alt="profile" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
