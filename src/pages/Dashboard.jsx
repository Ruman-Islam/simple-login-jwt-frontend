import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <button onClick={() => navigate("/dashboard")}>Home</button>
        <button onClick={() => navigate("/dashboard/feed")}>Feed</button>
        <button onClick={() => navigate("/dashboard/setting")}>Setting</button>
        <button onClick={logout}>Logout</button>
      </div>
      <div style={{ padding: "5px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
