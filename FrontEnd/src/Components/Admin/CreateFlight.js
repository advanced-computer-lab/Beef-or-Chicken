import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { useAlert } from 'react-alert'
import OurAlert from "./OurAlert"
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import ResultTest from "../../images/ResultTest.png";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';


// number of Economy seats, number of Business class seats,
class CreateFlight extends Component {

    // let current = new Date();
    // let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    constructor() {
        var today = new Date(),
            date = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2)
        super();
        this.state = {
            From: '',
            To: '',
            DepartureDate: '',
            ArrivalDate: '',
            EconomySeats: '',
            BusinessSeats: '',
            FirstSeats: '',
            DepartureTime: '',
            ArrivalTime: '',
            FlightNumber: '',
            CurrentDate: new Date(),
            DateString: date,
            CurrentDeparture: '',
            EconomyPrice:'',
            BusinessPrice:'',
            FirstPrice:'',
            EconomyBags:'',
            BusinessBags:'',
            FirstBags:'',
            open: false,
            fail: false,
            // flag : false,

        };
        console.log("date =>", date)
        // console.log("batates")
        //  console.log("date ==> ",this.state.CurrentDate)
        //  console.log(this.state.CurrentDate.getFullYear() + '-' + (this.state.CurrentDate.getMonth() + 1) + '-' + this.state.CurrentDate.getDate())
    }

    /////////////////////////
    // handleValidation() {
    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formIsValid = true;

    //     //Name
    //     if (!fields["From"]) {
    //       formIsValid = false;
    //       errors["name"] = "Cannot be empty";
    //     }

    //     if (typeof fields["name"] !== "undefined") {
    //       if (!fields["name"].match(/^[a-zA-Z]+$/)) {
    //         formIsValid = false;
    //         errors["name"] = "Only letters";
    //       }
    //     }

    //     //Email
    //     if (!fields["email"]) {
    //       formIsValid = false;
    //       errors["email"] = "Cannot be empty";
    //     }

    //     if (typeof fields["email"] !== "undefined") {
    //       let lastAtPos = fields["email"].lastIndexOf("@");
    //       let lastDotPos = fields["email"].lastIndexOf(".");

    //       if (
    //         !(
    //           lastAtPos < lastDotPos &&
    //           lastAtPos > 0 &&
    //           fields["email"].indexOf("@@") == -1 &&
    //           lastDotPos > 2 &&
    //           fields["email"].length - lastDotPos > 2
    //         )
    //       ) {
    //         formIsValid = false;
    //         errors["email"] = "Email is not valid";
    //       }
    //     }

    //     this.setState({ errors: errors });
    //     return formIsValid;
    //   }

    //   contactSubmit(e) {
    //     e.preventDefault();

    //     if (this.handleValidation()) {
    //       alert("Form submitted");
    //     } else {
    //       alert("Form has errors.");
    //     }
    //   }

    //   handleChange(field, e) {
    //     let fields = this.state.fields;
    //     fields[field] = e.target.value;
    //     this.setState({ fields });
    //   }


    //////////////////////////
    onChange2 = e => {
        if (e.target.value < 0) {
            this.setState({ [e.target.name]: '0' })

        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
    };
    onChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log("currentDeparture before editing: ", this.state.CurrentDeparture)
            // //setState
            // this.setState({CurrentDeparture:(new Date(  this.state.DepartureDate.substring(0,4) , 
            // this.state.DepartureDate.substring(5,7),this.state.DepartureDate.substring(8,10)))})

            // this.setState({CurrentDeparture:new Date( this.state.CurrentDeparture.getFullYear(), this.state.CurrentDeparture.getMonth()-1, this.state.CurrentDeparture.getDate()-1) })
            // this.setState({CurrentDeparture: this.state.CurrentDeparture.getFullYear()+ "-" + ("0" + ( this.state.CurrentDeparture.getMonth() + 1)).slice(-2) + "-" + ("0" +  this.state.CurrentDeparture.getDate()).slice(-2) })

            //using this.state
            // this.state.CurrentDeparture =  (new Date(  this.state.DepartureDate.substring(0,4) , 
            // this.state.DepartureDate.substring(5,7),this.state.DepartureDate.substring(8,10)))

            // this.state.CurrentDeparture = new Date( this.state.CurrentDeparture.getFullYear(), this.state.CurrentDeparture.getMonth()-1, this.state.CurrentDeparture.getDate()-1)

            //this.state.CurrentDeparture =   this.state.CurrentDeparture.getFullYear()+ "-" + ("0" + ( this.state.CurrentDeparture.getMonth() + 1)).slice(-2) + "-" + ("0" +  this.state.CurrentDeparture.getDate()).slice(-2)

            console.log("currentDeparture after editing: ", this.state.CurrentDeparture)

        });

        //this.state.From=e.target.value
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            From: this.state.From.toUpperCase(),
            To: this.state.To.toUpperCase(),
            DepartureDate: this.state.DepartureDate,
            ArrivalDate: this.state.ArrivalDate,
            EconomySeats: this.state.EconomySeats,
            BusinessSeats: this.state.BusinessSeats,
            FirstSeats: this.state.FirstSeats,
            DepartureTime: this.state.DepartureTime,
            ArrivalTime: this.state.ArrivalTime,
            FlightNumber: this.state.FlightNumber,
            EconomyPrice: this.state.EconomyPrice,
            BusinessPrice: this.state.BusinessPrice,
            FirstPrice: this.state.FirstPrice,

            EconomyBags: this.state.EconomyBags,
            BusinessBags: this.state.BusinessBags,
            FirstBags: this.state.FirstBags,


        };
        console.log(data)
        let url = "http://localhost:8080/createFlight"

        axios
            .post(url, data)
            .then(res => {
                this.setState({
                    From: '',
                    To: '',
                    DepartureDate: '',
                    ArrivalDate: '',
                    EconomySeats: '',
                    BusinessSeats: '',
                    FirstSeats: '',
                    DepartureTime: '',
                    ArrivalTime: '',
                    FlightNumber: '',
                    EconomyPrice: '',
                    BusinessPrice: '',
                    FirstPrice: '',
                    EconomyBags: '',
                    BusinessBags: '',
                    FirstBags: '',
                    
                    open: true,
                    fail: false
                },
                    console.log(res))

                //

                //alert.show('Flight Added!')
            })

            //this.props.history.push('/');

            .catch(error => {
                this.setState({ fail: true })
                // this.state.fail=true;
                console.log("idiot!");
                console.log(error.message);
            })


    };


    render() {
        return (
            <div style={{ backgroundImage: `url(${ResultTest})`, minHeight: "1220px", backgroundSize: "cover", backgroundRepeat:"repeat-y" }}>
                <Header />
                <div >
                <Box sx={{ width: '100%' }}>
                    <Collapse in={this.state.open}>
                        <Alert sx={{ mb: 2 }}>
                            Flight Added!
                        </Alert>
                    </Collapse>

                </Box>
                <Box sx={{ width: '100%' }}>
                    <Collapse in={this.state.fail}>
                        <Alert severity="error"
                            sx={{ mb: 2 }}
                        >
                            Please Enter All Details Correctly!
                        </Alert>
                    </Collapse>

                </Box>
                    <form id='createFlightForm2' class="row g-3" noValidate onSubmit={this.onSubmit} >
                        
                        <h3>Add Flight <FlightTakeoffIcon /></h3>
                        <div className='form-group row' style = {{ paddingTop:"5px" }}>
                            <FloatingLabel label="Flight Number">
                                <input
                                type='text'
                                class="form-control flex-fill"
                                name='FlightNumber'
                                //  className='form-control'
                                value={this.state.FlightNumber}
                                onChange={this.onChange}
                            />
                            </FloatingLabel>  
                    </div>
                    <bl/>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-4 form-group">

                            <FloatingLabel label="From" >
                            <input
                                type='text'
                                class="form-control flex-fill"
                                name='From'
                                //className='form-control'
                                value={this.state.From}
                                onChange={this.onChange}
                            />
                            </FloatingLabel>
                        </div>

                        <div className="col-md-6 col-12 mb-4 form-group form-inline">
                            {/* <div class="col-md-6" className='form-group form-inline'>*/}
                            <FloatingLabel label="To" >
                            <input
                                type='text'
                                class="form-control flex-fill"
                                name='To'
                                // className='form-control'
                                value={this.state.To}
                                onChange={this.onChange}
                            />
                            </FloatingLabel>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-12 mb-4 form-group form-group form-inline">
                        <FloatingLabel label="Departure Date" >
                        <input
                            onKeyDown={(e) => e.preventDefault()}
                            type='date'
                            min={this.state.DateString}
                            // min = "2021-11-07"
                            class="form-control flex-fill"
                            placeholder='DepartureDate'
                            name='DepartureDate'
                            //  className='form-control'
                            value={this.state.DepartureDate}
                            onChange={this.onChange}
                        />
                        </FloatingLabel>
                    </div>

                    <div className="col-md-6 col-12 mb-4 form-group form-inline">

                    {/*<div class="col-md-6" className='form-group form-inline'>*/}
                    <FloatingLabel label="Arrival Date" >
                        <input
                            onKeyDown={(e) => e.preventDefault()}
                            type='date'
                            // min = {new Date(this.state.DepartureDate).getDate()-1 }
                            min={this.state.DepartureDate}
                            class="form-control flex-fill"
                            placeholder='ArrivalDate'
                            name='ArrivalDate'
                            //  className='form-control'
                            value={this.state.ArrivalDate}
                            onChange={this.onChange}
                        />
                        </FloatingLabel>
                    </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-12 mb-4 form-group form-group form-inline">
                        <FloatingLabel label="Departure Time" >
                        <input
                            type='time'
                            class="form-control flex-fill"
                            placeholder='DepartureTime'
                            name='DepartureTime'
                            //  className='form-control'
                            value={this.state.DepartureTime}
                            onChange={this.onChange}
                        />
                        </FloatingLabel>
                    </div>



                    <div className="col-md-6 col-12 mb-4 form-group form-inline">
                    <FloatingLabel label="Arrival Time" >
                        <input
                            type='time'
                            class="form-control flex-fill"
                            placeholder='ArrivalTime'
                            name='ArrivalTime'
                            //  className='form-control'
                            value={this.state.ArrivalTime}
                            onChange={this.onChange}
                        />
                        </FloatingLabel>
                    </div>
                        </div>
                        <hr />
                        <h5>Economy Class</h5>
                        <bl />
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Seats Available" >
                                    <input
                                        type='number'
                                        class="form-control flex-fill"
                                        name='EconomySeats'
                                        min='0'
                                        //  className='form-control'
                                        value={this.state.EconomySeats}
                                        onChange={this.onChange2}
                                    />                        </FloatingLabel>

                            </div>
                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Price" >

                                    <input
                                        type='number'
                                        class="form-control flex-fill"
                                        name='EconomyPrice'
                                        min='0'
                                        //  className='form-control'
                                        value={this.state.EconomyPrice}
                                        onChange={this.onChange2}
                                    />
                                </FloatingLabel>

                            </div>

                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Baggage Allowance" >

                                    <input
                                        type='number'
                                        class="form-control flex-fill"
                                        name='EconomyBags'
                                        min='0'
                                        //  className='form-control'
                                        value={this.state.EconomyBags}
                                        onChange={this.onChange2}
                                    />
                                </FloatingLabel>
                            </div>


                    </div>

                    <hr />
                        <h5>Business Class</h5>
                        <bl/>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Seats Available" >
                                    <input
                                        type='number'
                                        min='0'
                                        class="form-control flex-fill"
                                        name='BusinessSeats'
                                        //  className='form-control'
                                        value={this.state.BusinessSeats}
                                        onChange={this.onChange2}
                                    />
                                </FloatingLabel>
                            </div>
                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Price" >
                                    <input
                                        type='number'
                                        min='0'
                                        class="form-control flex-fill"
                                        name='BusinessPrice'
                                        //  className='form-control'
                                        value={this.state.BusinessPrice}
                                        onChange={this.onChange2}
                                    />
                                      </FloatingLabel>
                            </div>
                                    <div className="col-md-4 mb-4">
                                        <FloatingLabel label="Baggage Allowance" >
                                        <input
                                            type='number'
                                            class="form-control flex-fill"
                                            name='BusinessBags'
                                            min='0'
                                            //  className='form-control'
                                            value={this.state.BusinessBags}
                                            onChange={this.onChange2}
                                        />
                                          </FloatingLabel>
                                          </div>
                        </div>
                        <hr />
                        <h5>First Class</h5>
                        <bl/>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Seats Available" >
                        <input
                            type='number'
                            min='0'
                            class="form-control flex-fill"
                            name='FirstSeats'
                            //  className='form-control'
                            value={this.state.FirstSeats}
                            onChange={this.onChange2}
                        />
                        </FloatingLabel>
                        </div>
                            <div className="col-md-4 mb-4">
                                <FloatingLabel label="Price" >
                        <input
                            type='number'
                            min='0'
                            class="form-control flex-fill"
                            name='FirstPrice'
                            //  className='form-control'
                            value={this.state.FirstPrice}
                            onChange={this.onChange2}
                            />
                            </FloatingLabel>
                            </div>
                          <div className="col-md-4 mb-4">
                                <FloatingLabel label="Bagagge Allowance">

                        <input
                            type='number'
                            class="form-control flex-fill"
                            name='FirstBags'
                            min='0'
                            //  className='form-control'
                            value={this.state.FirstBags}
                            onChange={this.onChange2}
                            />
                            </FloatingLabel>
                            </div>
                    </div>
                    <input
                        class="btn btn-primary"
                        type="submit"
                    />
                    <hl/>
                    {/* <OurAlert flag={this.flag}></OurAlert> */}

                </form>
                </div>
                </div>
        );
    }
}

export default CreateFlight;