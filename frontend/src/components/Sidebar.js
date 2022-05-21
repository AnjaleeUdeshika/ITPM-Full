import React, { useState } from "react";
//import logoImage from "../Assets/Logo.png";
import "../App.css";

function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <div className="Sidebar">
      <div className="logeImage"></div>
      <div className="links">
        <ul className="linksul">
          <li
            onClick={() => setCurrentLink(1)}
            className={currentLink === 1 ? "active" : ""}
          >
            <a href="/Dashboard">
              <i class="fa-solid fa-house"></i>
              &nbsp;&nbsp;&nbsp;&nbsp; <b>DASHBOARD</b>
            </a>
          </li>

          <li
            onClick={() => setCurrentLink(2)}
            className={currentLink === 2 ? "active" : ""}
          >
            <a href="#">
              <i class="fa-solid fa-people-group"></i>
              &nbsp;&nbsp;&nbsp;&nbsp; <b>CUSTOMERS</b>
            </a>
          </li>

          <li
            onClick={() => setCurrentLink(3)}
            className={currentLink === 3 ? "active" : ""}
          >
            <a href="#">
              <i class="fa-solid fa-user-group"></i>
              &nbsp;&nbsp;&nbsp;&nbsp; <b>PHOTOGRAPHERS</b>
            </a>
          </li>

          <li
            onClick={() => setCurrentLink(4)}
            className={currentLink === 4 ? "active" : ""}
          >
            <a href="/AllVideographers">
              <i class="fa-solid fa-user-group"></i>
              &nbsp;&nbsp;&nbsp;&nbsp; <b>VIDEOGRAPHERS</b>
            </a>
          </li>

          <li
            onClick={() => setCurrentLink(5)}
            className={currentLink === 5 ? "active" : ""}
          >
            <a href="/Setting">
              <i class="fa-solid fa-gear"></i>
              &nbsp;&nbsp;&nbsp;&nbsp; <b>SETTINGS</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
