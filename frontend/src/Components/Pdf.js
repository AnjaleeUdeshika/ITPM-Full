import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';

import '../Styles/PdfStyle.css';

const Album = props => (
  <tr>
    <td>{props.album.albumId}</td>
    <td>{props.album.groomName}</td>
    <td>{props.album.brideName}</td>
    <td>{props.album.tool}</td>
    <td>{props.album.date.substring(0,10)}</td>

    <td>
      <Link to={"/edit/"+props.album._id} className ="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i>&nbsp;edit</Link> | <a href="#" onClick={() => { props.deleteAlbum(props.album._id) }} className ="btn btn-danger"><i class="fa-solid fa-trash-can"></i>&nbsp;delete</a>
    </td>
  </tr>
)

export default class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.deleteAlbum = this.deleteAlbum.bind(this)

    this.state = {albums: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8090/album/')
      .then(response => {
        this.setState({ albums: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAlbum(id) {
    axios.delete('http://localhost:8090/album/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      albums: this.state.albums.filter(el => el._id !== id)
    })
  }

  albumList() {
    return this.state.albums.map(currentalbum => {
      return <Album album={currentalbum} deleteAlbum={this.deleteAlbum} key={currentalbum._id}/>;
    })
  }

  // Search 
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    console.log(searchKey);

    axios.get('http://localhost:8090/album/')

      .then(response => {

        this.filterData(response.data, searchKey )

        })

      .catch((error) => {

        console.log(error);

      })
    }

    //filter data
    filterData(albums, searchKey){

      const result = albums.filter((album) =>
  
      album.albumId.includes(searchKey) || 
      album.groomName.toLowerCase().includes(searchKey) ||
      album.brideName.toLowerCase().includes(searchKey) ||
      album.tool.toLowerCase().includes(searchKey)||
      album.date.includes(searchKey) 
      )
  
      this.setState({albums:result})
  
    }

    //pdf generate
    exportPDF = () => {

      const unit = "pt";

      const size = "A3"; // Use A1, A2, A3 or A4

      const orientation = "portrait"; // portrait or landscape


      const marginLeft = 40;

      const doc = new jsPDF(orientation, unit, size);

      doc.setFontSize(15);

      const title = "My Albums";

      const headers = [['AlbumId','Groom Name', 'Bride Name', 'Date']];

      const data = this.state.albums.map(elt=> [elt.albumId, elt.groomName, elt.brideName, elt.tool, elt.date]);

      let content = {

        startY: 50,
        head: headers,
        body: data

      };

      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("MyAlbums.pdf")

    }

  render() {
    return (
      <div>
        <div class="input-group">
          <div class="form-outline">
            <input id="search-focus" type="search"  class="form-control" placeholder='Search By AlbumId/GroomName/BrideName/Tool/Date' onChange={this.handleSearchArea} style={{border: '3px solid black'}}/>
          </div>
      </div>
        <h3>All Albums</h3><br/>
        <table className="table border shadow table table-striped border table-light">
          <thead className="thead-light" style={{fontWeight:'bold'}}>
            <tr>
              <th scope="col">AlbumId</th>
              <th scope="col">Groom Name</th>
              <th scope="col">Bride Name</th>
              <th scope="col">Tool</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.albumList() }
          </tbody>
        </table>

      <div>

        <Link to="#" onClick={()=>this.exportPDF()} className="btn btn-success"><i class="fas fa-download"></i>&nbsp;Download Report</Link>

      </div>

      </div>
    )
  }
}