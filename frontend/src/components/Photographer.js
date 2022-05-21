import React, { Component } from "react";
import axios from "axios";
import "../App.css";

function Photographer() {
  return (
    <div>
      <div className="Btopic">
        <h2>
          <b>BANNERS SETTINGS</b>
        </h2>
      </div>

      <div className="BannerTable">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">BANNER IMAGE</th>
              <th scope="col">BANNER TITLE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.banners.map((banners) => (
              <tr>
                <th>{banners.Banner_Image}</th>
                <td>{banners.Banner_Name}</td>
                <td>{banners.Banner_Description}</td>
                <td>
                  <a
                    className="btn btn-primary"
                    href={`/update/${banners._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
                  <a
                    class="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(banners._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp; Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Photographer;
