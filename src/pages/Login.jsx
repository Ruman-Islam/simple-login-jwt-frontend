import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from "../assets/registerImg.jpg";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawResponse = await fetch("https://simple-login-jwt-backend.vercel.app/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const content = await rawResponse.json();
    if (content.token) {
      localStorage.setItem("user", JSON.stringify(content));
      navigate(`/dashboard`);
    } else {
      alert(content.message);
    }
  };

  return (
    <div className="register_container">
      <div>
        <img src={registerImg} alt="" />
      </div>
      <div className="register_form">
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <div className="input_container">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="jon.snow@gmail.com"
            />
          </div>
          <br />
          <div className="input_container">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="**********"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit">Sign In</button>
            <button>Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
