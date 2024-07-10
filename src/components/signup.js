import React, { useState } from "react";
import "./signup.css";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`} id="container">
      <div className={`form-container sign-up ${isSignUp ? "active" : ""}`}>
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="iconn">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`form-container sign-in ${isSignUp ? "" : "active"}`}>
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g" id="google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f" id="facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github" id="github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in" id="linkedin"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
