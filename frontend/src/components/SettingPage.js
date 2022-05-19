import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../App.css";

export default class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    this.retriveBanners();
  }

  //display data in the table
  retriveBanners() {
    axios.get("http://localhost:8070/banner").then((res) => {
      if (res.data.success) {
        this.setState({
          banners: res.data.existingBanners,
        });

        console.log(this.state.banners);
      }
    });
  }

  //Delete function
  onDelete = (Banner_ID) => {
    axios
      .delete(`http://localhost:8070/banner/delete/${Banner_ID}`)
      .then((res) => {
        alert("Deleted Successfully");
        //display rest of the rows
        this.retriveBanners();
      });
  };

  /*search filter by enter data */
  filterData(banners, searchkey) {
    const result = banners.filter(
      (banners) =>
        banners.Banner_Name.toLowerCase().includes(searchkey) ||
        banners.Banner_Description.toLowerCase().includes(searchkey)
    );

    this.setState({ banners: result });
  }

  //search
  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("http://localhost:8070/banner").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingBanners, searchkey);
      }
    });
  };

  render() {
    return (
      <div>
        <div className="section_1">
          <div className="row_one">
            <Navbar />
          </div>
        </div>

        <hr />

        <div className="Btopic">
          <h2>
            <b>BANNERS SETTINGS</b>
          </h2>
        </div>

        <div className="section2">
          <div className="searchBanner">
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchquery"
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>

          <div className="AddBtn">
            <button type="button" class="btn btn-warning">
              <a href="/add" style={{ textDecoration: "none", color: "white" }}>
                + Create New Banner
              </a>
            </button>
          </div>
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
}
