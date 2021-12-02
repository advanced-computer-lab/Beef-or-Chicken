import logo from '../../images/BOC.png'
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { fabClasses } from '@mui/material';
import { height } from '@mui/system';
import SideBar from './SideBar'
const useStyles = makeStyles((theme) => ({
    logo: {
        // display: 'flex',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
        width: "80px",
        height: "80px",
        position: "absolute",
        marginTop: "-5px"

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
        backgroundColor: "#226AC7",
        height: "100px"
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "100px",
        paddingTop: "20px",
        paddingBottom: "10px"

    },
    side: {
        width: "80px",
        height: "80px",
        position: "absolute",
        align: "left",
        marginTop: "25px"
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <div className={classes.side}>
                <SideBar />
            </div>
            <nav className={classes.nav} >
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