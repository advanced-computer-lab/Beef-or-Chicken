import axios from 'axios';
import React, { Component } from 'react';
import '../../App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Header from './Header'


export default function UpateFlight(prop) {
    const flight = prop.match.params
    console.log("flight: ", flight)
    console.log("flightID: ", flight.id)
    const [open, setOpen] = React.useState(false);
    let history = useHistory();


    const onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log("flight: ", flight)
        let url = `http://localhost:8080/flight/${flight.id}`;

        let body = {
            'From': { From },
            'To': { To },
            "DepartureDate": { DepartureDate },
            "ArrivalDate": { ArrivalDate },
            "FirstSeats": { FirstSeats },
            "BusinessSeats": { BusinessSeats },
            "EconomySeats": { EconomySeats },
            "ArrivalTime": { ArrivalTime },
            "DepartureTime": { DepartureTime },
            "FlightNumber": { FlightNo }
        }

        console.log("url", url)
        axios.patch(url, body)
            .then(async (response) => {
                console.log("response ===> ", response)
                history.push("/allFlights");
            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });
        // window.location.reload(false);

    };

    const [From, setFrom] = useState("")
    const [To, setTo] = useState("")
    const [DepartureDate, setDepartureDate] = useState("")
    const [ArrivalDate, setArrivalDate] = useState("")
    const [FirstSeats, setFirstSeats] = useState(null)
    const [BusinessSeats, setBusinessSeats] = useState(null)
    const [EconomySeats, setEconomySeats] = useState(null)
    const [ArrivalTime, setArrivalTime] = useState("")
    const [DepartureTime, setDepartureTime] = useState("")
    const [FlightNo, setFlightNo] = useState("")



    return (

        <div>
            <Header />
            <form id='createFlightForm2' class="row g-3" noValidate onSubmit={onSubmit}>
                <div class="col-md-6" className='form-group'>
                    <label class="form-label">From</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='From'
                        name='From'
                        //className='form-control'
                        value={From}
                        onChange={event => { setFrom(event.target.value.toUpperCase()) }}
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
                        onChange={event => { setTo(event.target.value.toUpperCase()) }}
                    />
                </div>


                <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">Departure Date</label>
                    <input
                        onKeyDown={(e) => e.preventDefault()}
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
                        onKeyDown={(e) => e.preventDefault()}
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
                        min='0'
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
                        min='0'
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
                        min='0'
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
                        type='text'
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