import React, { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h3>Name: {user?.user?.fullName}</h3>
        <h3>Email: {user?.user?.email}</h3>
      </div>
    </div>
  );
};

export default Home;
