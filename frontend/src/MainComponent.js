import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";

import Header from './Components/Header-full/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AddAlbum from './Components/AddAlbum';
import UpdateAlbum from './Components/UpdateAlbum';
import MyPortfolio from './Components/MyPortfolio';
import MyWeddingAlbum from './Components/MyWeddingAlbum';
import Pdf from './Components/Pdf';
import WeddingAlbum from './Components/WeddingAlbum';
import EventCard from './Components/EventCard-test';
import AAlbum from './Components/AAlbum';
import Card from './Components/Card-test';
import SearchBar from './Components/SearchBar';
import photographer from './Components/photographer';
import AddAppointment from './Components/AddAppointment';
import EditAppointment from "./Components/edit-appointment.component";
import AppointmentsList from "./Components/appointments-list.component";


function MainComponent() {
  return (
    

        <div className="MainComponent">
            <Header />

            <Switch>
            {/* <Route path="/home" component={HomePage} /> */}
            <Route path="/myportfolio" component={MyPortfolio} />
            
            {/* <Route path="/login" exact  component={Login}/> */}
            
            <Route path="/addalbum" exact  component={AddAlbum}/>

             <Route path="/myweddings" exact component={MyWeddingAlbum}/>

             <Route path="/update/:aId" exact component={UpdateAlbum}/>

            <Route path="/weddingalbum"  exact component={WeddingAlbum}/>

            <Route path="/albumspdf" exact component={Pdf} />
        
            <Redirect to="/myportfolio" />
			
			<Route path="/home" exact component={Home}/>
			<Route path="/photographer" exact component={photographer}/> 
			<Route path="/add" exact component={AddAppointment}/>
			<Route path="/get" exact component={AppointmentsList} />
			<Route path="/edit/:id" exact component={EditAppointment} />
            
            </Switch>
            <Footer />
        </div>
  );
}

export default MainComponent;
