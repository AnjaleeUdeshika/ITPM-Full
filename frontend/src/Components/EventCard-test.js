import React from 'react';

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {  MDBBtn } from 'mdb-react-ui-kit';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

import '../Styles/EventCardStyle.css';

function EventCard() {

  return (
    <div className="EventCard">
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
             
          <MDBCard className='h-100 My-wedding-album-card'>   
              <MDBCardBody>
                <MDBCardTitle><h3>Weddings</h3></MDBCardTitle>
                 
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn className='btn-edit' color='success'>Edit</MDBBtn>
                <MDBBtn className='mx-2 btn-delete' color='danger'>Delete</MDBBtn>
              </MDBCardFooter>
              <a href="#!" >
              <MDBCardImage
                src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0036.jpg'
                alt='...'
                position='bottom'
              />
              </a>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default EventCard;



