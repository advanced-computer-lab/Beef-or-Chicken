import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import ResultBack from "../../images/Results2.png";
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";
import '../../App.css';
import './SeatPicker.css'
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useHistory } from "react-router-dom";
import { grid } from '@mui/system';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
//http://localhost:3000/Seats/61a160d2320b88bd7f1b1f18






class SeatPicker extends Component {




    constructor(props) {

        super(props);
        this.state = {

            //  id: this.details.DepartingFlight._id,
            id: this.props.details.DepartingFlight._id,
            flight: this.props.match.params,
            //initEcon: [],
            //initBusiness: [],
            //initFirst: [],
            seats: [],
            initial: [],
            chosenSeats: [],
            currSeats: 0,
            maxSeats: this.props.details.Adults + this.props.details.children,
            //cabin: 1,  // 0 for econ, 1 for business, 2 first
            maxReached: false,
            // flag : false,

        };
        console.log("ddddddddddd: ", this.props.details)
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
        //let url = `http://localhost:8080/flightById/${this.state.id.id}`;
        if (this.state.flight == 1) {
           

                console.log("curr flight isa: ", this.state.currFlight)
                
                switch (this.props.details.cabin_class) {
                    case "Economy":
                        // this.setState({ cabin: 0 })

                        this.setState({ seats: JSON.parse(JSON.stringify(this.props.details.DepartingFlight.Seats[0])) })
                        this.setState({ initial: JSON.parse(JSON.stringify(this.props.details.DepartingFlight.Seats[0])) })

                        break;
                    case "Bussiness":
                        this.setState({ seats: JSON.parse(JSON.stringify(this.props.details.DepartingFlight.Seats[1])) })
                        this.setState({ initial: JSON.parse(JSON.stringify(this.props.details.DepartingFlight.Seats[1])) })
                        break;
                    case "First":
                        this.setState({ seats: JSON.parse(JSON.stringify(this.props.details.DepartingFlight.Seats[2])) })
                        this.setState({ initial: JSON.parse(JSON.stringify(this.props.details.DepartingFlight.Seats[2])) })
                        break;
                    default:
                    // code block
                }
            

        }
        else
            
                switch (this.props.details.cabin_class) {
                    case "Economy":
                        // this.setState({ cabin: 0 })

                        this.setState({ seats: JSON.parse(JSON.stringify(this.props.details.ReturnFlight.Seats[0])) })
                        this.setState({ initial: JSON.parse(JSON.stringify(this.props.details.ReturnFlight.Seats[0])) })

                        break;
                    case "Bussiness":
                        this.setState({ seats: JSON.parse(JSON.stringify(this.props.details.ReturnFlight.Seats[1])) })
                        this.setState({ initial: JSON.parse(JSON.stringify(this.props.details.ReturnFlight.Seats[1])) })
                        break;
                    case "First":
                        this.setState({ seats: JSON.parse(JSON.stringify(this.props.details.ReturnFlight.Seats[2])) })
                        this.setState({ initial: JSON.parse(JSON.stringify(this.props.details.ReturnFlight.Seats[2])) })
                        break;
                    default:
                    // code block
                }
            




    }




    handleChange = event => {
        // setState({ [event.target.id]: event.target.checked })
        if (event.target.checked) {
            this.setState({ choosenSeats: this.state.chosenSeats.push( parseInt(event.target.id) + 1 ) }, () => {
                this.updateChoice(event.target.id, 1)
                console.log("chosen Seats now: ", this.state.chosenSeats)
            })



        }
        else {


            this.setState({ chosenSeats: this.state.chosenSeats.filter((item) => item !== parseInt(event.target.id) + 1 ) },
                () => {
                    this.updateChoice(event.target.id, 0)
                    console.log("chosen Seats now: ", this.state.chosenSeats)
                })

        }
    };
    handleSubmit = () => {
        

    };





    render() {

        return (
            <div style={{ backgroundImage: `url(${ResultBack})`, height: "100vh", backgroundSize: "cover" }}>
                <div style={{ paddingTop: "100px" }}>
                    <Card className="paper" sx={{ minWidth: 275 }}>
                        <Typography style={{ marginTop: "10px", fontSize: "18" }} variant="h5" component="h2">
                            Please pick your desired seats 
                        </Typography>
                       
                        <hr />

                        <Typography style={{ marginTop: "10px", fontSize: "12" }} variant="h6" component="h2">
                            {this.props.details.cabin_class + " class"} 
                        </Typography>
                        <CardContent raised>
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
                        </CardContent>
                        <div style = {{  marginLeft: "35%", marginBottom: "15%"}}>
                        <Button style={{ background: "#10404c ", color: "wheat"  }}
                            variant="outlined" size="medium" color="primary"
                            onClick={() => { this.handleSubmit() }} >Confirm</Button>
                        </div>
                    </Card>
                </div>


            </div>

        );
    }


}
const mapStateToProps = (state) => ({
    details: state.DetailsReducer.details,
});



export default connect(mapStateToProps)(SeatPicker);