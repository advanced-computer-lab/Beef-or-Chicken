import React, { Component } from 'react';

import axios from 'axios';


class CreateBook extends Component {
    constructor() {
        super();
        this.state = {
            From: '',
            To: '',
            FlightDate: '',
            Cabin: '',
            SeatsAvailable: 0,

        };
    }

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
            FlightDate: this.state.FlightDate,
            Cabin: this.state.Cabin,
            SeatsAvailable: this.state.SeatsAvailable,

        };
        console.log(this.state.From)
        console.log(this.state.To)
        console.log(this.state.FlightDate)
        console.log(this.state.Cabin)
        console.log(this.state.SeatsAvailable)
        let url = "http://localhost:8080/createFlight"

        axios
            .post(url, data)
            .then(res => {
                this.setState({
                    From: '',
                    To: '',
                    FlightDate: '',
                    Cabin: '',
                    SeatsAvailable: 0,

                })
                console.log("gamed louji!")
                //this.props.history.push('/');
            })
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
                            type='text'
                            placeholder='FlightDate'
                            name='FlightDate'
                            //  className='form-control'
                            value={this.state.FlightDate}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Cabin'
                            name='Cabin'
                            // className='form-control'
                            value={this.state.Cabin}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='SeatsAvailable'
                            name='SeatsAvailable'
                            //  className='form-control'
                            value={this.state.SeatsAvailable}
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

export default CreateBook;