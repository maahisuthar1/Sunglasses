import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./login.css";
import logo from "../assets/ChatGPT_Image_May_20__2026__03_49_53_PM-removebg-preview.png";
import Pic from "../assets/Firefly.jpg";

function Login({ isOpen, onClose, onLogin, mode, onSwitchMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  useEffect(() => {
    if (isOpen) {
      clearForm();
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "register") {
      try {
        const response = await fetch(
          "https://sungalsses-backend.onrender.com/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          },
        );

        const data = await response.json();

        console.log(data);
        console.log("LOGIN RESPONSE:", data);
        if (!response.ok) {
          setError(data.message);
          return;
        }

        clearForm();
        onClose();
      } catch (err) {
        setError("Registration failed");
      }
      return;
    }
    try {
      const response = await fetch(
        "https://sungalsses-backend.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();


  console.log("LOGIN RESPONSE:", data);
  console.log("TOKEN:", data.token);

      if (!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);

      const currentUser = {
        userId: data.userId,
        name: data.name,
      };

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      onLogin(currentUser);
      clearForm();
      onClose();
    } catch (err) {
      setError("Login failed");
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-head">
          <div className="modal-header">
            <img src={logo} alt="logo" className="modal-logo" />

            <h1 className="brand">Stylish Shades</h1>

            <div className="subtitle">
              {mode === "register" ? (
                <>
                  <span>Create Your Account</span>
                  <span>Join Us Today!</span>
                </>
              ) : (
                <>
                  <span>Welcome Back</span>
                  <span>Login to continue</span>
                </>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modalentry">
              {mode === "register" && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  required
                />
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
              />

              {error && <div className="error-message">{error}</div>}

              <div className="modal-actions">
                <button className="submit-btn" type="submit">
                  {mode === "register" ? "Register" : "Login"}
                </button>

                <button
                  className="cancel-btn"
                  type="button"
                  onClick={() => {
                    clearForm();
                    onClose();
                  }}
                >
                  Cancel
                </button>

                <div className="switch-text">
                  {mode === "login" ? (
                    <>
                      Don't have an account?
                      <span onClick={onSwitchMode}> Sign Up</span>
                    </>
                  ) : (
                    <>
                      Already have an account?
                      <span onClick={onSwitchMode}> Login</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="image-section">
          <img src={Pic} alt="model" className="modelpic" />
          <div className="cancel-overlay">
            <button
              className="cancel-cross"
              type="button"
              onClick={() => {
                clearForm();
                onClose();
              }}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Login;
