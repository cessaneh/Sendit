import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./resetpassword.css";

const ResetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmReset = window.confirm(
      "Are you sure you want to reset your password?"
    );
    if (!confirmReset) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://sendit-backend-qhth.onrender.com/forgot_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        setSuccess(
          data.message || "A password reset link has been sent to your email."
        );
        setError("");
        // Redirect to password reset page after successful request
        setTimeout(() => {
          history.push("/password-reset");
        }, 2000);
      } else {
        setError(data.error || "Failed to initiate password reset");
        setSuccess("");
      }
    } catch (err) {
      setIsLoading(false);
      setError("An error occurred while processing your request");
      console.error(err);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default ResetPassword;
