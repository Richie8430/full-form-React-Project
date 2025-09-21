import React from "react";
import styles from "./register.module.scss";

const Category1 = ({
  formData,
  handleChange,
  validationErrors,
  handleNext,
}) => {
  const renderError = (field) => {
    return validationErrors[field] ? (
      <span className={styles.error}>{validationErrors[field]}</span>
    ) : null;
  };
  return (
    <>
      <h2>Category 1: Personal Information</h2>
      <div className={styles.Namecategory}>
        <div className={styles.fname}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {renderError("firstName")}
        </div>
        <div className={styles.lname}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {renderError("lastName")}
        </div>
      </div>
      <div className={styles.email}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {renderError("email")}
      </div>
      <div className={styles.pnumber}>
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="number"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {renderError("phoneNumber")}
      </div>

      <label htmlFor="gender">Gender :</label>
      <div className={styles.gender}>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        {renderError("gender")}
      </div>

      <div className={styles.dob}>
        <label htmlFor="date of birth">Date of Birth</label>
        <input
          type="date"
          id="userDob"
          value={formData.userDob}
          onChange={handleChange}
        />
        {renderError("userDob")}
      </div>

      <button type="button" className={styles.next} onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Category1;
