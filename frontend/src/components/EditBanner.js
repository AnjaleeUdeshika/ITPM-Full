import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class EditBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Banner_ID: "",
      Banner_Name: "",
      Banner_Description: "",
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
    const id = this.props.match.params.id;
    alert("Banner Update Successfully");

    const { Banner_ID, Banner_Name, Banner_Description } = this.state;
    const data = {
      Banner_ID: this.state.Banner_ID,
      Banner_Name: this.state.Banner_Name,
      Banner_Description: this.state.Banner_Description,
    };

    console.log(data);

    axios.put(`http://localhost:8070/banner/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Banner Updated Successfully");
        this.setState({
          Banner_ID: "",
          Banner_Name: "",
          Banner_Description: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8070/banner/get/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          Banner_ID: res.data.banners.Banner_ID,
          Banner_Name: res.data.banners.Banner_Name,
          Banner_Description: res.data.banners.Banner_Description,
        });

        console.log(this.state.banners);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-8 mt-4 mx-auto">
          <h3 className="h1B">Edit Banner</h3>
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
            <button type="cancel" className="btn btn-primary">
              cancel
            </button>
            &nbsp;
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
