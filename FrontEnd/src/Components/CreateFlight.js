import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

// number of Economy seats, number of Business class seats,
class CreateFlight extends Component {
    constructor() {
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
        };
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
    onChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name)
        console.log(e.target.value)
        console.log(this.To)
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            From: this.state.From,
            To: this.state.To,
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
    
        },  console.log(res))


                })
              
                //this.props.history.push('/');
            
            .catch(error => {
                console.log("idiot!");
                console.log(error.message);
            })
    };
    render() {
        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='From'
                            name='From'
                            //className='form-control'
                            value={this.state.From}
                            onChange={this.onChange}
                        />
                         
                    </div>
            
                   
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='To'
                            name='To'
                            // className='form-control'
                            value={this.state.To}
                            onChange={this.onChange}
                        />
                    </div>
                
           
                    <div className='form-group'>
                        <input
                            type='date'
                            placeholder='DepartureDate'
                            name='DepartureDate'
                            //  className='form-control'
                            value={this.state.DepartureDate}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='date'
                            placeholder='ArrivalDate'
                            name='ArrivalDate'
                            //  className='form-control'
                            value={this.state.ArrivalDate}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='number'
                            placeholder='EconomySeats'
                            name='EconomySeats'
                            //  className='form-control'
                            value={this.state.EconomySeats}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='number'
                            placeholder='BusinessSeats'
                            name='BusinessSeats'
                            //  className='form-control'
                            value={this.state.BusinessSeats}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='number'
                            placeholder='FirstSeats'
                            name='FirstSeats'
                            //  className='form-control'
                            value={this.state.FirstSeats}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='time'
                            placeholder='DepartureTime'
                            name='DepartureTime'
                            //  className='form-control'
                            value={this.state.DepartureTime}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='time'
                            placeholder='ArrivalTime'
                            name='ArrivalTime'
                            //  className='form-control'
                            value={this.state.ArrivalTime}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='FlightNumber'
                            name='FlightNumber'
                            //  className='form-control'
                            value={this.state.FlightNumber}
                            onChange={this.onChange}
                        />
                    </div>


                    <input
                        type="submit"
                    // className="btn btn-outline-warning btn-block mt-4"
                    />
                </form>
            </div>
        );
    }
}

export default CreateFlight;