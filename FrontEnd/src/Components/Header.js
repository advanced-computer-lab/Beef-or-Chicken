import logo from '../images/BOC.png'
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { fabClasses } from '@mui/material';
import { height } from '@mui/system';
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
        backgroundColor: "#E01A6C"
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "100px",
        paddingTop: "20px",
        paddingBottom: "10px"

    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <nav className={classes.nav}>
                <img src={logo} alt="logohear" className={classes.logo} />


                <div className="username">
                    {/* <img src={avatar} alt="logohear" className="avatar" /> */}
                    {/* <h1>User name</h1> */}
                    {/* <img src={dropdown} alt="" className="dropdownicon"/> */}
                </div>
            </nav>
        </div>
    )
}



export default Header