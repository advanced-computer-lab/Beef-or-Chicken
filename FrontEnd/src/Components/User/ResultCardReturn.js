
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
// import LH from '../images/LH.png';
// import LX from '../images/LX.png';
import MS from '../../images/MS.png';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment, { duration } from 'moment'
import { useHistory } from "react-router-dom";
import { Select } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '65%',
        marginLeft: "16%",
        // marginTop: "7%",
        // backgroundColor: "#415a5c",

        // '&$expanded': {
        //     margin: 'auto',
        //   },
    },

    title: {
        fontSize: theme.typography.pxToRem(40),
        //horizontalAlign: "center",
        marginLeft: "15%",
        // color: '#202124',
        color: "#f8c89d",
        textAlign: "center",
    },
    title1: {
        fontSize: theme.typography.pxToRem(12),
        horizontalAlign: "left",
        marginLeft: "-34%",
        color: '#70757A',
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    heading1: {
        fontSize: theme.typography.pxToRem(15),
        color: "green",
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    TripIcon: {
        verticalAlign: 'bottom',
        height: 200,
        width: 20,
        marginLeft: "8%",
    },
    //   TripIcon: {
    //     verticalAlign: 'bottom',
    //     display:"flex",
    //     flexDirection:"row",
    //     height: 20,
    //     width: 20,
    //   },
    details: {
        //  alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",


    },
    column: {
        flexBasis: '33.33%',
        marginLeft: "-10%",
        // paddingTop: "5%"

    },

    column2: {
        //flexBasis: '33.33%',
        marginLeft: "0%",
        marginTop: "0%",

        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.text.secondary,
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },

    },
    text: {
        marginLeft: "3%",
        marginTop: "-1%",
        width: "70%",
        //fontSize: theme.typography.pxToRem(14),
        height: "30%",

    },
    text1: {
        marginLeft: "-3%",
        marginTop: "1%",
        fontSize: theme.typography.pxToRem(14),
        textAlign: "left",


    },
    text2: {
        marginLeft: "-3%",
        marginTop: "1%",
        fontSize: theme.typography.pxToRem(12),
        color: '#70757A',
        textAlign: "left",

    },
    line: {
        length: "1",
        width: "100%",
        marginLeft: "11%",
        marginTop: "-10%",
    },
    line2: {
        length: "1",
        width: "100%",
        marginLeft: "11%",
        marginTop: "-3%",
    },
    text3: {
        marginLeft: "11%",
        marginTop: "-8%",
        fontSize: theme.typography.pxToRem(14),
        // color:'#70757A',
        textAlign: "left",

    },
    text4: {
        marginLeft: "20%",
        marginTop: "-8%",
        fontSize: theme.typography.pxToRem(14),
        // color:'#70757A',
        textAlign: "left",

    },

    action: {
        marginTop: "0%",

    },
    accordion: {
        boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
        paddingTop: "2%"
        // background: "#415a5c",
        // backgroundColor: '#415a5c',
        // borderColor: '#415a5c',
    },


}));



export default function DetailedAccordion(props) {
    const classes = useStyles();
    const details = props.details
    let history = useHistory();
    console.log("OFFRAAATTTAAA: ", props.offer.data.data)
    const offer = props.offer.data.data
    //const departuretime = offer[0].DepartureTime

    console.log("RETURN: ", details.Adults)
    // console.log("LENGTH: ", props.offer.allOffers.data.data[0].PriceBusiness.$numberDecimal)
    const price = (offer) => {
        // if(details.cabin_class=="")
        console.log("offersssss: ", offer)
        let sum = details.Adults + details.children
        switch (details.cabin_class) {
            case "Economy":
                console.log("adults: ", details.Adults)
                return offer.PriceEconomy.$numberDecimal * sum
                break;
            case "Bussiness":
                return offer.PriceBusiness.$numberDecimal * sum
                break;
            case "First":
                return offer.PriceFirst.$numberDecimal * sum
                break;
            default:
            // code block
        }
    }

    const bags = (offer) => {
        // if(details.cabin_class=="")
        console.log("offersssss: ", offer)
        switch (details.cabin_class) {
            case "Economy":

                return offer.EconomyBags
                break;
            case "Business":
                return offer.BusinessBags
                break;
            case "First Class":
                return offer.FirstBags
                break;
            default:
            // code block
        }
    }
    const handleSubmit = async (offer) => {
        // let body = {
        //     'From': details.destination,
        //     'To': details.origin,
        //     "DepartureDate": details.return_date,
        //     "ArrivalDate": "",
        //     "FirstSeats": null,
        //     "BusinessSeats": null,
        //     "EconomySeats": null,
        //     "ArrivalTime": "",
        //     "DepartureTime": "",
        //     "FlightNumber": ""
        // }

        // console.log("220 ", body)
        // let url = "http://localhost:8080/searchAvailableFlights"

        // axios
        //     .post(url, body)
        //     .then(res => {
        //         console.log("respnose: ", res)
        //         console.log("gamed louji!")
        //         props.offer.allOffers.data = res;
        // props.details.selectedDepartingFlightID.data = offer._id
        // console.log("selecteeeeeddddddd: ", props.details.selectedDepartingFlightID.data)
        console.log("offersssss291: ", props.details.TotalPrice)
        console.log("selecteeeeeddddddd292: ", details)
        props.details.ReturnFlight = offer
        props.details.selectedReturningFlightID = offer._id
        let ReturnPrice = price(offer)
        props.details.ReturnPrice = ReturnPrice
        console.log("selecteeeeeddddddd: ", props.details.ReturnPrice)


        // let body = {
        //     'UserID': 1,
        //     'DepartureFlightID': props.details.selectedDeparturingFlightID,
        //     'ReturnFlightID': props.details.selectedReturningFlightID,
        //     'CabinType': props.details.selectedReturningFlightID,
        //     'TakenSeats': [],
        //     'TotalPrice': request.body.EconomySeats,
        // }

        history.push("/Summary");
        // })
        // .catch(error => {
        //     console.log("idiot!");
        //     console.log(error.message);
        // })


    };
    const duration = (DepartureTime, DepartureDate, ArrivalTime, ArrivalDate) => {
        let start = moment(DepartureDate.substring(0, 10) + " " + DepartureTime + ":00");
        let end = moment(ArrivalDate.substring(0, 10) + " " + ArrivalTime + ":00");
        let diff = end.diff(start);
        let f = moment.utc(diff).format("HH:mm");
        let duration = f.substring(0, 2) + " hr " + f.substring(3, 5) + " min"
        return duration
    }

    return (




        <div className={classes.root}>
            <div className={classes.column}>
                <Typography className={classes.title}>Returning flights</Typography>
                {/* <Typography className={classes.title1}>Total price includes taxes + fees for 1 adult. Additional bag fees and other fees may apply.</Typography> */}
            </div>
            {offer.map((offers) => (
                <div className={classes.accordion}>
                    <Accordion style={{ backgroundcolor: "#415a5c" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        // style={{ backgroundcolor: "#415a5c" }}
                        >

                            <div className={classes.column}>
                                <img src={MS} alt="" />
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.heading}>{offers.DepartureTime} - {offers.ArrivalTime}</Typography>
                                <Typography className={classes.column2}> {offers.From}-{offers.To}  </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.heading}>{duration(offers.DepartureTime, offers.DepartureDate, offers.ArrivalTime, offers.ArrivalDate)}</Typography>
                                <Typography className={classes.column2}> duration </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.heading}>{offers.FlightNumber}</Typography>
                                <Typography className={classes.column2}>Flight Number </Typography>
                            </div>
                            <div className={classes.column}>
                                <Typography className={classes.heading1} color="green">EGP {price(offers)} </Typography>
                                <Typography className={classes.column2}>round trip  </Typography>
                            </div>

                            <div className={classes.column2}>
                                {/* <Typography className={classes.secondaryHeading}>Select trip destination</Typography> */}
                            </div>
                            {/* Lufthansa . EgyptAir Operated by Lufthansa CityLine            LHR-CIA                                          5 hr 10 min MUC                      round trip */}
                        </AccordionSummary>

                        <AccordionDetails className={classes.details}>
                            <div className={classes.TripIcon}>
                                <TripOriginIcon
                                    fontSize="small"
                                    color="disabled"
                                    label="Female"
                                />

                                <MoreVertIcon
                                    fontSize="small"
                                    color="disabled" />
                                <TripOriginIcon
                                    fontSize="small"

                                    color="disabled"
                                />
                            </div>
                            {/* <div className={classes.column} /> */}
                            <div className={classes.text}>
                                <Typography className={classes.text1}> {offers.DepartureTime} . {details.destination_name}</Typography>
                                <Typography className={classes.text2}> Travel time: {duration(offers.DepartureTime, offers.DepartureDate, offers.ArrivalTime, offers.ArrivalDate)}</Typography>
                                <Typography className={classes.text1}> {offers.ArrivalTime} . {details.origin_name}</Typography>

                            </div>


                            <hr className={classes.line}></hr>

                            <Typography className={classes.text3}> Cabin Class : {details.cabin_class}</Typography>

                            <Typography className={classes.text4}> Baggage Allowance : {bags(offers)} Kg</Typography>
                            <hr className={classes.line2}></hr>

                        </AccordionDetails>
                        <AccordionActions className={classes.action}>

                            <Button style={{ background: "#10404c ", color: "wheat" }} variant="outlined" size="medium" color="primary" onClick={() => { handleSubmit(offers) }} >Select flight</Button>

                        </AccordionActions>
                        <Divider />
                    </Accordion>



                </div>
            )
            )
            }

        </div>
    );
}