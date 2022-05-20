import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangePhotographer = this.onChangePhotographer.bind(this);
    this.onChangeEventType = this.onChangeEventType.bind(this);
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerContactNo = this.onChangeCustomerContactNo.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      photographer: '',
      eventType: '',
      customerName: '',
      customerContactNo: Number,
      customerEmail: '',
      date: new Date()
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/appointment/get/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          photographer: response.data.photographer,
          eventType: response.data.eventType,
          customerName: response.data.customerName,
          customerContactNo: response.data.customerContactNo,
          customerEmail: response.data.customerEmail,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangePhotographer(e) {
    this.setState({
      photographer: e.target.value
    })
  }

  onChangeEventType(e) {
    this.setState({
      eventType: e.target.value
    })
  }

  onChangeCustomerName(e) {
    this.setState({
      customerName: e.target.value
    })
  }

  onChangeCustomerContactNo(e) {
    this.setState({
      customerContactNo: e.target.value
    })
  }

  onChangeCustomerEmail(e) {
    this.setState({
      customerEmail: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const appointment = {
      photographer: this.state.photographer,
      eventType: this.state.eventType,
      customerName: this.state.customerName,
      customerContactNo: this.state.customerContactNo,
      customerEmail: this.state.customerEmail,
      date: this.state.date
    }

    console.log(appointment);

    axios.post('http://localhost:5000/appointment/update/' + this.props.match.params.id, appointment)
      .then(res => console.log(res.data));

    window.location = '/get';
  }

  render() {
    return (

      <div className="col-md-8 mt-4 mx-auto" style={{
        borderRadius:'5px',
        backgroundColor:'#f2f2f2',
        padding: '90px',
        width: '80%',
        boxShadow: '0 1px 56px -26px #000'
        
    }}
    
    >

      <div class="row">
      <div  className="col-md-12">
           <div className="shadowBox">
      <h3 className="h3 mb-3 font-weight-normal">Edit Appointment</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group" style={{marginBottom:'15px'}}> 
          <label style={{marginBottom:'5px'}}>Photographer: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.photographer}
              onChange={this.onChangePhotographer}
              />
        </div>
        <div className="form-group" style={{marginBottom:'15px'}}> 
          <label style={{marginBottom:'5px'}}>Event Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.eventType}
              onChange={this.onChangeEventType}
              />
        </div>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Customer Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.customerName}
              onChange={this.onChangeCustomerName}
              />
        </div>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Customer Contact No: </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.customerContactNo}
              onChange={this.onChangeCustomerContactNo}
              />
        </div>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Customer E-mail: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.customerEmail}
              onChange={this.onChangeCustomerEmail}
              />
        </div>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Date: </label>
          <div>
            <DatePicker
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <br/>
        <div className="row">
									<div className="form-group col"  style={{marginTop:'15px'}}>	              		
										<button type="submit" className="btn btn-success" ><i className="far fa-save"></i>&nbsp;Save</button>&nbsp;&nbsp;
									</div>
									<div className="form-group col"  style={{marginTop:'15px'}}>
									<a href="/get" className="btn btn-danger"><i className="fas fa-times"></i>&nbsp;Cancel</a>
									</div>              			
							</div>
      </form>
    </div>
    </div>
    </div>
    </div>
    )
  }
}