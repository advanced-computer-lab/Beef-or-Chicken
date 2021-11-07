
import Drawer from '../Components/Drawer';
import Tabs from '../Components/Tabs'
import Navbar from '../Components/Navbar';
import CreateFlight from "../Components/CreateFlight";
import FlightCard from "../Components/Flight";
import AllFlights from './AllFlights';
import Header from './Header'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
        backgroundColor: "#eff3f8"

    },
    page: {
        // display: 'flex',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
        backgroundColor: "#EEEEEE",
        // height: "1000px"
    }

}));
function HomePage() {
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&family=Inter:wght@100;200;300&family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet"></link>


    const classes = useStyles();

    return (

        <div className={classes.root}>

            {/* <Drawer /> */}
            {/* <Tabs /> */}
            {/* <CreateFlight /> */}
            {/* <AllFlights /> */}
            <Header />
            <div className={classes.page}>
                {/* <AllFlights /> */}
            </div>
        </div>

    );
}

export default HomePage;