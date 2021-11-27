import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
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
    //const [seats, setseats] = useState([])
    const [seatsEcon, setseatsEcon] = useState([])
    const [seatsBusiness, setseatsBusiness] = useState([])
    const [seatsFirst, setseatsFirst] = useState([])

    useEffect(() => {
        let url = `http://localhost:8080/flightById/${flight.id}`;

        console.log("url", url)
        axios.get(url)
            .then((response) => {
                console.log("currFlight ===> ", response)
              
                setseatsEcon(response.data.Seats[0]);
                setseatsBusiness(response.data.Seats[1]);
                setseatsFirst(response.data.Seats[2]);
                console.log("Seats1 =>", seatsEcon);
                console.log("Seats2 =>", seatsBusiness);
                console.log("Seats3 =>", seatsFirst);

            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });
        // do stuff here...
    }, []) // <-- empty dependency array

    let history = useHistory();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    

    


    return (
        <div>
            <Grid container spacing={{ xs: 3 }} >
                {Array.from(seatsEcon).map((_, index) => (
                    <Grid item xs={3} key={index}>
                        <Item><CheckBox /></Item>
                    </Grid>
                ))}
            </Grid>
            <h1>-------------------------</h1>
            <Grid container spacing={{ xs: 3 }}  >
                {Array.from(seatsBusiness).map((_, index) => (
                    <Grid item xs={3} key={index}>
                        <Item><CheckBox /></Item>
                    </Grid>
                ))}
            </Grid>
            <h1>-------------------------</h1>
            <Grid container spacing={{ xs: 3 }}  >
                {Array.from(seatsFirst).map((_, index) => (
                    <Grid item xs={3} key={index}>
                        <Item><CheckBox /></Item>
                    </Grid>
                ))}
            </Grid>



        </div>

    );
}