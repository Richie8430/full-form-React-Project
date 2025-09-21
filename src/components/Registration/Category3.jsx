import { useState } from "react";
import eye from "../../assets/visibility.svg";
import noEye from "../../assets/visibility_off.svg";
import styles from "./register.module.scss";

const Category3 = ({
  formData,
  handleChange,
  validationErrors,
  handlePrev,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const renderError = (field) => {
    return validationErrors[field] ? (
      <span className={styles.error}>{validationErrors[field]}</span>
    ) : null;
  };

  function toggleVisibility() {
    setShowPassword((prev) => !prev);
  }
  return (
    <>
      <h2>Category 3:Account Setup</h2>
      <div className={styles.Namecategory3}>
        <div className={styles.username}>
          <label htmlFor="username">Create your username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
          {renderError("username")}
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Your password</label>
          <div className={styles.pass}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <img
              className={styles.eye}
              onClick={toggleVisibility}
              src={showPassword ? eye : noEye}
              alt="eye"
            />
          </div>
          {renderError("password")}
        </div>

        <div className={styles.Cpassword}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {renderError("confirmPassword")}
        </div>

        <div className={styles.role}>
          <label htmlFor="photoUpload">Upload your cool photo:</label>
          <input
            type="file"
            id="photoUpload"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className={styles.agreement}>
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            id="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          <label htmlFor="agreement">
            I agree to receive emails, calls or messages from AIESEC.
          </label>
          {renderError("agreement")}
        </div>

        <div className={styles.buttonz}>
          <button type="button" className={styles.prev} onClick={handlePrev}>
            Go back
          </button>
          <button className={styles.next} type="submit">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Category3;
