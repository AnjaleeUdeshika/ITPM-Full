import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import '../Styles/HeaderStyle.css'

const Appointment = props => (
  <tr>
    <td>{props.appointment.photographer}</td>
    <td>{props.appointment.eventType}</td>

    <td>{props.appointment.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.appointment._id} className ="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i>&nbsp;edit</Link> | <a href="#" onClick={() => { props.deleteAppointment(props.appointment._id) }} className ="btn btn-danger"><i class="fa-solid fa-trash-can"></i>&nbsp;delete</a>
    </td>
  </tr>
)

export default class AppointmentsList extends Component {
  constructor(props) {
    super(props);

    this.deleteAppointment = this.deleteAppointment.bind(this)

    this.state = {appointments: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/appointment/get')
      .then(response => {
        this.setState({ appointments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAppointment(id) {
    axios.delete('http://localhost:5000/appointment/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      appointments: this.state.appointments.filter(el => el._id !== id)
    })
  }

  appointmentList() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }

  // Search 
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    console.log(searchKey);

    axios.get('http://localhost:5000/appointment/get')

      .then(response => {

        this.filterData(response.data, searchKey )

        })

      .catch((error) => {

        console.log(error);

      })
    }

    filterData(appointments, searchKey){

      const result = appointments.filter((Appointment) =>
  
      Appointment.date.includes(searchKey) || Appointment.photographer.toLowerCase().includes(searchKey)

      )
  
      this.setState({appointments:result})
  
    }

    exportPDF = () => {

      const unit = "pt";

      const size = "A3"; // Use A1, A2, A3 or A4

      const orientation = "portrait"; // portrait or landscape


      const marginLeft = 40;

      const doc = new jsPDF(orientation, unit, size);

      doc.setFontSize(15);

      const title = "My Appointments";

      const headers = [['Photographer','Event Type','Date']];

      const data = this.state.appointments.map(elt=> [elt.photographer, elt.eventType,elt.date]);

      let content = {

        startY: 50,
        head: headers,
        body: data

      };

      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("MyAppointments.pdf")

    }

  render() {
    return (
      <div>
        <div class="input-group">
<div class="form-outline">
    <input id="search-focus" type="search"  class="form-control" placeholder='Search By Name or Date' onChange={this.handleSearchArea} style={{border: '3px solid black'}}/>
</div>
</div>
        <h3>All Appointments</h3><br/>
        <table className="table border shadow table table-striped border table-dark">
          <thead className="thead-light" style={{fontWeight:'bold'}}>
            <tr>
              <th scope="col">Photographer</th>
              <th scope="col">Event Type</th>

              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.appointmentList() }
          </tbody>
        </table>

      <div>

        <Link to="#" onClick={()=>this.exportPDF()} className="btn btn-success"><i class="fas fa-download"></i>&nbsp;Download Report</Link>

      </div>

      </div>
    )
  }
}