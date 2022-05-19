import React from 'react';
import './HeaderStyle.css'
import Navbar from './Navbar'


import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';
import SearchBar from '../SearchBar';

export default function Header() {
  return (
    <header className='Header'>
      <Navbar/>

    </header>
  );
}