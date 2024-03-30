import "./RegisterPage.css";
import React, { useState } from "react";

export const RegisterPage = () => {
  const [values, setValues] = useState({
    username: "",
    number: "",
    email: "",
    password: "",
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
    if (values.username && values.number && values.email && values.password) {
      console.log(values);
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
                Welcome {values.username} {values.name} {values.email}
                {values.password}{" "}
              </h3>
              <div> Your registration was successful! </div>
            </div>
          )}
          {!valid && (
            <input
              className="form-field form-input"
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.username && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          {!valid && (
            <input
              className="form-field form-input"
              type="text"
              placeholder="Number"
              name="number"
              value={values.number}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.number && (
            <span id="last-name-error">Please enter a valid number</span>
          )}

          {!valid && (
            <input
              className="form-field form-input"
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
            <input
              className="form-field form-input"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.password && (
            <span id="email-error">Please enter Password</span>
          )}
          {!valid && (
            <button className="form-field form-button" type="submit">
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
