import React from "react";
import '../Styles/MyPortfolioStyle.css';

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

function MyPortfolio() {

    return (

        <div className= 'Header-Container'>
          {/* <Header /> */}
            <div><h1>MY PORTFOLIO...</h1></div>

            <div>
              <MDBBreadcrumb>
                <MDBBreadcrumbItem><p>My Portfolio</p></MDBBreadcrumbItem>
              </MDBBreadcrumb>
              <MDBBtn className="Add-btn-small-1 col-md-2" href="/addalbum"><h5>Add New Album</h5></MDBBtn>

            </div>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
              <MDBCol>
                <MDBCard className='h-100'>
                 
                  <MDBCardBody>
                    <MDBCardTitle><h3>Weddings</h3></MDBCardTitle>
                  </MDBCardBody>
                  <a href="/myweddings" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0036.jpg'
                    alt='...'
                    position='bottom'
                   
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  
                  <MDBCardBody>
                    <MDBCardTitle><h3>Birthdays</h3></MDBCardTitle>

                  </MDBCardBody>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2017/10/mb_fest-7_web.jpg'
                    alt='...'
                    position='bottom'
                    
                  />
                 </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  
                  <MDBCardBody>
                    <MDBCardTitle><h3>Couples</h3></MDBCardTitle>
                    
                  </MDBCardBody>
                  <a href="#!" >
                  <MDBCardImage
                    src='http://www.lieben.no/wp-content/uploads/2020/10/mr-41-1024x683.jpg'
                    alt='...'
                    position='bottom'
              
                  />
                  </a>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <div><br></br></div>
            <MDBRow className='row-cols-2 row-cols-md-3 g-4'>
              <MDBCol>
                <MDBCard className='h-100'>
                  
                  <MDBCardBody>
                    <MDBCardTitle><h3>Family</h3></MDBCardTitle>
                    
                  </MDBCardBody>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2017/02/groven-25_web.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  
                  <MDBCardBody>
                    <MDBCardTitle><h3>Model</h3></MDBCardTitle>
                    
                  </MDBCardBody>
                  <a href="#!" >
                  <MDBCardImage
                    src='http://www.lieben.no/wp-content/uploads/2016/09/09-3494-post/marie17_WEB.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  
                  <MDBCardBody>
                    <MDBCardTitle><h3>Nature</h3></MDBCardTitle>
                    
                  </MDBCardBody>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://images.squarespace-cdn.com/content/v1/544909b6e4b09df9d3d11936/1478878754708-Y6VHK0XRDTZC2M4WAVLS/SeaGrass.jpg?format=1000w'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
            </MDBRow>

          {/* <Footer />  */}
        </div>
       
    );
  }
  
  export default MyPortfolio;