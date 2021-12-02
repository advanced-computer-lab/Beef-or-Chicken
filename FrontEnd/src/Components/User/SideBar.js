import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CardTravelIcon from '@mui/icons-material/CardTravel';

const useStyles = makeStyles((theme) => ({
    logo: {
        // display: 'flex',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
        width: "80px",
        height: "80px",

    },
    paper: {
        marginRight: theme.spacing(2),
        width: "100%",

        height: "200px",
        overflow: "hidden",
        // overflowy: "auto",
        overflow: 'auto'
    },
    down: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "2%",
    },
    b: {
        alignItems: "Start"
    },
    title: {
        textAlign: "left",
        marginLeft: "9%"
    },
    navbar: {
        backgroundColor: "#226AC7"
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "100px",
        paddingTop: "20px",
        paddingBottom: "10px"

    },
    link: {
        // color: "#FFFFFF",
        textDecoration: "none"
    }
}));
export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const handleSubmit = () => {



    }

    const toggleDrawer = (anchor, open) => (event) => {
        console.log(anchor)
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <Link to="/">
                    <ListItem button key='Make Resrervation' onClick={handleSubmit()}>
                        <CardTravelIcon />
                        <ListItemText primary='&nbsp;Make Resrervation' />
                    </ListItem>
                </Link>
                <Link to="/ViewAllReservations">
                    <ListItem className={classes.link} style={{ textDecoration: "none" }} button key='View All Reservations' onClick={handleSubmit()}>
                        <AirplaneTicketIcon />
                        <ListItemText primary='&nbsp;View All Reservations' />
                    </ListItem>
                </Link>
                <Link to="/ViewUserinfo">
                    <ListItem button key='View User info' onClick={handleSubmit()}>

                        <ListItemText primary='View User info' />
                    </ListItem>
                </Link>
            </List>

        </Box>
    );

    return (
        <div>


            <Button onClick={toggleDrawer("left", true)}><MenuIcon color="error" fontSize="large" /></Button>
            <SwipeableDrawer
                //anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {list("left")}
            </SwipeableDrawer>


        </div>
    );
}
