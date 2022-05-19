import React from "react";

function Navbar() {
  return (
    <div className="first_navbar">
      <div className="AdminName">
        <h8>
          <b>Hi Rumeshi,</b>
        </h8>
        <br />
        <h9> Admin</h9>
      </div>
      <div className="flogout">
        <a className="alogout" href="#">
          <span className="logout">
            <b>Logout</b>
          </span>
        </a>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
