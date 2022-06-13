import React from "react";
import { useState } from "react";

const LogInForm = ({ login, err }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login({ username, password });
      console.log("submitted");
    }
  };

  const handleOnSetUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleOnSetPassword = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <li href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </li>
            <li href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </li>
            <li href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </li>
          </div>
          <span>or use your account</span>
          {err && (
            <div className="error-message" data-testid="error-msg">
              {err}
            </div>
          )}
          <label>
            Enter your username
            <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={handleOnSetUsername}
              role="textbox"
            />
          </label>
          {/* {err && (
            <div className="error-message" data-testid="error-msg">
              {err}
            </div>
          )} */}
          <label>
            Enter your password
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              data-testid="password-input"
              value={password}
              onChange={handleOnSetPassword}
              role="textbox"
            />
          </label>
          <span>Forgot your password?</span>
          <button
            id="submit"
            data-testid="submit-button"
            type="submit"
            className="submit-button"
          >
            Sign In
          </button>
        </form>
        <div className="overlay-panel overlay-right">
          <h1>Hi, There!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
            facilis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
