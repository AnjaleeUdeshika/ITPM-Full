import React, {useState} from 'react';
import axios from "axios"; //catch the backend server http request
import '../Styles/AddAlbumStyle.css'

import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { MDBInputGroup } from 'mdb-react-ui-kit';
import { MDBCol} from 'mdb-react-ui-kit';
import {  MDBBtn } from 'mdb-react-ui-kit';
//import MDBSelect from 'mdb-react-ui-kit';
//import { Dropdown } from 'react-bootstrap';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';


import FormBackground from "../Assets/Add-form-background.png";
// import Footer from './Footer';
// import Header from './Header-full/Header';


function AddAlbum(){

        const [albumId,setAlbumId] = useState("");
        const [category,setCategory] = useState("");
        const [groomName,setGroomName] = useState("");
        const [brideName,setBrideName] = useState("");
        const [phone,setPhone] = useState("");
        const [tool,setTool] = useState("");
        const [date,setDate] = useState("");
        const [description,setDescription] = useState("");
        const [coverImg,setCoverImg] = useState("");
        const [img,setImg] = useState("");
        
        

        

        function sendData(e){
            e.preventDefault();//prevent submit 's normal behaviror
            //alert("insert");

            const newAlbum = {
                albumId,
                category,
                groomName,
                brideName,
                phone,
                tool,
                date,
                description,
                coverImg,
                img,    
                
            }
            
            console.log(newAlbum)

            //pass the parameters to backend
            axios.post("http://localhost:8090/album/add" , newAlbum).then(() => {
                alert("Album Added Successfully")
               
                setAlbumId("");
                setCategory("");
                setGroomName("");
                setBrideName("");
                setPhone("");
                setTool("");
                setDate("");
                setDescription("");
                setCoverImg("");
                setImg("");

            }).catch((err) => {
                alert(err)
            })
        }


    return(

      
        <div className= 'Header-Container'>
            {/* <Header /> */}
              <div><h1>ADD NEW ALBUM...</h1></div>

              <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                <a href='/myportfolio'>My Portfolio</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                <a href="/myweddings">Weddings</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Add Album</MDBBreadcrumbItem>
              </MDBBreadcrumb>

        <div className='Form-Background' style={{ backgroundImage: `url(${FormBackground})` }}>
            {/* <image src={require('../Assets/Add-form-background.png')} > */}
            <form className="Add-Form  col-md-8" onSubmit = { sendData } >

                

                <label  className="Select-Category" 
                    style={{ color: "white" , size: "14px"}}>
                    Select Category
                </label>


                <MDBDropdown group className='shadow-0'>
                    <MDBDropdownToggle color='link' required >
                    Weddings
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                        onChange={(e) => {
                            setCategory(e.target.value);//typing category(value) assign to category state through the setName function(setter) 
                        }}>
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
                        onChange={(e) => {
                            setAlbumId(e.target.value);
                        }} 
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
                    onChange={(e) => {
                        setGroomName(e.target.value);
                     }} 
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
                    onChange={(e) => {
                        setBrideName(e.target.value);
                    }}
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
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
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
                    onChange={(e) => {
                        setTool(e.target.value);
                    }}
                />

                <MDBInput 
                    label='Date' 
                    type='text' 
                    className='input' 
                    placeholder="Type Date ..." 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast
                    required 
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                />

                
                {/* <label  className="Select-Date col-md-2" style={{ color: "white" , size: "14px"}}>Date</label>
                <MDBDropdown group className='shadow-0'>
                    <MDBDropdownToggle color='link' >Select Month</MDBDropdownToggle>
                    <MDBDropdownMenu
                        onChange={(e) => {
                            setDate(e.target.value);//typing category(value) assign to category state through the setName function(setter) 
                    }}>
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
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
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
                        onChange={(e) => {
                            setCoverImg(e.target.value);
                        }}
                />
                </MDBInputGroup>

  {/*               <label  className="Image-Upload" style={{ color: "white" , size: "14px"}}>Upload Images</label>
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
                        onChange={(e) => {
                            setImg(e.target.value);
                        }}
                />
                </MDBInputGroup> */}

                <MDBBtn className="Add-btn col-md-12"><h5>Add New Album</h5></MDBBtn>
            </form>
            {/* </image> */}
        </div>


        {/* <Footer />         */}
    </div>

    )

                //emplement Upload 4to and upload education qualifications pdf
    
}

export default AddAlbum;


{/* <MDBCol size='12'>
        <MDBSelect
          data={[
            { text: 'One', value: 1, selected: true },
            { text: 'Two', value: 2 },
            { text: 'Three', value: 3 },
            { text: 'Four', value: 4 },
            { text: 'Five', value: 5 },
            { text: 'Six', value: 6 },
            { text: 'Seven', value: 7 },
            { text: 'Eight', value: 8 },
          ]}
        />
      </MDBCol> */}


      