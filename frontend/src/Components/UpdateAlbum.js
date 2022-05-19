import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/UpdateAlbumStyle.css';

import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

import FormBackground from "../Assets/Add-form-background.png";

class UpdateAlbum extends Component{

    constructor(props) {
        super(props)

        console.log(props.match.params.aId);
        var idParm = props.match.params.aId;

        // this.onChangeId = this.onChangeId.bind(this);
        this.onChangeAlbumId = this.onChangeAlbumId.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeGroomName = this.onChangeGroomName.bind(this);
        this.onChangeBrideName = this.onChangeBrideName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeTool = this.onChangeTool.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCoverImg = this.onChangeCoverImg.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        console.log(props.albumId);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          albumId: '',
          category: '',
          groomName: '',
          brideName: '',
          phone: 0,
          tool: '',
          date: '',
          description: '',
          coverImg:'',
          img:'',
          id:idParm
        }
        this.setState({
                    id: idParm
                  })
    }


    // onChangeId(idParm){
    //     this.setState({
    //         id: idParm
    //       })
    // }

    // onChangeId(idParm)


    componentDidMount() {
        console.log("prpsID : "+this.state.id);
        axios.get('http://localhost:8090/album/get/'+this.state.id)
          .then(response => {
            console.log(response.data.album);
              this.setState({
                albumId: response.data.album.albumId,
                category: response.data.album.category,
                groomName:response.data.album.groomName,
                brideName: response.data.album.brideName,
                phone: Number(response.data.album.phone),
                date: response.data.album.date,
                tool: response.data.album.tool,
                description:response.data.album.description,
                coverImg: response.data.album.coverImg,
                img:response.data.album.img,
              })
          })
          .catch((error) => {
            console.log(error);
          })

          
      }

      onChangeAlbumId(e) {
          this.setState({
             albumId: e.target.value
          })
      }
      onChangeCategory(e) {
          this.setState({
            category: e.target.value
          })
      }

      onChangeGroomName(e) {
        this.setState({
          groomName: e.target.value
        })
    }

      onChangeBrideName(e) {
          this.setState({
            brideName: e.target.value
          })
      }
      onChangePhone(e) {
          this.setState({
            phone: Number(e.target.value)
          })
      }
      onChangeDate(e) {
          this.setState({
            date: e.target.value
          })
      }
      onChangeTool(e) {
          this.setState({
            tool: e.target.value
          })
      }
      onChangeDescription(e) {
          this.setState({
            description: e.target.value
          })
      }
      onChangeCoverImg(e) {
        this.setState({
          coverImg: e.target.value
        })
    }onChangeImage(e) {
        this.setState({
          img: e.target.value
        })
    }

      onSubmit(e) {
        
        e.preventDefault();
    
        const exercise = {
          albumId: this.state.albumId,
          category: this.state.category,
          groomName: this.state.groomName,
          brideName: this.state.brideName,
          phone: this.state.phone,
          date: this.state.date,
          tool: this.state.tool,
          description: this.state.description,
          coverImg: this.state.coverImg,
          img: this.state.img
        }
        
        console.log(exercise);

        axios.put('http://localhost:8090/album/update/' + this.state.id, exercise)
          .then(res => {
              console.log("RES Data : "+res.data);
              alert("Updated Successfully");
            });
            
        // window.location = '/';//after submited this will move to all album member details page

      }

    render(){

        return(


        <div className= 'container-update'>

            <div><h1>UPDATE ALBUM...</h1></div>

               <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                 <a href='/myportfolio'>My Portfolio</a>
                 </MDBBreadcrumbItem>
                 <MDBBreadcrumbItem>
                 <a href="/myweddings">Weddings</a>
                 </MDBBreadcrumbItem>
                 <MDBBreadcrumbItem active>Update Album</MDBBreadcrumbItem>
               </MDBBreadcrumb>

            <div className='Form-Background-Update' style={{ backgroundImage: `url(${FormBackground})` }}>

                <form className="Update-Form  col-md-8" onSubmit={this.onSubmit}>

                
                    <label  className="Select-Category" style={{ color: "white" , size: "14px"}}>Select Category</label>
                    <MDBDropdown group className='shadow-0'>
                        <MDBDropdownToggle color='link' required >Select Category</MDBDropdownToggle>
                        <MDBDropdownMenu
                             value={this.state.category}
                             onChange={this.onChangeCategory}
                             >
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">Weddings</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">Birthdays</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">Couple</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">Family</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">Model</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">Nature</MDBDropdownLink>
                        </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>

                    <MDBInput 
                            label={"Album ID"} 
                            type='text'
                            className='input'
                            placeholder="Type Album ID" 
                            style={{size:'14px'}}
                            size="lg"
                            id='formWhite' contrast 
                            required
                            value={this.state.albumId}
                            onChange={this.onChangeAlbumId}
                            disabled 
                    />


                    <MDBInput 
                        label={"Groom's Name"} 
                        type='text'
                        className='input'
                        placeholder="Type Groom's Name..." 
                        style={{size:'14px'}}
                        size="lg"
                        id='formWhite' contrast 
                        required
                        value={this.state.groomName}
                        onChange={this.onChangeGroomName} 
                    />
                    

                    <MDBInput 
                        label={"Bride's Name" }
                        type='text' 
                        className='input' 
                        placeholder="Type Bride's Name..." 
                        style={{size:'14px'}}
                        size="lg"
                        id='formWhite' contrast 
                        required
                        value={this.state.brideName}
                        onChange={this.onChangeBrideName}
                    />


                    <MDBInput 
                        label='Phone' 
                        type='number' 
                        className='input' 
                        placeholder="Type Phone Number..." 
                        style={{size:'14px'}}
                        size="lg"
                        id='formWhite' contrast 
                        required
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                    />

                    <MDBInput 
                        label='Used Tool(s)' 
                        type='text' 
                        className='input' 
                        placeholder="Type Used Tool(s)..." 
                        style={{size:'14px'}}
                        size="lg"
                        id='formWhite' contrast
                        required 
                        value={this.state.tool}
                        onChange={this.onChangeTool}
                    />


                    {/* <label  className="Select-Date col-md-2" style={{ color: "white" , size: "14px"}}>Date</label>
                    <MDBDropdown group className='shadow-0'>
                        <MDBDropdownToggle color='link' >Select Month</MDBDropdownToggle>
                        <MDBDropdownMenu
                            value={this.state.date}
                            onChange={this.onChangeDate}/>>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">January</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">February</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">March</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">April</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">May</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">June</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">July</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">August</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">September</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">October</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">November</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <MDBDropdownLink href="#">December</MDBDropdownLink>
                        </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>

                    <MDBInput 
                        label='Date' 
                        type='number' 
                        className='input col-md-2' 
                        style={{size:'14px'}}
                        size="lg"
                        id='formWhite' contrast 
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />

                    <MDBInput 
                        label='Year' 
                        type='number' 
                        className='input col-md-2' 
                        style={{size:'14px'}}
                        size="lg"
                        id='formWhite' contrast 
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    /> */}

                    <MDBTextArea 
                        label='Description' 
                        id='formWhite' contrast 
                        className='input col-md-8' 
                        placeholder="Description" 
                        style={{size:'14px'}}
                        size="lg"
                        rows={4} 
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />

                    <label  className="Image-Upload" style={{ color: "white" , size: "14px"}}>Upload Cover Image</label>      
                    <MDBInputGroup
                            label='Upload Image' 
                            className='mb-3 col-md-8'
                            size='lg'
                            textAfter='Upload'
                            textTag='label' 
                            placeholder="Upload the cover Image" 
                            style={{size:'14px'}}
                            textProps={{ htmlFor: 'inputGroupFile02' }}
                            required
                    >
                    <input className='form-control' type='file' id='inputGroupFile02' 
                            value={this.state.coverImg}
                            onChange={this.onChangeCoverImg}
                    />
                    </MDBInputGroup>

                    <label  className="Image-Upload" style={{ color: "white" , size: "14px"}}>Upload Images</label>
                    <MDBInputGroup
                            label='Upload Image' 
                            className='mb-3 col-md-8'
                            size='lg'
                            textAfter='Upload'
                            textTag='label' 
                            placeholder="Upload the cover Image" 
                            style={{size:'14px'}}
                            textProps={{ htmlFor: 'inputGroupFile02' }}
                    >
                    <input className='form-control' type='file' id='inputGroupFile02' 
                            value={this.state.img}
                            onChange={this.onChangeImage}
                    />
                    </MDBInputGroup>

                    <MDBBtn className="Update-btn col-md-12"><h5>Update Album</h5></MDBBtn>
                </form>
            </div>
        </div>
            
    
     )
    }
}

export default UpdateAlbum;

