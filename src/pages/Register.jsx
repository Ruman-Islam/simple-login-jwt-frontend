import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from "../assets/registerImg.jpg";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return alert("Name is missing");
    } else if (e.target.email.value === "") {
      return alert("Email is missing");
    } else if (e.target.password.value === "") {
      return alert("Password is missing");
    } else if (e.target.confirmPassword.value === "") {
      return alert("Confirm password is missing");
    } else if (e.target.password.value !== e.target.confirmPassword.value) {
      return alert("Confirm password doesn't match");
    } else {
      const rawResponse = await fetch(
        "http://localhost:5000/api/user/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
          }),
        }
      );
      const content = await rawResponse.json();
      if (content.token) {
        localStorage.setItem("user", JSON.stringify(content));
        navigate(`/dashboard`);
      } else {
        alert(content.message);
      }
    }
  };

  return (
    <div className="register_container">
      <div>
        <img src={registerImg} alt="" />
      </div>
      <div className="register_form">
        <h2>Sign Up Now!</h2>
        <br />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <label htmlFor="full_name">Full Name</label>
              <input
                name="name"
                id="full_name"
                type="text"
                placeholder="Mr. Jon Snow"
              />
            </div>
            <div className="input_container">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="jon.snow@gmail.com"
              />
            </div>
            <div className="input_container">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="input_container">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                name="confirmPassword"
                id="confirm-password"
                type="password"
                placeholder="************"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="submit">Sign Up</button>
              <button onClick={() => navigate("/login")}>
                Already Have an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
