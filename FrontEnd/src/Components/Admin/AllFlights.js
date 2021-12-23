import React, { Component } from 'react';
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Flight from './Flight';
import FlightList from './FlightList'
import './AllFlights.css'
import Header from './Header'
import { Typography } from '@material-ui/core';
class AllFlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []
        };
    }

    componentDidMount() {
        let url =
            axios
                .get('http://localhost:8080/allflights')
                .then(res => {
                    this.setState({
                        flights: res.data,

                    })
                    console.log(res.data)
                    console.log(this.state.flights)
                })

                .catch(err => {
                    console.log('Error');
                })
    };
    render() {
        const flights = this.state.flights;
        let AllFlightsList;


        return (
            <div>
                <Header />
                <Typography align="left" style={{ color: "#0C2647", marginTop: "30px", marginBottom: "-10px", marginLeft: "100px" }} variant="h2">  All Flights</Typography>
                <GridContainer >
                    {/* {flights.map((flight) => { */}
                    {/* return ( */}
                    <GridItem xs={13} style={{ margin: "10px"  }}>
                        <FlightList flight={flights} />
                    </GridItem>
                    {/* ); */}
                    {/* })} */}
                </GridContainer>
                <GridContainer alignItems="center" justify="center">
                    <GridItem xs style={{ marginBottom: "20px", marginTop: "20px" }}>

                    </GridItem>
                </GridContainer>
            </div>


        );
    }
}

export default AllFlights;
