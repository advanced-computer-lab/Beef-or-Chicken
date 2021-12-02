import flightsback from "../../images/Background3.jpeg";
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SideBar from './SideBar'



const useStyles = makeStyles((theme) => ({
    text: {

        flex: 1,
        display: "flex",
        marginTop: "-30px",
        justifyContent: "center",
        color:"black",
    },

    rectangle:{
        // padding: "30%",
        // width: "30%",
        // height: "50%",
        // justifyContent: "center",
        // background:"#FFFFFF",

        padding: theme.spacing(3, 2),
        marginLeft:"33%",
        height: "75%",
        width: "30%",
        textAlign: 'center',
        borderRadius: "30px",
        paddingTop: 65,
        backgroundColor: "#f5f5f5",
        boxShadow: '0px 4px 8px 0 rgba(0.25, 0.25, 0.25, 0.25)',


    },



    padding:{

        paddingTop:"10%",
    }
}));


function UpdateUserInfo(prop) {

    const user = prop.match.params
    console.log("User: ", user)
    console.log("userID: ", user.id)
    const [open, setOpen] = React.useState(false);
    // let history = useHistory();


    const onSubmit = e => {   
        console.log("USER AT OM SUBMIIITTTTT ", user)
        let url = `http://localhost:8080/user/${user.id}`;

        let body = {
            "firstName": { firstName },
            "lastName": { lastName },
            "passportNumber": { passportNumber },
            "email": { email }
        }

        console.log("url", url)
        axios.patch(url, body)
            .then(async (response) => {
                console.log("response ===> ", response)
                // history.push("/usersflight");
            })
            .catch((e) => {

                console.log("ana hena")
                console.log("error ===>", e);
            });
        // window.location.reload(false);

    };

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [passportNumber, setPassportNumber] = useState("")
    const [email, setEmail] = useState("")


    
    const classes = useStyles()


    // <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&family=Inter:wght@100;200;300&family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet"></link>


    return (

        <div style={{ backgroundImage: `url(${flightsback})`, height: "100vh", backgroundSize: "cover" }}>
                <SideBar />
            <div className={classes.padding}>
           
<div className={classes.rectangle}>
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
                        value={firstName}
                        onChange={event => { setFirstName(event.target.value) }}
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
                        value={lastName}
                        onChange={event => { setLastName(event.target.value) }}
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
                        value={passportNumber}
                        onChange={event => { setPassportNumber(event.target.value) }}
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
                        value={email}
                        onChange={event => { setEmail(event.target.value) }}
                    />
                </div>    

                <div class="padding">
                    </div>

                  <input   onClick={() => {onSubmit() }}
                    class="btn btn-primary"
                    type="submit"
                    variant="outlined"
                   size="medium"
                    // color="blue"
                    class="btn btn-primary"
                    type="submit"
                    value="Update"
                // className="btn btn-outline-warning btn-block mt-4"
                    /> 



                

    </Box>
    </div>
        </div>
        </div>

    );
}

export default UpdateUserInfo;