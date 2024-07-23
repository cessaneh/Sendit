import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaEyeSlash, FaEye, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";
import zxcvbn from "zxcvbn";
import "./signup.css";

const Loader = () => (
  <div className="loader-container">
    <FaSpinner className="loader-spinner" />
  </div>
);

const SignUp = () => {
  const history = useHistory();

  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthText, setPasswordStrengthText] = useState("");
  const [passwordStrengthColor, setPasswordStrengthColor] = useState("red");

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleShowLoginPassword = () =>
    setShowLoginPassword(!showLoginPassword);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    signUpFormik.handleChange(event);

    const result = zxcvbn(password);
    setPasswordStrength(result.score);

    switch (result.score) {
      case 0:
        setPasswordStrengthText("Too weak");
        setPasswordStrengthColor("red");
        break;
      case 1:
        setPasswordStrengthText("Weak");
        setPasswordStrengthColor("orange");
        break;
      case 2:
        setPasswordStrengthText("Fair");
        setPasswordStrengthColor("yellow");
        break;
      case 3:
        setPasswordStrengthText("Good");
        setPasswordStrengthColor("lightgreen");
        break;
      case 4:
        setPasswordStrengthText("Strong");
        setPasswordStrengthColor("green");
        break;
      default:
        setPasswordStrengthText("");
        setPasswordStrengthColor("red");
    }
  };

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.name,
            email: values.email,
            password: values.password,
            is_admin: false,
          }),
        });
        const data = await response.json();
        setIsLoading(false);

        if (response.ok) {
          alert("Sign up successful");
          history.push("/");
        } else {
          throw new Error(data.message || "Sign up failed");
        }
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred: " + error.message);
      }
      signUpFormik.resetForm();
    },
  });

  const signInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });
        const data = await response.json();
        setIsLoading(false);

        if (response.ok) {
          if (data.token) {
            localStorage.setItem("token", data.token);
            const decodedToken = jwtDecode(data.token);
            if (decodedToken.identity) {
              if (decodedToken.identity.is_admin) {
                history.push("/admin_dashboard");
              } else {
                history.push("/user-dashboard");
              }
            }
          }
        } else {
          throw new Error(data.message || "Login failed");
        }
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred: " + error.message);
      }
    },
  });

  return (
    <div
      className={`container ${isSignUp ? "active" : ""} ${
        isLoading ? "loading" : ""
      }`}
      id="container"
    >
      {isLoading && <Loader />}
      <div className={`form-container sign-up ${isSignUp ? "active" : ""}`}>
        <form onSubmit={signUpFormik.handleSubmit}>
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/black___red_simple_flat_delivery_service_logo-removebg-preview-1500h.png`}
            alt="Logo"
          />
          <h1>Create Account</h1>
          <h5>Use your email for registration</h5>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.name}
          />
          {signUpFormik.errors.name && (
            <div className="error-message">{signUpFormik.errors.name}</div>
          )}
          <input
            type="email"
            placeholder="Email"
            className="email"
            name="email"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.email}
          />
          {signUpFormik.errors.email && (
            <div className="error-message">{signUpFormik.errors.email}</div>
          )}
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password"
              name="password"
              onChange={handlePasswordChange}
              value={signUpFormik.values.password}
            />
            <span className="show-password-btn" onClick={handleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="password-strength-indicator">
            <div
              className={`strength-bar strength-${passwordStrength}`}
              style={{
                width: `${(passwordStrength / 4) * 100}%`,
                backgroundColor: passwordStrengthColor,
              }}
            ></div>
            <span
              className="strength-text"
              style={{ color: passwordStrengthColor }}
            >
              {passwordStrengthText}
            </span>
          </div>
          {signUpFormik.errors.password && (
            <div className="error-message">{signUpFormik.errors.password}</div>
          )}
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={signUpFormik.handleChange}
              value={signUpFormik.values.confirmPassword}
            />
            <span
              className="show-password-btn"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {signUpFormik.errors.confirmPassword && (
            <div className="error-message">
              {signUpFormik.errors.confirmPassword}
            </div>
          )}
          <button className="signup" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className={`form-container sign-in ${isSignUp ? "" : "active"}`}>
        <form onSubmit={signInFormik.handleSubmit}>
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/black___red_simple_flat_delivery_service_logo-removebg-preview-1500h.png`}
            alt="Logo"
          />
          <h1>Sign In</h1>
          <h5>Enter your Email and Password</h5>
          <input
            type="email"
            placeholder="Email"
            className="email"
            name="email"
            onChange={signInFormik.handleChange}
            value={signInFormik.values.email}
          />
          {signInFormik.errors.email && (
            <div className="error-message">{signInFormik.errors.email}</div>
          )}
          <div className="password-input-container">
            <input
              type={showLoginPassword ? "text" : "password"}
              placeholder="Password"
              className="password"
              name="password"
              onChange={signInFormik.handleChange}
              value={signInFormik.values.password}
            />
            <span
              className="show-password-btn"
              onClick={handleShowLoginPassword}
            >
              {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {signInFormik.errors.password && (
            <div className="error-message">{signInFormik.errors.password}</div>
          )}
          <button className="signin" type="submit">
            Sign In
          </button>
          <div className="register">
            <p>Don't have an account?</p>
            <Link to="#" onClick={handleSignUpClick}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
