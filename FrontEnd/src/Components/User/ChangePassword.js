import flightsback from "../../images/Background3.jpeg";
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './ViewUserInfo.css'
// import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useState , useEffect} from 'react';
import Button from '@material-ui/core/Button';
import SideBar from './SideBar'
import { Link } from 'react-router-dom';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useHistory } from "react-router-dom";


const mapStateToProps = (state) => {
    //console.log(state.DetailsReducer.details.destination)
    return {
        details: state.DetailsReducer.details,
        
    };
};


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


function ChangePassword(userr) {
    // console.log(props.details)
    const user = userr
    console.log("USER HENNNAA",user)


    
    let history = useHistory();
    const [CurrentPassword, setCurrentPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const onSubmit = (event) => {
      //  console.log("abl el url")

        let url = `http://localhost:8080/searchUserByID/${user.id}`;

        //console.log("b3d el url")
       // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console  




        let body = {
            'username':{this:user.username},
            'password': { CurrentPassword },
            

        }


        console.log("body: 7AGA MOMYAZA ", body)
        //let url = "http://localhost:8080/searchUser"

        axios.get(url)
        .then(async (response) => {




            if(response.password==CurrentPassword){
                console.log("gowa le if")
            console.log("abl el url")
            let url = `http://localhost:8080/changePassword/${user.id}`;
            console.log("b3d el url")

            let body = {
                
                'password': { newPassword },
            }


            axios.patch(url, body)
            .then(async (response) => {
                console.log("Password Changed Successfully!")
            alert("Password Changed Successfully!")

            })

            .catch((e) => {
                console.log("Password doesn't match minimum requirments!")
                alert("Password doesn't match minimum requirments!")
                console.log("ana hena")
                console.log("error ===>", e);
            });
        }
            // history.push("/usersflight");
        })
        .catch((e) => {
            console.log("wrong password!")
            alert("wrong password!")
            console.log("ana hena")
            console.log("error ===>", e);
        });

    };





    // console.log("User: ", user)
    // console.log("userID: ", user.id)
    // const [open, setOpen] = React.useState(false);
    // const [info, setInfo] =React.useState({firstName:"",lastName:"",email:"",passportNumber:""});
    // // let history = useHistory();
    
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [passportNumber, setPassportNumber] = useState("")
    // const [email, setEmail] = useState("")


    

    // useEffect(() => {
        
    //     axios.get('http://localhost:8080/searchUserByID/'+ user.id ).then(
    //         res => {
    //             console.log(res.data )
    //             setFirstName(res.data.firstName)
    //             setLastName(res.data.lastName)
    //             setEmail(res.data.email)
    //             setPassportNumber(res.data.passportNumber)


    //             console.log(firstName)
    //         })

    //         .catch(err => {
    //             console.log('Error');
    //         })
                
            
    //     }
    //         , []);


            

    // const onSubmit = e => {   
    //     let url = `http://localhost:8080/user/${user.id}`;

    //     let body = {
    //         "firstName": { firstName },
    //         "lastName": { lastName },
    //         "passportNumber": { passportNumber },
    //         "email": { email }
    //     }

    //     axios.patch(url, body)
    //         .then(async (response) => {
    //             alert("Info Updated Successfully!")
    //             // history.push("/usersflight");
    //         })
    //         .catch((e) => {
                
    //             console.log("ana hena")
    //             console.log("error ===>", e);
    //         });
    //     // window.location.reload(false);

    // };

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
     
    <h3 class="colorHeader">
    <VpnKeyIcon></VpnKeyIcon> Change My Password      
    </h3>


      <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">Current Password</label>
                    <input
                        type='password'
                        class="form-control flex-fill"
                        name='Current Password'
                        // className='form-control'
                        
                        onChange={event => { setCurrentPassword(event.target.value) }}
                    />
                </div>



                <div class="col-md-6" className='form-group form-inline'>
                    <label class="form-label">New Password</label>
                    <input
                        type='password'
                        class="form-control flex-fill"
                        name='new password'
                        // className='form-control'
                        onChange={event => { setnewPassword(event.target.value)}}
                    />
                </div>



                <div class="padding">
                    </div>
                    <div class="changepassword">

                  <input onClick={() => {onSubmit() }}
                    class="btn btn-primary"
                    type="submit"
                    variant="outlined"
                   size="medium"
                    // color="blue"
                    class="btn btn-primary"
                    type="submit"
                    value="change"
                // className="btn btn-outline-warning btn-block mt-4"
                    /> 
                    </div>

                    {/* <div class="rectangle3">
                    <Link to={  { pathname: `/ViewUserInfo/` } }>
                        
                     
                    <input
                    class="btn btn-primary"
                    type="submit"
                    value="Back"
                    
                     />   
                
                    </Link> */}

                {/* <button class="rectangle2"
                onClick={() => {
                    this.props.history.goBack();
                }}
            >
                Back
            </button> */}

                    
                  {/* </div> */}

                  {/* <div class= "rectangle3">
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
                     </div> */}



                

    </Box>
    </div>
        </div>
        </div>

    );
}

export default ChangePassword;