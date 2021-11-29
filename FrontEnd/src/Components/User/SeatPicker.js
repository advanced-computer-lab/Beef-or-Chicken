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



class SeatPicker extends Component {




    constructor(props) {

        super(props);
        this.state = {
            id: this.props.match.params,
            //initEcon: [],
            //initBusiness: [],
            //initFirst: [],
            seats: [],
            initial: [],
            chosenSeats:[],
            currSeats: 0,
            maxSeats: 2,
            cabin:1,  // 0 for econ, 1 for business, 2 first
            maxReached: false,
            // flag : false,

        };
        //  console.log(this.state.CurrentDate.getFullYear() + '-' + (this.state.CurrentDate.getMonth() + 1) + '-' + this.state.CurrentDate.getDate())
    }




    updateChoice = (index, change) => {
        var temporaryArray = this.state.seats
        temporaryArray[index] = change
        this.setState({ seats: temporaryArray })
        console.log("current seats : ", this.state.seats)
        console.log("init seats : ", this.state.initial)
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
    }


    componentDidMount = () => {
        let url = `http://localhost:8080/flightById/${this.state.id.id}`;
        console.log("componentdidmount")
        console.log("url", url)
        axios.get(url)
            .then((response) => {
                
                console.log("currFlight ===> ", response)
                this.setState({ seats: JSON.parse(JSON.stringify(response.data.Seats[this.state.cabin])) })
                this.setState({ initial: JSON.parse(JSON.stringify(response.data.Seats[this.state.cabin])) })
               
            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });

    }

   


    handleChange = event => {
        // setState({ [event.target.id]: event.target.checked })
        if (event.target.checked) {
            this.setState({choosenSeats: this.state.chosenSeats.push(event.target.id)}, () =>{
                this.updateChoice(event.target.id, 1)
                console.log("chosen Seats now: ", this.state.chosenSeats)
            })
          
            
            
        }
        else {
            
            
            this.setState({ chosenSeats: this.state.chosenSeats.filter((item) => item !== event.target.id) },
            () =>{
                this.updateChoice(event.target.id, 0)
                console.log("chosen Seats now: ", this.state.chosenSeats)
            }) 
            
        }
    };






    render() {

        return (
            <div>
                <Grid container spacing={{ xs: 3 }} >
                    {Array.from(this.state.seats).map((_, index) => (
                        <Grid item xs={3} key={index}>
                            <Checkbox
                                //checked={this.state.initEcon[index]}

                                checked={this.state.seats[index]}
                                disabled={this.state.initial[index] || (!(this.state.seats[index]) && this.state.maxReached)}

                                onChange={this.handleChange}
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