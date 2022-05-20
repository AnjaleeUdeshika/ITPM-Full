import React from 'react';
import '../Styles/HeaderStyle.css'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <header>
      <MDBNavbar expand='lg' dark bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='Nav-bar' >
            <MDBNavbarNav right className='Header-Text text-white'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='/home'>
                  <h4>Home</h4>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><h4>Albums</h4></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><h4>Admin</h4></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><h4>Registration</h4></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/get'><h4>Appointments</h4></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Heading</h1>
        <h4 className='mb-3'>Subheading</h4>
        <a className='btn btn-primary' href='' role='button'>
          Call to action
        </a>
      </div> */}
    </header>
  );
}