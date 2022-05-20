import React, { Component } from 'react';
import '../Styles/HeaderStyle.css'
import p1 from '../Assets/p1.jpg'
//import w from '../Assets/w.jpg'
//import w2 from '../Assets/w2.jpg'
//import w3 from '../Assets/w3.jpg'

export default class photographer extends Component {

    render() {

        return (

            <div class="container">           
                <img src={p1} class="rounded-circle" alt="Cinque Terre" width="304" height="236"/><br/><br/>
                <h2 class ='header'>Cinemoment Photography</h2><br/>
                <a href="/add" class="btn2 btn-primary">Appointment&nbsp;&nbsp;<i class="fa-solid fa-plus"></i></a>
                <br/>

                <div class="card1">
                    <div class="card-header text-center" >
                    <h5 class="card-title">
                        About
                    </h5>
                    </div>
                    <div class="card-body1">
                        <h5 class="card-title1">Ratings:- </h5>
                        <h5 class="card-title1">Event Types:- Weddings, Birthdays</h5>
                        <h5 class="card-title1">Social Media:- <a href="https://web.facebook.com/?_rdc=1&_rdr"><i class="fa-brands fa-facebook-square"></i></a></h5>
                    </div>
                </div>

                <br/>

                <div class="row">
                    <div class="col">
                        <h3>Wedding Albums</h3>
                        <a href={p1}>
                            <img src={p1} class="img1" alt="Paris"/>
                        </a>
                    </div>
                    <div class="col">
                    <h3>Birthday Albums</h3>
                    <a href={p1}>
                            <img src={p1} class="img1" alt="Paris"/>
                        </a>
                    </div>
                </div>

            </div>

        )
      }

}