import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './ViewAllReservations.css'
import Header from '../Admin/Header'
import Accordion from 'react-bootstrap/Accordion'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DeleteButton from './DeleteButton'
import ViewAllReservationsHook from './ViewAllReservationsHook';
import ViewSingleReservation from './ViewSingleReservation';



//BACKEND DEPENDENT COMMENTED => BACKEND


class ViewAllReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };

        //this.GetAllAsync();

    }
   /* async GetAllAsync() {
        const response = await axios.get('http://localhost:8080/allReservations');
        const result = await response.data;
        this.state.reservations = [result] ;
      }
    */

    async componentDidMount() {
        const response = await axios.get('http://localhost:8080/allReservations');
        const result = await response.data;
        this.setState({ reservations: result });
      }
      
  
    /*  
    componentDidMount() {
        let url =
            axios.get('http://localhost:8080/allReservations')
                 .then(res => {
                    this.setState({reservations: res.data})})
                 .catch(err => { console.log('Backend Error Occured When Getting All Reservations');
                })
    };
*/
    render() {
        const reservations = this.state.reservations;
        console.log("render be da");
       console.log(reservations);
       
       
        return (
            <div>
                <Header />

                <div className="accordions">
                    {this.state.reservations.map(r =>
                        <ViewSingleReservation reservation={r} key={r._id} />
                    )}
                </div>

          </div>
        );
    
}  
}
export default ViewAllReservations;
