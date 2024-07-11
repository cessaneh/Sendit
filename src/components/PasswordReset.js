import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./passwordreset.css";

const PasswordReset = () => {
  const history = useHistory();
  const [token, setToken] = useState(""); // New state for token
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://sendit-backend-qhth.onrender.com/resetpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: newPassword,
            token: token, // Include the token in the request body
          }),
        }
      );

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        setSuccess(data.message || "Password reset successfully");
        setTimeout(() => {
          history.push("/signup"); // Redirect to login page after success
        }, 2000);
      } else {
        setError(data.error || "Failed to reset password");
      }
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred while processing your request");
      console.error(error);
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Password Reset</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="token">Token</label>
          <input
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;
