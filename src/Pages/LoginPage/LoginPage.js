import "./LoginPage.css";
import React, { useState } from "react";

export const LoginPage = () => {
  const [values, setValues] = useState({
    firstName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-body">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid && (
            <div className="success-message">
              <h3>
                {" "}
                Welcome {values.firstName} {values.lastName}{" "}
              </h3>
              <div> Your registration was successful! </div>
            </div>
          )}
          {!valid && (
            <input
              class="form-field form-input"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          {!valid && (
            <input
              class="form-field form-input"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.lastName && (
            <span id="last-name-error">Please enter a last name</span>
          )}

          {!valid && (
            <input
              class="form-field form-input"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.email && (
            <span id="email-error">Please enter an email address</span>
          )}
          {!valid && (
            <button class="form-field form-button" type="submit">
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
