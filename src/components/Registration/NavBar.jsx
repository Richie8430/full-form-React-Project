import React, { useState } from "react";
import { Link } from "react-router-dom";
import aieseclogo from "../../assets/aieseclogo.png";
import profile from "./richie.JPG";
import styles from "./register.module.scss";

function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <img className={styles.aieseclogo} src={aieseclogo} alt="AIESEC Logo" />
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
