import React, { useState } from "react";
import aiesec from "./aieseclogo.png";
import user from "./user.svg";
import lock from "./lock.svg";
import eye from "./visibility.svg";
import noEye from "./visibility_off.svg";
import "./login.css";
import registration from "../../components/Registration/registration";
function Login() {
  const [userInput, setUserInput] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleInput(e) {
    setUserInput(e.target.value);
  }
  function handlePassword(e) {
    setUserPassword(e.target.value);
  }
  function toggleVisibility() {
    setShowPassword((prev) => !prev);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "" || userPassword.trim() === "") {
      setError("Please fill username and Password");
      return;
    }
    setError("");
    setUserInput("");
    setUserPassword("");
  };
  return (
    <div className="body">
      <div className="container">
        <img className="aisec" src={aiesec} alt="AIESEC Logo" />
        <form onSubmit={handleSubmit}>
          <p className="welcome">Welcome back!</p>
          <div className="username">
            <label>Username:</label>
            <div className="other">
              <button disabled className="eyy">
                <img className="eye" src={user} alt="user" />
              </button>
              <input
                type="text"
                placeholder="Enter username/email"
                value={userInput}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="password">
            <label>Password:</label>
            <div className="other">
              <button disabled className="eyy">
                <img className="eye" src={lock} alt="key" />
              </button>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={userPassword}
                onChange={(e) => handlePassword(e)}
              />
              <button
                type="button"
                className="eyy00"
                onClick={toggleVisibility}
              >
                <img
                  className="eye"
                  src={showPassword ? eye : noEye}
                  alt="eye"
                />
              </button>
            </div>
          </div>
          <div className="checks">
            <div className="input">
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                defaultChecked
              />
              <label>Keep me signed in</label>
            </div>
            <div className="ahref">
              <a href="/">Forget password?</a>
            </div>
          </div>
          {error && <p className="error">* {error}</p>}
          <button type="submit" className="loginButton">
            LOGIN
          </button>
          <p className="footer">
            Don't have an Account?{" "}
            <span>
              <a className="sapn" href={eye}>
                Create an account here
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
