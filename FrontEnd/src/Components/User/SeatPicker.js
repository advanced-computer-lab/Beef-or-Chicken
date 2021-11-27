import axios from 'axios';
import React, { Component } from 'react';
import '../../App.css';
import CheckBox from './CheckBox'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory } from "react-router-dom";
import { grid } from '@mui/system';

//http://localhost:3000/Seats/61a160d2320b88bd7f1b1f18

export default function UpateFlight(prop) {
    const flight = prop.match.params
   
    let history = useHistory();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    var seats = [];
    var seatsEcon=[];
    var seatsBusiness=[];
    var seatsFirst=[];

    const getFlight =e  => {
        // e.preventDefault();
        // e.stopPropagation();
        console.log("flight: ", flight)
        let url = `http://localhost:8080/flightById/${flight.id}`;

       

        console.log("url", url)
        axios.get(url)
            .then(async (response) => {
                console.log("currFlight ===> ", response)
                seats = response.data.Seats;
                seatsEcon = seats[0];
                seatsBusiness = seats[1];
                seatsFirst = seats[2];
                console.log("Seats1 =>", seatsEcon);
                console.log("Seats2 =>", seatsBusiness);
                console.log("Seats3 =>", seatsFirst);
               
            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });
        // window.location.reload(false);
        };
  
    
    getFlight();

    const printArray =(value)  =>{
        console.log("ana el value",seatsEcon)
    }
    
    return (
        <div>
        <h1>hi</h1>
        <h1>{getFlight}</h1>
        <h1>{printArray(seatsEcon)}</h1>
        {seatsEcon.map((value) => (
          
            <h1>{printArray(value)}</h1>
          
        ))}
           

      
       
   
        </div>
      
    );
}