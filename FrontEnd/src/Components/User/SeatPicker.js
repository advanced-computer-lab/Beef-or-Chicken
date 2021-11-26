import axios from 'axios';
import React, { Component } from 'react';
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory } from "react-router-dom";

//http://localhost:3000/Seats/61a160d2320b88bd7f1b1f18

export default function UpateFlight(prop) {
    const flight = prop.match.params
    console.log("flight: ", flight)
    console.log("flightID: ", flight.id)
    
    let history = useHistory();
    

    const getFlight =e  => {
        // e.preventDefault();
        // e.stopPropagation();
        console.log("flight: ", flight)
        let url = `http://localhost:8080/flightById/${flight.id}`;

       

        console.log("url", url)
        axios.get(url)
            .then(async (response) => {
                console.log("response ===> ", response)
               
            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });
        // window.location.reload(false);

    };

    const currFlight = getFlight();



    return (
        <div><h1>{currFlight}</h1></div>
        
    );
}