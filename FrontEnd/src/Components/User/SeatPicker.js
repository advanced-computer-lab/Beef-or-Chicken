import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { withRouter } from "react-router";
import '../../App.css';
import Checkbox from '@mui/material/Checkbox';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory } from "react-router-dom";
import { grid } from '@mui/system';

//http://localhost:3000/Seats/61a160d2320b88bd7f1b1f18

var initialEcon = []

class SeatPicker extends Component {



    
    constructor(props) {

        super(props);



        this.state = {
            id: this.props.match.params,
            initEcon: [],
            initBusiness: [],
            initFirst: [],
            seatsEcon: [],
            seatsBusiness: [],
            seatsFirst: [],
            currSeats: 0,
            maxSeats: 2,
            maxReached: false,
            // flag : false,

        };

        // console.log("batates")
        //  console.log("date ==> ",this.state.CurrentDate)
        //  console.log(this.state.CurrentDate.getFullYear() + '-' + (this.state.CurrentDate.getMonth() + 1) + '-' + this.state.CurrentDate.getDate())
    }

    // change with actual value

    //const [seats, setseats] = useState([])





    updateEcon = (index, change) => {
        var temporaryArray = this.state.seatsEcon
        temporaryArray[index] = change
        this.setState({ seatsEcon:  temporaryArray })
        console.log("current seats econ: ", this.state.seatsEcon)
        console.log("init seats econ: ", initialEcon)
        if (change == 0) {
            change = -1
        }

        this.setState({ currSeats: (this.state.currSeats + change) }, () => {

            console.log(this.state.currSeats)
            if (this.state.currSeats >= this.state.maxSeats)
                this.setState({ maxReached: true }, () => {
                    console.log(this.state.maxReached)
                })

            else
                this.setState({ maxReached: false }, () => {
                    console.log(this.state.maxReached)
                })
        });
       
        //console.log(this.state.currSeats)



    }

    componentDidMount = () => {
        let url = `http://localhost:8080/flightById/${this.state.id.id}`;
        console.log("componentdidmount")
        console.log("url", url)
        axios.get(url)
            .then((response) => {
                console.log("currFlight ===> ", response)
                this.setState({ seatsEcon: response.data.Seats[0] })
                this.setState({ seatsBusiness: response.data.Seats[1] })
                this.setState({ seatsFirst: response.data.Seats[2] })
                console.log(response.data.Seats[0])
                // this.setState({ initEcon: response.data.Seats[0] })
                const initialEcon2 = JSON.parse(JSON.stringify(response.data.Seats[0]))
                initialEcon = initialEcon2
                this.setState({ initBusiness: response.data.Seats[1] })
                this.setState({ initFirst: response.data.Seats[2] })


            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });

    }



    handleChangeEcon = event => {
        // setState({ [event.target.id]: event.target.checked })
        if (event.target.checked) {
            this.updateEcon(event.target.id, 1)

        }
        else {
            this.updateEcon(event.target.id, 0)



        }


    };





    render() {

        return (
            <div>
                <Grid container spacing={{ xs: 3 }} >
                    {Array.from(this.state.seatsEcon).map((_, index) => (
                        <Grid item xs={3} key={index}>
                            <Checkbox
                                //checked={this.state.initEcon[index]}
                                
                                checked={this.state.seatsEcon[index]}
                                disabled={initialEcon[index] || (!(this.state.seatsEcon[index]) && this.state.maxReached )}

                                onChange={this.handleChangeEcon}
                                id={(index)}
                                label={index + 1}
                            />


                        </Grid>


                    ))}
                </Grid>
                <h1>-------------------------</h1>
                <Grid container spacing={{ xs: 3 }}  >
                    {Array.from(this.state.initBusiness).map((_, index) => (
                        <Grid item xs={3} key={index}>
                            <Checkbox

                                disabled={this.state.initBusiness[index]}
                                checked={this.state.initBusiness[index]}
                                checked={this.state.seatsBusiness[index]}

                                //onChange={handleChangeBusiness} 
                                id={(index)}
                                label={index + 1}
                            />
                        </Grid>
                    ))}
                </Grid>
                <h1>-------------------------</h1>
                <Grid container spacing={{ xs: 3 }}  >
                    {Array.from(this.state.initFirst).map((_, index) => (
                        <Grid item xs={3} key={index}>
                            <Checkbox

                                disabled={this.state.initFirst[index]}
                                checked={this.state.initFirst[index]}
                                checked={this.state.seatsFirst[index]}

                                //onChange={handleChangeFirst}
                                // inputProps={{ 'aria-label': 'controlled' }}
                                id={(index)}
                                label={index + 1}
                            />
                        </Grid>
                    ))}
                </Grid>



            </div>

        );
    }


}
export default SeatPicker;