import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './ViewAllReservations.css'
import Header from './Header'
import Accordion from 'react-bootstrap/Accordion'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DeleteButton from './DeleteButton'
import ViewAllReservationsHook from './ViewAllReservationsHook';
import ViewSingleReservation from './ViewSingleReservation';
import Card from 'react-bootstrap/Card'


//BACKEND DEPENDENT COMMENTED => BACKEND


class ViewAllReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            userId : "61a518d86046ece4ba9ff27c"
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
        console.log(this.state.userId);
        const response = await axios.get('http://localhost:8080/usersflight/' + this.state.userId);
        const result = await response.data;
        this.setState({ reservations: result });
        console.log(this.state.reservations);
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
    src="https://s.marketwatch.com/public/resources/images/MW-HE536_airpla_ZDR_20190225131547.jpg" 
*/
    render() {
        const reservations = this.state.reservations;
        
       
        return (
            <div>
                <Header />
                <Card className="bg-dark text-white">
                    <Card.Img style={{maxHeight: "280px" , objectFit: "cover"}} src="https://www.kotak.com/content/dam/Kotak/digital-banking/insta-services/kaymall/1440X400-Flight.jpg" />
                    <Card.ImgOverlay style={{ fontFamily: "Arial" , paddingTop : "35px" , color :"#226AC7" , fontWeight :"bold" }}>
                        <Card.Title><h1 style ={{ fontWeight :"bolder" }}>Beef or Chicken</h1></Card.Title>
                        <Card.Text><h3 style ={{ fontStyle :"italic" }}>
                            <q>Your gateway to a hassle free flying experience!
                            </q>
                            </h3>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>

                {reservations.length === 0 ?(
                <div className="accordions" styles={{fontWeight:"bold", color:"#000000"}}>You don't have any reservations!</div>
                ):(
                <div className="accordions">
                    {this.state.reservations.map(r =>
                        <ViewSingleReservation reservation={r} key={r._id} />
                    )}
                </div>
                )
    }
            </div>
        );
    
}  
}
export default ViewAllReservations;
