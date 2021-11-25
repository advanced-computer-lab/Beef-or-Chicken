
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { fabClasses } from '@mui/material';
import { height } from '@mui/system';
import { useState } from "react";
import Header from './Header'
import axios from "axios";
import { Link } from 'react-scroll'

// import Flight from './Flight';
import './AllFlights.css'
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import FlightList from '../../Components/Admin/FlightList'
const useStyles = makeStyles((theme) => ({
    root: {

        //display: "flex",
        flexDirection: "column"

    },
    paper: {
        marginRight: theme.spacing(2),
        width: "100%",

        height: "200px",
        overflow: "hidden",
        // overflowy: "auto",
        overflow: 'auto'
    },

    table: {
        marginTop: "60px",
        width: "80px"
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
                window.scroll(0, 9950)
                //this.props.history.push('/');
            })
            .catch(error => {
                console.log("idiot!");
                console.log(error.message);
            })

        // window.scrollTo(0, document.body.scrollHeight);

    };

    const flights = result;
    return (

        <div className={classes.root}>
            <Header />
            <div className={classes.table}>
                <form className={classes.table} id='createFlightForm' class="row g-3" noValidate onSubmit={onSubmit}>
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
            <div style={{ position: "absolute", marginTop: "950px", width: "98%", marginLeft: "12px" }} >
                <GridContainer  >


                    <GridItem xs={12} style={{ marginTop: "" }}>
                        <FlightList flight={result} />
                    </GridItem>


                </GridContainer>
                <GridContainer alignItems="center" justify="center">
                    <GridItem xs style={{ marginBottom: "20px", marginTop: "20px" }}>

                    </GridItem>
                </GridContainer>
            </div>

        </div >
    )
}



export default SearchPage