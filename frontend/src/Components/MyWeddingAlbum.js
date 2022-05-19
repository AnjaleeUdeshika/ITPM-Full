import React from "react";
import '../Styles/MyWeddingAlbumStyle.css';

import AAlbum from "./AAlbum";

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption
  } from 'mdb-react-ui-kit';

  import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';


function MyWeddingAlbum() {

    return (
      <div className="My-Wedding-Album">

          <MDBRow>
              <MDBCol md='8' className='col-example'>
                <h1>MY WEDDINGS...</h1>
              </MDBCol>
              <MDBCol md='4' className='col-example'>
              <div className="Search-Bar col-lg-12 mt-2 mb-3">
                <div class="input-group">
                    <input 
                        type="search" 
                        className="form-control rounded" 
                        placeholder="Search" 
                        aria-label="Search" 
                        aria-describedby="search-addon" 
                        // onChange={this.handleTextSearchAlbum}
                        />
                    {/* <button type="button" class="btn btn-outline-light">search</button> */}
                </div>
            </div>

              </MDBCol>
          </MDBRow>

         <MDBBreadcrumb>
            <MDBBreadcrumbItem>
             <a href='/myportfolio'>My Portfolio </a>
             
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Weddings</MDBBreadcrumbItem>
        </MDBBreadcrumb>


        <MDBBtn className="Add-btn-small col-md-2" href="/addalbum"><h5>Add New Album</h5></MDBBtn>

      {/* Carousel cards */}
      <MDBCarousel className='Cards' showControls showIndicators dark fade children>
              <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0013.jpg' alt='1st image' />
                  <MDBCarouselCaption>
                    <h2>My Wedding Albums...</h2>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0021.jpg' alt='2nd image' />
                  <MDBCarouselCaption>
                    <h2>My Wedding Albums...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0033.jpg' alt='3rd image' />
                  <MDBCarouselCaption>
                    <h2>My Wedding Albums...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>



            {/* --------------------------------Albums------------------------------------------ */}
            <div><br></br><div></div></div>
            
            {/* <div>
                <AAlbum />
            </div> */}

            <div className="grid-container">
              <div md='4' className='col-example'>
                <AAlbum />
              </div>
              
            </div>

            <MDBBtn className="download-btn col-md-12" href="/albumspdf"><h5>Download Report</h5></MDBBtn>

      
      </div>

      
    );
  }

  
export default MyWeddingAlbum;