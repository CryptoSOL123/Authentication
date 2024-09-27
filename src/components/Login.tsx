import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styles

const Login: React.FC = () => {
  // State to store username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Log the username and password (You can send this data to your backend API here)
    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the form fields (Optional)
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-body">
      <div className="login-container" id="login-container">
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state when typing
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state when typing
              required
            />
          </div>
          <div className="input-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        <p id="message"></p>
      </div>
    </div>
  );
};

export default Login;
