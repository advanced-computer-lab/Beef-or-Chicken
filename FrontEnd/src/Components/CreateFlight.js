import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import { useAlert } from 'react-alert'
import OurAlert from "./OurAlert"
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

// number of Economy seats, number of Business class seats,
class CreateFlight extends Component {
   
    // let current = new Date();
    // let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    constructor() {
        var today = new Date(),
        date =  today.getFullYear()+ "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2)
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
            DateString : date,
            CurrentDeparture:'',
            open: false,
            fail:false,
            // flag : false,
            
        };
        console.log("date =>" , date)
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
    onChange2 = e =>{
        if(e.target.value<0){
            this.setState( { [e.target.name]:'0'} )
            
        }
        else{
            this.setState( { [e.target.name]:e.target.value} )
        }
    };
    onChange = e => {

        this.setState({
            [e.target.name]: e.target.value
          }, () => {
              console.log()
           console.log("edited target")
        //  console.log("from state: ", this.state.From)
        //  console.log("batates")
        //  console.log("departure date string" , this.state.DepartureDate)
        console.log("currentDeparture before editing: " ,this.state.CurrentDeparture)
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
        
        console.log("currentDeparture after editing: " ,this.state.CurrentDeparture)

        // console.log("target.name: ", e.target.name),

        
        // console.log("departureDate: ", this.state.DepartureDate),
        // console.log(this.state.CurrentDeparture),
          });

       
      

        // console.log("departure date", new Date(date.getFullYear(),date.getMonth(),date.getDate()-1))


       
    
   
        //this.state.From=e.target.value
      
        
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log("open: ",this.state.open)
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

        };
        console.log(data)
        // console.log(this.state.From)
        // console.log(this.state.To)
        // console.log(this.state.)
        // console.log(this.state.Cabin)
        // console.log(this.state.SeatsAvailable)
        // console.log(this.state.DepartureTime)
        // console.log(this.state.ArrivalTime)
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
                    
                    open:true,
                    fail: false
                }, 
                console.log(res))
                
                //
                
                //alert.show('Flight Added!')
            }  )

            //this.props.history.push('/');

            .catch(error => {
                this.setState({fail:true})
                // this.state.fail=true;
                console.log("idiot!");
                console.log(error.message);
            })
            
   
    };

    


    render() {
        return (
            <div>
                <Header />
                <form id='createFlightForm2' class="row g-3" noValidate onSubmit={this.onSubmit}>
                    <div class="col-md-6" className='form-group'>
                        <label class="form-label">From</label>
                        <input 
                            type='text'
                            class="form-control flex-fill"
                            placeholder='From'
                            name='From'
                            //className='form-control'
                            value={this.state.From}
                            onChange={this.onChange}
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
                            value={this.state.To}
                            onChange={this.onChange}
                        />
                    </div>


                    <div class="col-md-6" className='form-group form-inline'>
                        <label class="form-label">Departure Date</label>
                        <input
                          onKeyDown={(e) => e.preventDefault()}
                            type='date'
                            min = {this.state.DateString}
                            // min = "2021-11-07"
                            class="form-control flex-fill"
                            placeholder='DepartureDate'
                            name='DepartureDate'
                            //  className='form-control'
                            value={this.state.DepartureDate}
                            onChange={this.onChange}
                        />
                    </div>


                    <div class="col-md-6" className='form-group form-inline'>
                        <label class="form-label">Arrival Date</label>
                        <input
                        onKeyDown={(e) => e.preventDefault()}
                            type='date'
                            // min = {new Date(this.state.DepartureDate).getDate()-1 }
                            min = {this.state.DateString}
                            class="form-control flex-fill"
                            placeholder='ArrivalDate'
                            name='ArrivalDate'
                            //  className='form-control'
                            value={this.state.ArrivalDate}
                            onChange={this.onChange}
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
                            value={this.state.DepartureTime}
                            onChange={this.onChange}
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
                            value={this.state.ArrivalTime}
                            onChange={this.onChange}
                        />
                    </div>

                    <div class="col-md-4" className='form-group form-inline'>
                        <label class="form-label">Economy</label>
                        <input
                            
                            type='number'
                            
                            class="form-control flex-fill"
                            placeholder='Seats Available'
                            name='EconomySeats'
                            min = '0'
                            //  className='form-control'
                            value={this.state.EconomySeats}
                            onChange={this.onChange2}
                        />
                    </div>

                    <div class="col-md-4" className='form-group form-inline'>
                        <label class="form-label">Business</label>
                        <input
                            type='number'
                            min = '0'
                            class="form-control flex-fill"
                            placeholder='Seats Available'
                            name='BusinessSeats'
                            //  className='form-control'
                            value={this.state.BusinessSeats}
                            onChange={this.onChange2}
                        />
                    </div>

                    <div className='form-group form-inline'>
                        <label class="form-label">First Class</label>
                        <input
                            type='number'
                            min = '0'
                            class="form-control flex-fill"
                            placeholder='Seats Available'
                            name='FirstSeats'
                            //  className='form-control'
                            value={this.state.FirstSeats}
                            onChange={this.onChange2}
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
                            value={this.state.FlightNumber}
                            onChange={this.onChange}
                        />
                    </div>


                    <input
                        class="btn btn-primary"
                        type="submit"
                   
                    />
                    {/* <OurAlert flag={this.flag}></OurAlert> */}
                       
                      
                </form>
                <Box sx={{ width: '100%' }}>
      <Collapse in={this.state.open}>
        <Alert
        //   action={
            // <IconButton
            //   aria-label="close"
            //   color="inherit"
            //   size="small"
            //   onClick={ this.setAlertFalse()
            //  }
            // >
            //   <CloseIcon fontSize="inherit" />
            // </IconButton>
        //   }
          sx={{ mb: 2 }}
        >
            Flight Added!
        </Alert>
      </Collapse>
     
    </Box>
    <Box sx={{ width: '100%' }}>
      <Collapse in={this.state.fail}>
        <Alert severity="error"
        //   action={
            // <IconButton
            //   aria-label="close"
            //   color="inherit"
            //   size="small"
            //   onClick={ this.setAlertFalse()
            //  }
            // >
            //   <CloseIcon fontSize="inherit" />
            // </IconButton>
        //   }
          sx={{ mb: 2 }}
        >
            Please Enter All Details Correctly!
        </Alert>
      </Collapse>
     
    </Box>
  
            </div>
        );
    }
}

export default CreateFlight;