import React, { useState } from "react";
import "./SignUp.css"; // Your CSS file for styling
import supabase from "./supabaseClient"; // Import Supabase client

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Insert data into Supabase
    try {
      const { data, error } = await supabase
        .from("users") // Ensure this matches the table name you created
        .insert([
          {
            username: username,
            email: email,
            password: password, // Ideally, you should hash the password before storing it
          },
        ]);

      if (error) {
        throw error;
      }

      setMessage("User signed up successfully!");

      // Clear the form fields after successful submission
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="signup-body">
      <div className="signup-container" id="signup-container">
        <h1>Sign Up</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
        <p id="message">{message}</p> {/* Display success/error message */}
      </div>
    </div>
  );
};

export default SignUp;
