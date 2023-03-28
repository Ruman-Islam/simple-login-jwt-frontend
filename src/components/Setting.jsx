import React from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return alert("Name is missing");
    } else if (e.target.email.value === "") {
      return alert("Email is missing");
    } else if (e.target.password.value === "") {
      return alert("Password is missing");
    } else {
      const rawResponse = await fetch(
        "https://simple-login-jwt-backend.vercel.app/api/user/update_info",
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
    <div>
      <h1>Update Information</h1>
      <br />
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
