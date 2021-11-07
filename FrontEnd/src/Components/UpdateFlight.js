import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function UpateFlight(prop) {
    const flight = prop.flight
    const [open, setOpen] = React.useState(false);

    const onSubmit = e => {
        console.log("flight: ", flight)
        let url = `http://localhost:8080/flight/${flight}`;
        console.log("url", url)
        axios.update(url)
            .then(async (response) => {
                console.log("response ===> ", response)
            })
            .catch((e) => {
                console.log("ana hena")
                console.log("error ===>", e);
            });
        window.location.reload(false);

    };

    const [From, setFrom] = useState(prop.From)
    const [To, setTo] = useState(prop.To)
    const [DepartureDate, setDepartureDate] = useState(prop.DepartureDate)
    const [ArrivalDate, setArrivalDate] = useState(prop.ArrivalDate)
    const [FirstSeats, setFirstSeats] = useState(prop.FirstSeats)
    const [BusinessSeats, setBusinessSeats] = useState(prop.BusinessSeats)
    const [EconomySeats, setEconomySeats] = useState(prop.EconomySeats)
    const [ArrivalTime, setArrivalTime] = useState(prop.ArrivalTime)
    const [DepartureTime, setDepartureTime] = useState(prop.DepartureTime)
    const [FlightNo, setFlightNo] = useState(prop.FlightNo)



    return (
        <div>
            <form id = 'createFlightForm' class="row g-3" noValidate onSubmit={onSubmit}>
                <div class="col-md-6" className='form-group'>
                <label class="form-label">From</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='From'
                        name='From'
                        //className='form-control'
                        value={From}
                        onChange={event => { setFrom(event.target.value.toLowerCase()) }}
                    />
                     
                </div>
        
                
                <div class="col-md-6" className='form-group form-inline'>
                <label class="form-label">To</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='To'
                        name='To'
                        // className='form-control'
                        value={To}
                        onChange={event => { setTo(event.target.value.toLowerCase()) }}
                    />
                </div>

       
                <div class="col-md-6" className='form-group form-inline'>
                <label class="form-label">Departure Date</label>
                    <input
                        type='date'
                        class="form-control flex-fill"
                        placeholder='DepartureDate'
                        name='DepartureDate'
                        //  className='form-control'
                        value={DepartureDate}
                        onChange={event => { setDepartureDate(event.target.value.toLowerCase()) }}
                    />
                </div>
          
                
                <div class="col-md-6" className='form-group form-inline'>
                <label class="form-label">Departure Time</label>
                    <input
                        type='time'
                        class="form-control flex-fill"
                        placeholder='DepartureTime'
                        name='DepartureTime'
                        //  className='form-control'
                        value={DepartureTime}
                        onChange={event => { setDepartureTime(event.target.value.toLowerCase()) }}
                    />
                </div>



                <div class="col-md-6" className='form-group form-inline'>
                <label class="form-label">Arrival Date</label>
                    <input
                        type='date'
                        class="form-control flex-fill"
                        placeholder='ArrivalDate'
                        name='ArrivalDate'
                        //  className='form-control'
                        value={ArrivalDate}
                        onChange={event => { setArrivalDate(event.target.value.toLowerCase()) }}
                    />
                </div>
                <div class="col-md-4" className='form-group form-inline'>
                <label class="form-label">Arrival Time</label>
                    <input
                        type='time'
                        class="form-control flex-fill"
                        placeholder='ArrivalTime'
                        name='ArrivalTime'
                        //  className='form-control'
                        value={ArrivalTime}
                        onChange={event => { setArrivalTime(event.target.value.toLowerCase()) }}
                    />
                </div>
                
                <div class="col-md-4" className='form-group form-inline'>
                <label class="form-label">Economy</label>
                    <input
                        type='number'
                        class="form-control flex-fill"
                        placeholder='Seats Available'
                        name='EconomySeats'
                        //  className='form-control'
                        value={EconomySeats}
                        onChange={event => { setEconomySeats(event.target.value.toLowerCase()) }}
                    />
                </div>
              
                <div class="col-md-4" className='form-group form-inline'>
                <label class="form-label">Business</label>
                    <input
                        type='number'
                        class="form-control flex-fill"
                        placeholder='Seats Available'
                        name='BusinessSeats'
                        //  className='form-control'
                        value={BusinessSeats}
                        onChange={event => { setBusinessSeats(event.target.value.toLowerCase()) }}
                    />
                </div>
              
                <div className='form-group form-inline'>
                <label class="form-label">First Class</label>
                    <input
                        type='number'
                        class="form-control flex-fill"
                        placeholder='Seats Available'
                        name='FirstSeats'
                        //  className='form-control'
                        value={FirstSeats}
                        onChange={event => { setFirstSeats(event.target.value.toLowerCase()) }}
                    />
                </div>
               

                <div class="form-group form-inline" className='form-group'>
                <label class="form-label">Flight Number</label>
                    <input
                        type ='text' 
                        class="form-control flex-fill"
                        placeholder='Flight Number'
                        name='FlightNumber'
                        //  className='form-control'
                        value={FlightNo}
                        onChange={event => { setFlightNo(event.target.value.toLowerCase()) }}
                    />
                </div>

                
                <input
                class="btn btn-primary"
                    type="submit"
                // className="btn btn-outline-warning btn-block mt-4"
                />
            </form>
        </div>
    );
}