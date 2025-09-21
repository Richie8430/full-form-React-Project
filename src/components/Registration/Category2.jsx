import React from "react";
import styles from "./register.module.scss";

const Category2 = ({
  formData,
  handleChange,
  validationErrors,
  handleNext,
  handlePrev,
}) => {
  const renderError = (field) => {
    return validationErrors[field] ? (
      <span className={styles.error}>{validationErrors[field]}</span>
    ) : null;
  };

  return (
    <>
      <h2>Category 2:Educational & AIESEC Status </h2>
      <div className={styles.Namecategory2}>
        <div className={styles.university}>
          <label htmlFor="university">University or college</label>
          <select
            name="selectedCollege"
            value={formData.selectedCollege}
            onChange={handleChange}
          >
            <option value="">--select your University--</option>
            <option value="UDOM">UDOM</option>
            <option value="ST JOHNS">ST JOHNS</option>
            <option value="VETA">VETA</option>
            <option value="CBE">CBE</option>
          </select>
          {renderError("selectedCollege")}
        </div>
        <div className={styles.LoStudy}>
          <label htmlFor="levelOfStudy">Level of Study</label>
          <select
            id="levelOfStudy"
            name="levelOfStudy"
            value={formData.levelOfStudy}
            onChange={handleChange}
          >
            <option value="">select your Level</option>
            <option value="A-level">A-level</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor Degree</option>
            <option value="Masters">Masters</option>
          </select>
          {renderError("levelOfStudy")}
        </div>
        <div className={styles.location}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
          />
          {renderError("location")}
        </div>

        <label htmlFor="aiesecer">Are you an AIESECer</label>
        <div className={styles.areyu}>
          <input
            type="radio"
            name="aiesecer"
            id="aiesecerYes"
            value="yes"
            checked={formData.aiesecer === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="aiesecerYes">YES</label>
          <input
            type="radio"
            name="aiesecer"
            id="aiesecerNo"
            value="no"
            checked={formData.aiesecer === "no"}
            onChange={handleChange}
          />{" "}
          <label htmlFor="aiesecerNo">NO</label>
          {renderError("aiesecer")}
        </div>
        <div className={styles.role}>
          <label htmlFor="currentRole">State your current role:</label>
          <input
            type="text"
            id="currentRole"
            value={formData.currentRole}
            onChange={handleChange}
          />
          {renderError("currentRole")}
        </div>

        <div className={styles.buttonz}>
          <button type="button" className={styles.prev} onClick={handlePrev}>
            Go back
          </button>
          <button type="button" className={styles.next} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Category2;
