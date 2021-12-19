
import { makeStyles } from "@material-ui/core/styles";
import ResultBack from "../../images/Results2.png";

import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, CardContent } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import PersonIcon from '@mui/icons-material/Person';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const steps = ['', ''];

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: "10px",
        borderRadius: "10px",
        width: "40%",
        height: "550px",
        marginLeft: "30%",

    },
    title: {
        fontSize: 22,
    },

    text: {
        marginLeft: "11%",
        marginTop: "-65%",
        width: "100%",
        //fontSize: theme.typography.pxToRem(14),
        height: "30%",

    },

}));

const mapStateToProps = (state) => {
    return {
        UserID: state.DetailsReducer.details.UserID,
        //token : state.DetailsReducer.details.token,
    };
};

const mapDispatchToState = (dispatch) => {
    return {
        setUserID: (UserID) => {
            dispatch({ type: 'setUserID', payload: UserID });
        },
/*setUserToken: (token) => {
            dispatch({ type: 'setUserToken', payload: token });
        },  */
    };
};

export default connect(mapStateToProps, mapDispatchToState)(Register);


function Register({ details , setUserID}) {
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&family=Inter:wght@100;200;300&family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet"></link>
    const classes = useStyles();
    
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [address, setAddress] = useState("");
    const [telephone1, setTelephone1] = useState("");
    const [telephone2, setTelephone2] = useState("");

    const [validated, setValidated] = useState(false);

    const [isError, setIsError] = useState({ email: '', password: ''});
    
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
  

    const handleNext = () => {
        
        let body = {
            'username': username
        }
        let url = "http://localhost:8080/CheckUsername"
        axios
            .post(url, body)
            .then(res => {
               console.log(res.data.message)
               if(res.data.message === "not"){

                let newSkipped = skipped;
                if (isStepSkipped(activeStep)) {
                  newSkipped = new Set(newSkipped.values());
                  newSkipped.delete(activeStep);
                }
            
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setSkipped(newSkipped);

               }
               else{
                   
               }
               //not taken
            })
            .catch(error => {
                console.log(error.message);
            })

    };


  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  

    
    const regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        )
                
        const formValChange = e => {
            e.preventDefault();
            const { name, value } = e.target;
            
            switch (name) {
                /*
                case "username":
                    isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                    break;
                    */
                   case "email":
                       console.log(isError.email);
                       isError.email = regExp.test(value)? "": "Email address is invalid";
                       break;
                       case "password":
                           isError.password =
                           value.length < 6 ? "Atleast 6 characaters required" : "";
                           break;
                           default:
                               break;
                            }
                            
                            setIsError({
                                [name]: value
                            })

        console.log(isError.email)
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    
    let body = {
        'username': username,
        'email':  email ,
        'password':  password ,
        'firstName' : firstName,
        'lastName':lastName,
        'passportNumber':  passportNumber,
        'address' : address,
        'telephone1': telephone1,   
        'telephone2': telephone2

    }

    console.log("body: ", body)
    let url = "http://localhost:8080/register"
    axios
        .post(url, body)
        .then(res => {
         /*   if (res.data[0].type == 1) {
                details.UserID = res.data[0]._id
                //details.token = 
                history.goBack();
            }
            else {
                console.log("not user")
            }
            */
        })
        .catch(error => {
            console.log(error.message);
        })
 };  


    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        {
          code: 'AE',
          label: 'United Arab Emirates',
          phone: '971',
        },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        {
          code: 'AG',
          label: 'Antigua and Barbuda',
          phone: '1-268',
        },
        { code: 'AI', label: 'Anguilla', phone: '1-264' },
        { code: 'AL', label: 'Albania', phone: '355' },
        { code: 'AM', label: 'Armenia', phone: '374' },
        { code: 'AO', label: 'Angola', phone: '244' },
        { code: 'AQ', label: 'Antarctica', phone: '672' },
        { code: 'AR', label: 'Argentina', phone: '54' },
        { code: 'AS', label: 'American Samoa', phone: '1-684' },
        { code: 'AT', label: 'Austria', phone: '43' },
        {
          code: 'AU',
          label: 'Australia',
          phone: '61',
          suggested: true,
        },
        { code: 'AW', label: 'Aruba', phone: '297' },
        { code: 'AX', label: 'Alland Islands', phone: '358' },
        { code: 'AZ', label: 'Azerbaijan', phone: '994' },
        {
          code: 'BA',
          label: 'Bosnia and Herzegovina',
          phone: '387',
        },
        { code: 'BB', label: 'Barbados', phone: '1-246' },
        { code: 'BD', label: 'Bangladesh', phone: '880' },
        { code: 'BE', label: 'Belgium', phone: '32' },
        { code: 'BF', label: 'Burkina Faso', phone: '226' },
        { code: 'BG', label: 'Bulgaria', phone: '359' },
        { code: 'BH', label: 'Bahrain', phone: '973' },
        { code: 'BI', label: 'Burundi', phone: '257' },
        { code: 'BJ', label: 'Benin', phone: '229' },
        { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
        { code: 'BM', label: 'Bermuda', phone: '1-441' },
        { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
        { code: 'BO', label: 'Bolivia', phone: '591' },
        { code: 'BR', label: 'Brazil', phone: '55' },
        { code: 'BS', label: 'Bahamas', phone: '1-242' },
        { code: 'BT', label: 'Bhutan', phone: '975' },
        { code: 'BV', label: 'Bouvet Island', phone: '47' },
        { code: 'BW', label: 'Botswana', phone: '267' },
        { code: 'BY', label: 'Belarus', phone: '375' },
        { code: 'BZ', label: 'Belize', phone: '501' },
        {
          code: 'CA',
          label: 'Canada',
          phone: '1',
          suggested: true,
        },
        {
          code: 'CC',
          label: 'Cocos (Keeling) Islands',
          phone: '61',
        },
        {
          code: 'CD',
          label: 'Congo, Democratic Republic of the',
          phone: '243',
        },
        {
          code: 'CF',
          label: 'Central African Republic',
          phone: '236',
        },
        {
          code: 'CG',
          label: 'Congo, Republic of the',
          phone: '242',
        },
        { code: 'CH', label: 'Switzerland', phone: '41' },
        { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
        { code: 'CK', label: 'Cook Islands', phone: '682' },
        { code: 'CL', label: 'Chile', phone: '56' },
        { code: 'CM', label: 'Cameroon', phone: '237' },
        { code: 'CN', label: 'China', phone: '86' },
        { code: 'CO', label: 'Colombia', phone: '57' },
        { code: 'CR', label: 'Costa Rica', phone: '506' },
        { code: 'CU', label: 'Cuba', phone: '53' },
        { code: 'CV', label: 'Cape Verde', phone: '238' },
        { code: 'CW', label: 'Curacao', phone: '599' },
        { code: 'CX', label: 'Christmas Island', phone: '61' },
        { code: 'CY', label: 'Cyprus', phone: '357' },
        { code: 'CZ', label: 'Czech Republic', phone: '420' },
        {
          code: 'DE',
          label: 'Germany',
          phone: '49',
          suggested: true,
        },
        { code: 'DJ', label: 'Djibouti', phone: '253' },
        { code: 'DK', label: 'Denmark', phone: '45' },
        { code: 'DM', label: 'Dominica', phone: '1-767' },
        {
          code: 'DO',
          label: 'Dominican Republic',
          phone: '1-809',
        },
        { code: 'DZ', label: 'Algeria', phone: '213' },
        { code: 'EC', label: 'Ecuador', phone: '593' },
        { code: 'EE', label: 'Estonia', phone: '372' },
        { code: 'EG', label: 'Egypt', phone: '20' , suggested: true, },
        { code: 'EH', label: 'Western Sahara', phone: '212' },
        { code: 'ER', label: 'Eritrea', phone: '291' },
        { code: 'ES', label: 'Spain', phone: '34' },
        { code: 'ET', label: 'Ethiopia', phone: '251' },
        { code: 'FI', label: 'Finland', phone: '358' },
        { code: 'FJ', label: 'Fiji', phone: '679' },
        {
          code: 'FK',
          label: 'Falkland Islands (Malvinas)',
          phone: '500',
        },
        {
          code: 'FM',
          label: 'Micronesia, Federated States of',
          phone: '691',
        },
        { code: 'FO', label: 'Faroe Islands', phone: '298' },
        {
          code: 'FR',
          label: 'France',
          phone: '33',
          suggested: true,
        },
        { code: 'GA', label: 'Gabon', phone: '241' },
        { code: 'GB', label: 'United Kingdom', phone: '44' },
        { code: 'GD', label: 'Grenada', phone: '1-473' },
        { code: 'GE', label: 'Georgia', phone: '995' },
        { code: 'GF', label: 'French Guiana', phone: '594' },
        { code: 'GG', label: 'Guernsey', phone: '44' },
        { code: 'GH', label: 'Ghana', phone: '233' },
        { code: 'GI', label: 'Gibraltar', phone: '350' },
        { code: 'GL', label: 'Greenland', phone: '299' },
        { code: 'GM', label: 'Gambia', phone: '220' },
        { code: 'GN', label: 'Guinea', phone: '224' },
        { code: 'GP', label: 'Guadeloupe', phone: '590' },
        { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
        { code: 'GR', label: 'Greece', phone: '30' },
        {
          code: 'GS',
          label: 'South Georgia and the South Sandwich Islands',
          phone: '500',
        },
        { code: 'GT', label: 'Guatemala', phone: '502' },
        { code: 'GU', label: 'Guam', phone: '1-671' },
        { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
        { code: 'GY', label: 'Guyana', phone: '592' },
        { code: 'HK', label: 'Hong Kong', phone: '852' },
        {
          code: 'HM',
          label: 'Heard Island and McDonald Islands',
          phone: '672',
        },
        { code: 'HN', label: 'Honduras', phone: '504' },
        { code: 'HR', label: 'Croatia', phone: '385' },
        { code: 'HT', label: 'Haiti', phone: '509' },
        { code: 'HU', label: 'Hungary', phone: '36' },
        { code: 'ID', label: 'Indonesia', phone: '62' },
        { code: 'IE', label: 'Ireland', phone: '353' },
        { code: 'IM', label: 'Isle of Man', phone: '44' },
        { code: 'IN', label: 'India', phone: '91' },
        {
          code: 'IO',
          label: 'British Indian Ocean Territory',
          phone: '246',
        },
        { code: 'IQ', label: 'Iraq', phone: '964' },
        {
          code: 'IR',
          label: 'Iran, Islamic Republic of',
          phone: '98',
        },
        { code: 'IS', label: 'Iceland', phone: '354' },
        { code: 'IT', label: 'Italy', phone: '39' },
        { code: 'JE', label: 'Jersey', phone: '44' },
        { code: 'JM', label: 'Jamaica', phone: '1-876' },
        { code: 'JO', label: 'Jordan', phone: '962' },
        {
          code: 'JP',
          label: 'Japan',
          phone: '81',
          suggested: true,
        },
        { code: 'KE', label: 'Kenya', phone: '254' },
        { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
        { code: 'KH', label: 'Cambodia', phone: '855' },
        { code: 'KI', label: 'Kiribati', phone: '686' },
        { code: 'KM', label: 'Comoros', phone: '269' },
        {
          code: 'KN',
          label: 'Saint Kitts and Nevis',
          phone: '1-869',
        },
        {
          code: 'KP',
          label: "Korea, Democratic People's Republic of",
          phone: '850',
        },
        { code: 'KR', label: 'Korea, Republic of', phone: '82' },
        { code: 'KW', label: 'Kuwait', phone: '965' },
        { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
        { code: 'KZ', label: 'Kazakhstan', phone: '7' },
        {
          code: 'LA',
          label: "Lao People's Democratic Republic",
          phone: '856',
        },
        { code: 'LB', label: 'Lebanon', phone: '961' },
        { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
        { code: 'LI', label: 'Liechtenstein', phone: '423' },
        { code: 'LK', label: 'Sri Lanka', phone: '94' },
        { code: 'LR', label: 'Liberia', phone: '231' },
        { code: 'LS', label: 'Lesotho', phone: '266' },
        { code: 'LT', label: 'Lithuania', phone: '370' },
        { code: 'LU', label: 'Luxembourg', phone: '352' },
        { code: 'LV', label: 'Latvia', phone: '371' },
        { code: 'LY', label: 'Libya', phone: '218' },
        { code: 'MA', label: 'Morocco', phone: '212' },
        { code: 'MC', label: 'Monaco', phone: '377' },
        {
          code: 'MD',
          label: 'Moldova, Republic of',
          phone: '373',
        },
        { code: 'ME', label: 'Montenegro', phone: '382' },
        {
          code: 'MF',
          label: 'Saint Martin (French part)',
          phone: '590',
        },
        { code: 'MG', label: 'Madagascar', phone: '261' },
        { code: 'MH', label: 'Marshall Islands', phone: '692' },
        {
          code: 'MK',
          label: 'Macedonia, the Former Yugoslav Republic of',
          phone: '389',
        },
        { code: 'ML', label: 'Mali', phone: '223' },
        { code: 'MM', label: 'Myanmar', phone: '95' },
        { code: 'MN', label: 'Mongolia', phone: '976' },
        { code: 'MO', label: 'Macao', phone: '853' },
        {
          code: 'MP',
          label: 'Northern Mariana Islands',
          phone: '1-670',
        },
        { code: 'MQ', label: 'Martinique', phone: '596' },
        { code: 'MR', label: 'Mauritania', phone: '222' },
        { code: 'MS', label: 'Montserrat', phone: '1-664' },
        { code: 'MT', label: 'Malta', phone: '356' },
        { code: 'MU', label: 'Mauritius', phone: '230' },
        { code: 'MV', label: 'Maldives', phone: '960' },
        { code: 'MW', label: 'Malawi', phone: '265' },
        { code: 'MX', label: 'Mexico', phone: '52' },
        { code: 'MY', label: 'Malaysia', phone: '60' },
        { code: 'MZ', label: 'Mozambique', phone: '258' },
        { code: 'NA', label: 'Namibia', phone: '264' },
        { code: 'NC', label: 'New Caledonia', phone: '687' },
        { code: 'NE', label: 'Niger', phone: '227' },
        { code: 'NF', label: 'Norfolk Island', phone: '672' },
        { code: 'NG', label: 'Nigeria', phone: '234' },
        { code: 'NI', label: 'Nicaragua', phone: '505' },
        { code: 'NL', label: 'Netherlands', phone: '31' },
        { code: 'NO', label: 'Norway', phone: '47' },
        { code: 'NP', label: 'Nepal', phone: '977' },
        { code: 'NR', label: 'Nauru', phone: '674' },
        { code: 'NU', label: 'Niue', phone: '683' },
        { code: 'NZ', label: 'New Zealand', phone: '64' },
        { code: 'OM', label: 'Oman', phone: '968' },
        { code: 'PA', label: 'Panama', phone: '507' },
        { code: 'PE', label: 'Peru', phone: '51' },
        { code: 'PF', label: 'French Polynesia', phone: '689' },
        { code: 'PG', label: 'Papua New Guinea', phone: '675' },
        { code: 'PH', label: 'Philippines', phone: '63' },
        { code: 'PK', label: 'Pakistan', phone: '92' },
        { code: 'PL', label: 'Poland', phone: '48' },
        {
          code: 'PM',
          label: 'Saint Pierre and Miquelon',
          phone: '508',
        },
        { code: 'PN', label: 'Pitcairn', phone: '870' },
        { code: 'PR', label: 'Puerto Rico', phone: '1' },
        {
          code: 'PS',
          label: 'Palestine, State of',
          phone: '970',
        },
        { code: 'PT', label: 'Portugal', phone: '351' },
        { code: 'PW', label: 'Palau', phone: '680' },
        { code: 'PY', label: 'Paraguay', phone: '595' },
        { code: 'QA', label: 'Qatar', phone: '974' },
        { code: 'RE', label: 'Reunion', phone: '262' },
        { code: 'RO', label: 'Romania', phone: '40' },
        { code: 'RS', label: 'Serbia', phone: '381' },
        { code: 'RU', label: 'Russian Federation', phone: '7' },
        { code: 'RW', label: 'Rwanda', phone: '250' },
        { code: 'SA', label: 'Saudi Arabia', phone: '966' },
        { code: 'SB', label: 'Solomon Islands', phone: '677' },
        { code: 'SC', label: 'Seychelles', phone: '248' },
        { code: 'SD', label: 'Sudan', phone: '249' },
        { code: 'SE', label: 'Sweden', phone: '46' },
        { code: 'SG', label: 'Singapore', phone: '65' },
        { code: 'SH', label: 'Saint Helena', phone: '290' },
        { code: 'SI', label: 'Slovenia', phone: '386' },
        { code: 'SK', label: 'Slovakia', phone: '421' },
        { code: 'SL', label: 'Sierra Leone', phone: '232' },
        { code: 'SM', label: 'San Marino', phone: '378' },
        { code: 'SN', label: 'Senegal', phone: '221' },
        { code: 'SO', label: 'Somalia', phone: '252' },
        { code: 'SS', label: 'South Sudan', phone: '211' },
        { code: 'SV', label: 'El Salvador', phone: '503' },
        { code: 'SZ', label: 'Swaziland', phone: '268' },
        { code: 'TD', label: 'Chad', phone: '235' },
        { code: 'TH', label: 'Thailand', phone: '66' },
        { code: 'TN', label: 'Tunisia', phone: '216' },
        { code: 'TR', label: 'Turkey', phone: '90' },
        { code: 'UA', label: 'Ukraine', phone: '380' },
        { code: 'UG', label: 'Uganda', phone: '256' },
        {code: 'US',label: 'United States',phone: '1'},
        { code: 'UY', label: 'Uruguay', phone: '598' },
        { code: 'UZ', label: 'Uzbekistan', phone: '998' },
        { code: 'ZA', label: 'South Africa', phone: '27' },
        { code: 'ZM', label: 'Zambia', phone: '260' },
        { code: 'ZW', label: 'Zimbabwe', phone: '263' },
      ];

    return (

        <div style={{ backgroundImage: `url(${ResultBack})`, height: "100vh", backgroundSize: "cover" }}>

            <div className={classes.page}>
                <div className={classes.results} style={{paddingTop :'7%'}}>
                    <Card className={classes.paper} elevation={3}>
                        <CardContent>
                            <Container component="main" >
                                <CssBaseline />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >

                                    <Avatar   sx={{ width: 50, height: 50 , bgcolor: '#226AC7'  }}>
                                        <PersonIcon  sx={{ width: 40, height: 40  }}/>
                                    </Avatar>
                                    <hr/>

                                   
                                    <Typography component="h1" variant="h5">
                                        Create Account
                                    </Typography>

                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                    <Stepper activeStep={activeStep}>
                                            {steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                    if (isStepSkipped(index)) {
                                                        stepProps.completed = false;
                                                    }
                                                    return (
                                                        <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })}
                                        </Stepper>

                                            <br/>

                                        {activeStep === steps.length ? (

                                            <React.Fragment>
                                                <Typography sx={{ mt: 2, mb: 1 }}>
                                                    Acount Created Successfully!
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    {/*  <Button onClick={handleReset}>Reset</Button> */}
                                                </Box>
                                            </React.Fragment>
                                        ) : (

                                            <React.Fragment>
                                                {activeStep === 0 ?
                                                    <div>
                                                        <Row>
                                                            <Col>
                                                                <Form.Group controlId="validationCustom01">
                                                                    <FloatingLabel controlId="floatingFirstName" label="First name *" >

                                                                        <Form.Control
                                                                            required
                                                                            type="text"
                                                                            onChange={e => setFirstName(e.target.value)}
                                                                        />

                                                                    </FloatingLabel>
                                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Col>


                                                            <Col>
                                                                <Form.Group controlId="validationCustom02">
                                                                    <FloatingLabel controlId="floatingFirstName" label="Last name *" >
                                                                        <Form.Control
                                                                            required
                                                                            type="text"
                                                                            onChange={e => setLastName(e.target.value)}
                                                                        />
                                                                    </FloatingLabel>
                                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col>
                                                                <Form.Group controlId="validationCustomUsername">
                                                                    <FloatingLabel controlId="floatingUsername" label="Username *" >

                                                                        <Form.Control
                                                                            type="text"
                                                                            aria-describedby="inputGroupPrepend"
                                                                            required
                                                                            onChange={e => setUsername(e.target.value)}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">
                                                                            Username already exists!
                                                                        </Form.Control.Feedback>
                                                                    </FloatingLabel>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group controlId="validationCustomPassword">
                                                                    <FloatingLabel controlId="floatingPassword" label="Password *" >

                                                                        <Form.Control
                                                                            type="password"
                                                                            aria-describedby="inputGroupPrepend"
                                                                            onChange={e => setPassword(e.target.value)}
                                                                            required
                                                                        />
                                                                    </FloatingLabel>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            <Col>
                                                                <Form.Group controlId="validationCustomUsername">
                                                                    <FloatingLabel controlId="floatingEmail" label="Email *" >
                                                                        <Form.Control
                                                                            type="text"
                                                                            aria-describedby="inputGroupPrepend"
                                                                            required
                                                                            onChange={e => setEmail(e.target.value)}

                                                                        />
                                                                        <Form.Control.Feedback type="invalid">
                                                                            Email already exists or not entered!
                                                                        </Form.Control.Feedback>
                                                                    </FloatingLabel>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </div>

                                                        : (<div>
                                                           
                                                            <Row>
                                                                <Col>
                                                                    <Form.Group controlId="validationCustom01">
                                                                        <FloatingLabel controlId="floatingPassport" label="Passport Number *" >
                                                                            <Form.Control
                                                                                type="text"
                                                                                aria-describedby="inputGroupPrepend"
                                                                                required
                                                                                onChange={e => setPassportNumber(e.target.value)}

                                                                            />
                                                                            <Form.Control.Feedback type="invalid">
                                                                                Passport Number is Required!
                                                                            </Form.Control.Feedback>
                                                                        </FloatingLabel>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <br />

                                                            <Row>
                                                                <Col>
                                                                    <Form.Group controlId="validationCustom01">
                                                                        <FloatingLabel controlId="floatingAddress" label="Address (optional)" >
                                                                            <Form.Control
                                                                                type="text"
                                                                                aria-describedby="inputGroupPrepend"
                                                                                onChange={e => setAddress(e.target.value)}

                                                                            />
                                                                        </FloatingLabel>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <br />
                                                            <Row>
                                                                <Col>
                                                                    <Form.Group controlId="validationCustom01">
                                                                        <  PhoneInput
                                                                            required
                                                                            placeholder="Telephone *"
                                                                            isValid={(value, country) => {
                                                                                if (value.match(/12345/)) {
                                                                                    return 'Invalid value: ' + value + ', ' + country.name;
                                                                                } else if (value.match(/1234/)) {
                                                                                    return false;
                                                                                } else {
                                                                                    if (value === country.countryCode || value ==="") {
                                                                                        setTelephone1("")
                                                                                    }
                                                                                    else {
                                                                                        setTelephone1("+" + value)
                                                                                    }
                                                                                    return true;
                                                                                }
                                                                            }}
                                                                        />
                                                                        <Form.Control.Feedback type="invalid">Phone Number is Required!</Form.Control.Feedback>

                                                                    </Form.Group>
                                                                </Col>
                                                                </Row>
                                                                <br/>
                                                                <Row>
                                                                    
                                                                <Col>
                                                                    <Form.Group controlId="validationCustom01">
                                                                        <PhoneInput
                                                                            placeholder="Telephone (optional)"
                                                                            isValid={(value, country) => {
                                                                                if (value.match(/12345/)) {
                                                                                    return 'Invalid value: ' + value + ', ' + country.name;
                                                                                } else if (value.match(/1234/)) {
                                                                                    return false;
                                                                                } else {
                                                                                    if (value === country.countryCode|| value ==="") {
                                                                                        setTelephone2("")}
                                                                                    else{
                                                                                        setTelephone2("+" + value)}
                                                                                    return true;
                                                                                }
                                                                            }}
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 , flex: '1 1 auto'  }}>
                                                        <Box sx={{ flex: '1 1 auto' }} />
                                                        <Button type="submit"  >Submit</Button>

                                                        </Box>

                                            
                                            </div>)}

                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                        {activeStep === 1 ? 
                                                        <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 , marginTop:"-75px" }}
                                                        >
                                                        Back
                                                      </Button>
                                                        :
                                                            <Button
                                                                color="inherit"
                                                                disabled={activeStep === 0}
                                                                onClick={handleBack}
                                                                sx={{ mr: 1  }}
                                                            >
                                                                Back
                                                            </Button>}
                                              
                                              <Box sx={{ flex: '1 1 auto' }} />
                                              
                                              <Button onClick={handleNext} disabled={activeStep === 1}>
                                                {activeStep === steps.length - 1 ? '' : 'Next'}
                                              </Button>

                                            </Box>
                                          </React.Fragment>

                                        )}

                                    </Form>

                                </Box>

                            </Container>
                        </CardContent>
                    </Card>



                </div>
            </div>
        </div>

    );
}

//export default register;

/*



country={'eg'}



<Autocomplete
id="country-select-demo"
sx={{ width: 300 }}
options={countries}
autoHighlight
getOptionLabel={(option) => "+" + option.phone}
renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <img
        loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
          </Box>
          )}
          renderInput={(params) => (
              <TextField
          {...params}
          label="Country Code"
          inputProps={{
              ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
        }}
        />
        )}
        />
        
        
        
        
        
        
        
        
       <Col>
       
       
       
       
       
       
       
           <Autocomplete
               id="country-select-demo"
               options={countries}
               autoHighlight
               getOptionLabel={(option) => "+" + option.phone}
               renderOption={(props, option) => (
                   <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                       <img
                           loading="lazy"
                           width="20"
                           src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                           srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                           alt=""
                       />
                       {option.label} ({option.code}) +{option.phone}
                   </Box>
               )}
               renderInput={(params) => (
                   <TextField
                       {...params}
                       label="Country Code *"
                       inputProps={{
                           ...params.inputProps,
                           autoComplete: 'new-password', // disable autocomplete and autofill
                       }}
                   />
               )}
           />
       
       
       
       
       
       
       
       
       
       </Col>
        */