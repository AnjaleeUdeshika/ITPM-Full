import React from "react";
import Dash_Cards from "./Dash_Cards";
import Navbar from "./Navbar";
import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="section_1">
        <div className="row_one">
          <Navbar />
        </div>
      </div>

      <div className="section_2">
        <div className="row_two">
          <Dash_Cards />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
