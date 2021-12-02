import flightsback from "../../images/Background3.jpeg";
import { Component } from 'react';
import * as React from 'react';
import './ViewUserInfo.css'
import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import TextField from '@mui/material/TextField';
// import UserInfo from './Flight/searchUser';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';





class viewUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            // id: this.props.details.UserID//added //RETURN AFTER TESTING
            id:"61a518d86046ece4ba9ff27c"
        };
        console.log("id", this.state.id)
        console.log("details", this.props.details)
    }

    

    componentDidMount() {
        let url =
            axios
                .get(`http://localhost:8080/searchUserByID/${this.state.id}`)
                .then(res => {
                    this.setState({
                        info: res.data,

                    })
                    console.log(res.data)
                    console.log(this.state.id)
                })

                .catch(err => {
                    console.log('Error');
                })




        
        // let url = 'http://localhost:8080/searchUser';

        // let body = {
        //     'FirstName': { FirstName },
        //     'LastName': { To },
        //     "DepartureDate": { DepartureDate },
        //     "ArrivalDate": { ArrivalDate },
        //     "FirstSeats": { FirstSeats },
        //     "BusinessSeats": { BusinessSeats },
        // }

        // console.log("url", url)
        // axios.patch(url, body)
        //     .then(async (response) => {
        //         console.log("response ===> ", response)
        //         history.push("/allFlights");
        //     })
        //     .catch((e) => {

        //         console.log("ana hena")
        //         console.log("error ===>", e);
        //     });







    };
    
    render() {
        // const info = this.state.info;
        // console.log("info ", info)
        // console.log("info: " + info);
        // let AllUserInfo;

        // console.log("looo", { AllUserInfo })


    

    return (

        <div style={{ backgroundImage: `url(${flightsback})`, height: "100vh", backgroundSize: "cover" }}>
            <div class= "padding">
                
           
<div class="rectangle">
<Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 5, width: '25ch' ,color: "black"},
      }}
      
      noValidate
      autoComplete="off"
    >
     
    


      <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">First Name</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='First Name'
                        name='First Name'
                        // className='form-control'
                        value={ this.state.info.firstName }
                        // onChange={event => { setFirstName(event.target.value) }}
                    />
                </div>



                <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">Last Name</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='Last Name'
                        name='Last Name'
                        // className='form-control'
                        value={this.state.info.lastName}
                        // onChange={event => { setLastName(event.target.value) }}
                    />
                </div>





                <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">Passport Number</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='XXXXXXXX'
                        name='Passport Number'
                        // className='form-control'
                        value={this.state.info.passportNumber}
                        // onChange={event => { setPassportNumber(event.target.value) }}
                    />
                </div>






                <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">Email</label>
                    <input
                        type='text'
                        class="form-control flex-fill"
                        placeholder='example@example.com'
                        name='Email'
                        // className='form-control'
                        value={this.state.info.email}
                        // onChange={event => { setEmail(event.target.value) }}
                    />
                </div>       

                  {/* <input
                    class="btn btn-primary"
                    type="submit"
                    value="edit"
                    
                // className="btn btn-outline-warning btn-block mt-4"
                />  */}

                <div class="padding">
                    </div>

                <Link to={  { pathname: `/UpdateUserInfo/${this.state.id}`  } }>
                                    {/* <IconButton  onClick={handleSubmit}>
                                        <EditIcon />
                                    </IconButton> */}

                    <input
                    class="btn btn-primary"
                    type="submit"
                    value="Edit"
                    
                // className="btn btn-outline-warning btn-block mt-4"
                />




                                </Link>

    </Box>
    </div>
        </div>
        </div>

    );
}
}
// export default viewUserInfo;
const mapStateToProps = (state) => ({
    details: state.DetailsReducer.details,
});



export default connect(mapStateToProps)(viewUserInfo);