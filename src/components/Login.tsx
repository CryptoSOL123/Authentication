import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styles
import supabase from "./supabaseClient"; // Import your Supabase client

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Query Supabase for a user with the given username
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .single(); // Fetch a single user

      if (error || !data) {
        setMessage("User not found!");
        return;
      }

      // Check if the provided password matches the stored password
      if (data.password === password) {
        setMessage("Login successful!");
      } else {
        setMessage("Incorrect password!");
      }
    } catch (error: any) {
      setMessage(`Login failed: ${error.message}`);
    }

    // Clear the form fields (optional)
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
        <p id="message">{message}</p> {/* Display success/error message */}
      </div>
    </div>
  );
};

export default Login;
