import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;
