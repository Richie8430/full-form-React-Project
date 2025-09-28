import React, { useState } from "react";
import aieseclogo from "../../assets/Aiesecblue.png";
import blackAieseclogo from "../../assets/Aiesecwhite.png";
import user from "../../assets/user.svg";
import lock from "../../assets/lock.svg";
import eye from "../../assets/visibility.svg";
import noEye from "../../assets/visibility_off.svg";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";

function Login({ theme }) {
  const [userInput, setUserInput] = useState({
    username: "",
    userPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const [showPassword, setShowpassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  function toggleVisibility() {
    setShowpassword((prev) => !prev);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setloading(false);

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setUserInput({ username: "", userPassword: "" });
      } else {
        setMessage(result.error || "Something ain't ryt.");
      }
    } catch (error) {
      setMessage("Network Error: " + error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.aisec}
          src={theme === "light" ? aieseclogo : blackAieseclogo}
          alt="AIESEC Logo"
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.welcome}>Welcome back!</p>

          <div className={styles.username}>
            <label>Username:</label>
            <div className={styles.other}>
              <button disabled className={styles.eyy}>
                <img className={styles.eye} src={user} alt="user" />
              </button>
              <input
                type="text"
                name="username"
                placeholder="Enter username/email"
                value={userInput.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.password}>
            <label>Password:</label>
            <div className={styles.other}>
              <button disabled className={styles.eyy}>
                <img className={styles.eye} src={lock} alt="key" />
              </button>
              <input
                type={showPassword ? "text" : "password"}
                name="userPassword"
                placeholder="Enter password"
                value={userInput.userPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className={styles.eyy00}
                onClick={toggleVisibility}
              >
                <img
                  className={styles.eye}
                  src={showPassword ? eye : noEye}
                  alt="eye"
                />
              </button>
            </div>
          </div>

          <div className={styles.checks}>
            <div className={styles.input}>
              <input
                style={{ cursor: "pointer" }}
                name="check"
                type="checkbox"
                defaultChecked
              />

              <label htmlFor="check">Keep me signed in</label>
            </div>
            <div className={styles.ahref}>
              <a href="/">Forget password?</a>
            </div>
          </div>

          {message && <p className={styles.error}>* {message}</p>}

          <button
            type="submit"
            disabled={loading}
            className={styles.loginButton}
          >
            {loading ? "submiting..." : "LOGIN"}
          </button>

          <p className={styles.footer}>
            Don't have an Account?{" "}
            <span>
              <Link to="/registration" className={styles.sapn}>
                Create an account here
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
