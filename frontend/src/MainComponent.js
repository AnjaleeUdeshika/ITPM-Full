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
            
            </Switch>
            <Footer />
        </div>
  );
}

export default MainComponent;
