import React, { Component,useState, useEffect } from 'react';
import axios from 'axios';
import './ViewAllReservations.css'
import Header from '../Admin/Header'
import Accordion from 'react-bootstrap/Accordion'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//BACKEND DEPENDENT COMMENTED => BACKEND

function ViewAllReservations (){
    const[flightType , setFlightType]=useState(0);
    const[reservations , setReservations]=useState([]);
    
    const handleChange = (event, newValue) => {
        setFlightType(newValue);
        console.log(flightType);
      };

    useEffect(() => {
        axios.get('http://localhost:8080/BACKEND').then(
          Result => setReservations((Result.data))
        ).catch(err =>{console.log(err)});
      },[]);

    return (
            <div>
                <Header />
                <div class="accordions">
                    <Accordion class="accordion" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div class="accordionHeader">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    &nbsp;
                                    CAI
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                    &nbsp;
                                    DXB
                                </div>
                                <div class="accordionHeader">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>&nbsp;Business
                                </div>
                                <div class="accordionHeader">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                        <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                                        <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                                    </svg>&nbsp;10 $
                                </div>
                                <div class="accordionHeader">
                                    5&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Tabs value={flightType} onChange={handleChange} centered>
                                <Tab label="Departure Flight" />
                                <Tab label="Return Flight" />
                            </Tabs>
                            {flightType ? (
                                <div>return</div>
                                ) : (
                                <div>Departure</div>
                            )}

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header class="accordionHeader">
                                Accordion Item #2
                            </Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header class="accordionHeader">
                                Accordion Item #3
                            </Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        );
    }


export default ViewAllReservations;



/* 
    DepartureFlightID: {
        type: String
    },
    ReturnFlightID: {
        type: String
    },
    CabinType: {
        type: String
    },
    TakenSeats: {
        type: Array
    },
    TotalPrice: {
        type: mongoose.Decimal128
    },
*/
