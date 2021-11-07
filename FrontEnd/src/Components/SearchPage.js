
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { fabClasses } from '@mui/material';
import { height } from '@mui/system';
import { useState } from "react";
import axios from "axios";
// import Flight from './Flight';
import '../Components/AllFlights.css'
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import FlightList from '../Components/FlightList'
const useStyles = makeStyles((theme) => ({
    logo: {

        width: "80px",
        height: "80px",

    },
    paper: {
        marginRight: theme.spacing(2),
        width: "100%",

        height: "200px",
        overflow: "hidden",
        // overflowy: "auto",
        overflow: 'auto'
    },
    down: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "2%",
    },
    b: {
        alignItems: "Start"
    },
    title: {
        textAlign: "left",
        marginLeft: "9%"
    },
    navbar: {
        backgroundColor: "#E01A6C"
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "100px",
        paddingTop: "20px",
        paddingBottom: "10px"

    }
}));
const SearchPage = () => {
    const classes = useStyles();
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
    const [result, setResult] = useState([])


    const onSubmit = e => {
        e.preventDefault();

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

        console.log(body)
        let url = "http://localhost:8080/searchFlights"

        axios
            .post(url, body)
            .then(res => {
                console.log("respnose: ", res)
                console.log("gamed louji!")
                setResult(res.data)
                //this.props.history.push('/');
            })
            .catch(error => {
                console.log("idiot!");
                console.log(error.message);
            })


    };
    // function handleInputFromChange(event) {
    //     setFrom(event.target.value);
    // }
    // function handleInputToChange(event) {
    //     setTo(event.target.value);
    // }
    // function handleInputChange(event) {
    //     setInputValue(event.target.value);
    // }
    const flights = result;
    return (

        <div className={classes.root}>
            {/* <form noValidate onSubmit={onSubmit}>
                {/* onSubmit={this.onSubmit} */}
            {/* <div className='form-group'>
                    <input
                        type='text'
                        placeholder='From'
                        name='From'
                        className='form-control'
                        value={from}
                        onChange={event => { setFrom(event.target.value) }}

                    />
                </div>
                <br />

                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='To'
                        name='To'
                        className='form-control'
                        value={to}
                        onChange={event => { setTo(event.target.value) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='date'
                        placeholder='Date'
                        name='date'
                        className='form-control'
                        value={date}
                        onChange={event => { setDate(event.target.value) }}
                    />
                </div> */}

            {/* <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Describe this book'
                        name='description'
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='date'
                        placeholder='published_date'
                        name='published_date'
                        className='form-control'
                        value={this.state.published_date}
                        onChange={this.onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Publisher of this Book'
                        name='publisher'
                        className='form-control'
                        value={this.state.publisher}
                        onChange={this.onChange}
                    />
                </div> */}

            {/* <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
            </form> */}
            <form noValidate onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='From'
                        name='From'
                        //className='form-control'
                        value={From}
                        onChange={event => { setFrom(event.target.value.toLowerCase()) }}
                    />

                </div>


                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='To'
                        name='To'
                        // className='form-control'
                        value={To}
                        onChange={event => { setTo(event.target.value.toLowerCase()) }}
                    />
                </div>


                <div className='form-group'>
                    <input
                        type='date'
                        placeholder='DepartureDate'
                        name='DepartureDate'
                        //  className='form-control'
                        value={DepartureDate}
                        onChange={event => { setDepartureDate(event.target.value.toLowerCase()) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='date'
                        placeholder='ArrivalDate'
                        name='ArrivalDate'
                        //  className='form-control'
                        value={ArrivalDate}
                        onChange={event => { setArrivalDate(event.target.value.toLowerCase()) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='number'
                        placeholder='EconomySeats'
                        name='EconomySeats'
                        //  className='form-control'
                        value={EconomySeats}
                        onChange={event => { setEconomySeats(event.target.value) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='number'
                        placeholder='BusinessSeats'
                        name='BusinessSeats'
                        //  className='form-control'
                        value={BusinessSeats}
                        onChange={event => { setBusinessSeats(event.target.value) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='number'
                        placeholder='FirstSeats'
                        name='FirstSeats'
                        //  className='form-control'
                        value={FirstSeats}
                        onChange={event => { setFirstSeats(event.target.value) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='time'
                        placeholder='DepartureTime'
                        name='DepartureTime'
                        //  className='form-control'
                        value={DepartureTime}
                        onChange={event => { setDepartureTime(event.target.value) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='time'
                        placeholder='ArrivalTime'
                        name='ArrivalTime'
                        //  className='form-control'
                        value={ArrivalTime}
                        onChange={event => { setArrivalTime(event.target.value) }}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='FlightNumber'
                        name='FlightNumber'
                        //  className='form-control'
                        value={FlightNo}
                        onChange={event => { setFlightNo(event.target.value.toLowerCase()) }}
                    />
                </div>


                <input
                    type="submit"
                // className="btn btn-outline-warning btn-block mt-4"
                />
            </form>

            <div>
                <GridContainer >


                    <GridItem xs={12} style={{ margin: "90px" }}>
                        <FlightList flight={result} />
                    </GridItem>


                </GridContainer>
                <GridContainer alignItems="center" justify="center">
                    <GridItem xs style={{ marginBottom: "20px", marginTop: "20px" }}>

                    </GridItem>
                </GridContainer>
            </div>

        </div>
    )
}



export default SearchPage