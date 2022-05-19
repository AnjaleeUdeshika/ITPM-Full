import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function AddBanner() {
  const [BannerID, setId] = useState("");
  const [BannerName, setName] = useState("");
  const [BannerDescription, setDescription] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newBanner = {
      BannerID,
      BannerName,
      BannerDescription,
    };

    axios
      .post("http://localhost:8070/banner/add", newBanner)
      .then(() => {
        alert("Banner Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendData}>
          <div className="form-group">
            <label for="BannerID">Banner ID</label>
            <input
              type="id"
              className="form-control"
              id="id"
              placeholder="Enter Banner ID"
              onChange={(e) => {
                setId(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <label for="BannerName">Banner Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Banner Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <label for="BannerDescription">Banner Desription</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Banner Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>

          <button type="cancel" className="btn btn-primary">
            cancel
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBanner;
