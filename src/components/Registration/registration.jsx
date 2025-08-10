import React from "react";
import aieseclogo from "./aieseclogo.png";
import profile from "./richie.JPG";
import "./register.css";
function Registration() {
  return (
    <div className="component">
      <nav className="nav-bar">
        <img className="aieseclogo" src={aieseclogo} alt="AIESEC Logo" />
        <div className="left">
          <p>Hi, Welcome</p>
          <img className="profile" src={profile} alt="profile" />
        </div>
      </nav>
      <form action="">
        <div className="category1">
          <h2>Category 1:</h2>
          <div className="Namecategory">
            <div className="fname">
              <label htmlFor="">First name</label>
              <input type="text" />
            </div>
            <div className="fname">
              <label htmlFor="">Last name</label>
              <input type="text" />
            </div>
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="gender">
            <input type="radio" name="gender" />
            Male
            <input type="radio" name="gender" />
            Female
          </div>
          <div className="location">
            <label>Location</label>
            <input type="text" />
          </div>
          <button className="next">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
