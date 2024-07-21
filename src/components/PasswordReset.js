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
      "http://localhost:5000/resetpassword", // Update to your local server URL and port
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
