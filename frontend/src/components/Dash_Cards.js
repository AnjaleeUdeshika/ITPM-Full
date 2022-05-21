import React from "react";
import "../App.css";

function Dash_Cards() {
  return (
    <div className="Dash_Page">
      <div className="Page_Name">
        <h1>DASHBOARD</h1>
      </div>

      <div className="dash_cards">
        <div className="cards">
          <div className="content">
            <h3>23</h3>
            <h5>Customers</h5>
          </div>
        </div>

        <div className="cards">
          <div className="content">
            <h3>100</h3>
            <h5>Photographers</h5>
          </div>
        </div>

        <div className="cards">
          <div className="content">
            <h3>15</h3>
            <h5>Videographers</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash_Cards;
