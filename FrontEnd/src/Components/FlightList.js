import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@restart/ui/esm/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteButton from './DeleteButton'
import UpdateFlight from './UpdateFlight'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#0C2647",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// function createData(props) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables(props) {
    const flight = props.flight
    console.log("hello", flight)
    const Adate = flight.ArrivalDate
    //let formatted_date = new Date(date.toDateString());
    console.log("hiiii", Adate)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // let newDate = Adate
    // newDate = newDate.substring(0, 10)
    // console.log("ana hena: ", newDate)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Flight Number</StyledTableCell>
                        <StyledTableCell>From</StyledTableCell>
                        <StyledTableCell align="center">To</StyledTableCell>
                        <StyledTableCell align="center">Departure Date</StyledTableCell>
                        <StyledTableCell align="center">Arrival Date</StyledTableCell>
                        <StyledTableCell align="center">Departure Time</StyledTableCell>
                        <StyledTableCell align="center">Arrival Time</StyledTableCell>
                        <StyledTableCell align="center">First Seats</StyledTableCell>
                        <StyledTableCell align="center">Business Seats</StyledTableCell>
                        <StyledTableCell align="center">Economy Seats</StyledTableCell>
                        <StyledTableCell align="center">       </StyledTableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {flight.map((flight) => (

                        <StyledTableRow key={flight._id}>
                            <StyledTableCell align="center">
                                {flight.FlightNumber}
                            </StyledTableCell>
                            <StyledTableCell align="center">{flight.From}</StyledTableCell>
                            <StyledTableCell align="center">{flight.To}</StyledTableCell>
                            <StyledTableCell align="center">{flight.DepartureDate.substring(0, 10)}</StyledTableCell>
                            <StyledTableCell align="center">{flight.ArrivalDate.substring(0, 10)}</StyledTableCell>
                            <StyledTableCell align="center">{flight.DepartureTime}</StyledTableCell>
                            <StyledTableCell align="center">{flight.ArrivalTime}</StyledTableCell>
                            <StyledTableCell align="center">{flight.FirstSeats}</StyledTableCell>
                            <StyledTableCell align="center">{flight.BusinessSeats}</StyledTableCell>
                            <StyledTableCell align="center">{flight.EconomySeats}</StyledTableCell>
                            <StyledTableCell align="right" style={{ display: "flex" }}>

                                {/* <IconButton aria-label="delete" onClick={handleClickOpen}>
                                    <DeleteIcon />
                                </IconButton> */}
                                <DeleteButton flight={flight._id} />
                                <IconButton style={{ marginRight: "20px" }} >
                                    <EditIcon />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
