import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class CSSAddBaanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Banner_ID: "",
      Banner_Name: "",
      Banner_Description: "",
      Banner_Image: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    alert("Banner Insert Successfully");

    const { Banner_ID, Banner_Name, Banner_Description, Banner_Image } =
      this.state;
    const data = {
      Banner_ID: this.state.Banner_ID,
      Banner_Name: this.state.Banner_Name,
      Banner_Description: this.state.Banner_Description,
      Banner_Image: this.state.Banner_Image,
    };

    console.log(data); //passing Data to console

    axios.post("http://localhost:8070/banner/add", data).then((res) => {
      if (res.data.success) {
        this.setState({
          Banner_ID: "",
          Banner_Name: "",
          Banner_Description: "",
          Banner_Image: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="CreateNewBannerForm">
        <div className="col-md-8 mt-4 mx-auto">
          <h3 className="h1B">Create New Banner</h3>
          <br />
          <form className="formB">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Banner ID</label>
              <input
                type="id"
                className="form-control"
                name="Banner_ID"
                placeholder="Enter Banner ID"
                value={this.state.Banner_ID}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Banner Name</label>
              <input
                type="text"
                className="form-control"
                name="Banner_Name"
                placeholder="Enter Banner Name"
                value={this.state.Banner_Name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Banner Description</label>
              <input
                type="text"
                className="form-control"
                name="Banner_Description"
                placeholder="Enter Banner Description"
                value={this.state.Banner_Description}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Banner Image</label>
              <input
                id="image"
                type="file"
                name="Banner_Image"
                placeholder="Input Banner Image"
                value={this.state.Banner_Image}
                onChange={this.handleInputChange}
                required=""
                capture
              />
            </div>
            <button type="cancel" className="btn btn-primary">
              <a href="/Setting">Cancel</a>
            </button>
            &nbsp;
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
