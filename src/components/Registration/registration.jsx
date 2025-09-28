import React, { useState } from "react";
import styles from "./register.module.scss";
import Navbar from "./Navbar";
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";

function Registration({ lightMode, darkMode, theme, toogleTheme }) {
  const [currentCategory, setCurrentCategory] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    location: "",
    levelOfStudy: "",
    selectedCollege: "",
    aiesecer: "",
    currentRole: "",
    username: "",
    password: "",
    confirmPassword: "",
    userDob: "",
    photoUpload: null,
    agreement: false,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [register, setRegister] = useState(true);

  const validateCategory = (categoryIndex) => {
    let errors = {};
    let isValid = true;

    if (categoryIndex === 0) {
      if (!formData.firstName) {
        errors.firstName = "First name is required.";
        isValid = false;
      }
      if (!formData.lastName) {
        errors.lastName = "Last name is required.";
        isValid = false;
      }
      if (!formData.email) {
        errors.email = "Email is required.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid email format.";
        isValid = false;
      }
      if (!formData.phoneNumber) {
        errors.phoneNumber = "Phone number is required.";
        isValid = false;
      }
      if (!formData.gender) {
        errors.gender = "Gender is required.";
        isValid = false;
      }

      if (!formData.userDob) {
        errors.userDob = "Birth date is required.";
        isValid = false;
      }
    } else if (categoryIndex === 1) {
      if (!formData.levelOfStudy) {
        errors.levelOfStudy = "Level of study is required.";
        isValid = false;
      }
      if (!formData.selectedCollege) {
        errors.selectedCollege = "Your university/college is required.";
        isValid = false;
      }
      if (!formData.aiesecer) {
        errors.aiesecer = "Please select an option.";
        isValid = false;
      }
      if (!formData.currentRole) {
        errors.currentRole = "Current role is required.";
        isValid = false;
      }
      if (!formData.location) {
        errors.location = "Location is required.";
        isValid = false;
      }
    } else if (categoryIndex === 2) {
      if (!formData.username) {
        errors.username = "Username is required.";
        isValid = false;
      }
      if (!formData.password) {
        errors.password = "Password is required.";
        isValid = false;
      } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
        isValid = false;
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
        isValid = false;
      }
      if (!formData.agreement) {
        errors.agreement = "You must agree to the terms.";
        isValid = false;
      }
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleNext = () => {
    if (validateCategory(currentCategory)) {
      setCurrentCategory((prev) => Math.min(prev + 1, 2));
    }
  };

  const handlePrev = () => {
    setValidationErrors({}); // Clear errors when going back
    setCurrentCategory((prev) => Math.max(prev - 1, 0));
  };

  const handleChange = (e) => {
    const { id, name, value, type, checked, files } = e.target;
    const key = name || id;
    setFormData((prev) => ({
      ...prev,
      [key]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCategory(currentCategory)) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        location: "",
        levelOfStudy: "",
        selectedCollege: "",
        aiesecer: "",
        currentRole: "",
        username: "",
        password: "",
        confirmPassword: "",
        photoUpload: null,
        agreement: false,
      });
      setValidationErrors({});
      setCurrentCategory(0);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const headerTransform = (register) => {
    if (register === true) {
      return "translateY(10%)";
    } else {
      return "translateY(20%)";
    }
  };
  const headerOpacity = (register) => {
    return register === true ? 1 : 0;
  };
  const headerPointerEvent = (register) => {
    return register === true ? "auto" : "none";
  };
  const getTransform = (categoryIndex) => {
    if (categoryIndex === currentCategory) {
      return "translateX(0)";
    } else if (categoryIndex < currentCategory) {
      return "translateX(-100%)";
    } else {
      return "translateX(100%)";
    }
  };

  const getOpacity = (categoryIndex) => {
    return categoryIndex === currentCategory ? 1 : 0;
  };

  const getPointerEvents = (categoryIndex) => {
    return categoryIndex === currentCategory ? "auto" : "none";
  };

  return (
    <>
      <div className={styles.component}>
        <Navbar
          lightMode={lightMode}
          darkMode={darkMode}
          theme={theme}
          toogleTheme={toogleTheme}
        />
        <div className={styles.display}>
          <div
            className={styles.top}
            style={{
              transform: headerTransform(register),
              opacity: headerOpacity(register),
              pointerEvents: headerPointerEvent(register),
              zIndex: register === register ? 10 : 1,
            }}
          >
            <h1>HEY AIESEC!</h1>
            <p>
              Welcome to our sign up page, Let's get to know each other by you
              filling up few Questions and create your official account. If you
              already have an account{" "}
              <a href="/login" className={styles.login}>
                Click here
              </a>
              , to go to the Login page.
            </p>
            <button
              className={styles.preview}
              onClick={() => {
                setRegister((prev) => !prev);
              }}
            >
              Let's get Started
            </button>{" "}
          </div>
          <form
            onSubmit={handleSubmit}
            className={styles.Registrationform}
            style={{
              transform: headerTransform(!register),
              opacity: headerOpacity(!register),
              pointerEvents: headerPointerEvent(!register),
            }}
          >
            <div
              className={styles.category1}
              style={{
                transform: getTransform(0),
                opacity: getOpacity(0),
                pointerEvents: getPointerEvents(0),
                zIndex: currentCategory === 0 ? 10 : 1,
              }}
            >
              <Category1
                formData={formData}
                handleChange={handleChange}
                validationErrors={validationErrors}
                handleNext={handleNext}
              />
            </div>

            <div
              className={styles.category2}
              style={{
                transform: getTransform(1),
                opacity: getOpacity(1),
                pointerEvents: getPointerEvents(1),
                zIndex: currentCategory === 1 ? 10 : 1,
              }}
            >
              <Category2
                formData={formData}
                handleChange={handleChange}
                validationErrors={validationErrors}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            </div>

            <div
              className={styles.category3}
              style={{
                transform: getTransform(2),
                opacity: getOpacity(2),
                pointerEvents: getPointerEvents(2),
                zIndex: currentCategory === 2 ? 10 : 1,
              }}
            >
              <Category3
                formData={formData}
                handleChange={handleChange}
                validationErrors={validationErrors}
                handlePrev={handlePrev}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Registration;
