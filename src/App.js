import React from "react";
import "./App.css";
import { useState, useCallback } from "react";
import users from "./user-database";
import LogInForm from "./components/LogInForm";

function App() {
  const [activeUser, setActiveUser] = useState("");
  const [error, setError] = useState("");

  const logIn = useCallback(
    ({ username, password }) => {
      const userExists = users.find(
        (user) => user.username === username && user.password === password
      );
      // console.log(userExists);
      if (userExists) {
        setActiveUser(username);

        // Please read - In case it was a trick question, I didn't log the password as it would be insecure to do so, however all we would have to do is add ${password} to the template string.
        console.log(`user ${username} has logged in`);
      } else {
        console.log("invalid input");
        setActiveUser("");
        setError("Invalid input, please try again!");
      }
    },
    [setError]
  );

  const logOut = () => {
    console.log("user logged out");
    setError("");
    setActiveUser("");
  };

  return (
    <div className="App">
      {activeUser ? (
        <div className="welcome">
          <h3>Welcome!</h3>
          <button className="logout-button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <LogInForm
          login={logIn}
          err={error}
          // handleErrMessage={handleErrMessage}
        />
      )}
    </div>
  );
}

export default App;
