// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
// import ResultCard from './ResultCard'
// export default function SizePaginationGrid() {
//     const [pageSize, setPageSize] = React.useState(5);

//     // const { data } = useDemoData({
//     //     dataSet: 'Commodity',
//     //     rowLength: 1,
//     //     maxColumns: 0,
//     // });
//     //const { data } = " <ResultCard />"

//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 pageSize={pageSize}
//                 onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//                 rowsPerPageOptions={[5, 10, 20]}
//                 pagination
//                 {...data}
//             />
//         </div>
//     );
// }

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import ResultCard from './ResultCard'
// function TablePaginationActions(props) {
//     const theme = useTheme();
//     const { count, page, rowsPerPage, onPageChange } = props;

//     const handleFirstPageButtonClick = (event) => {
//         onPageChange(event, 0);
//     };

//     const handleBackButtonClick = (event) => {
//         onPageChange(event, page - 1);
//     };

//     const handleNextButtonClick = (event) => {
//         onPageChange(event, page + 1);
//     };

//     const handleLastPageButtonClick = (event) => {
//         onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     };

//     return (
//         <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//             <IconButton
//                 onClick={handleFirstPageButtonClick}
//                 disabled={page === 0}
//                 aria-label="first page"
//             >
//                 {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//             </IconButton>
//             <IconButton
//                 onClick={handleBackButtonClick}
//                 disabled={page === 0}
//                 aria-label="previous page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             </IconButton>
//             <IconButton
//                 onClick={handleNextButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="next page"
//             >
//                 {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//             </IconButton>
//             <IconButton
//                 onClick={handleLastPageButtonClick}
//                 disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//                 aria-label="last page"
//             >
//                 {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//             </IconButton>
//         </Box>
//     );
// }

// TablePaginationActions.propTypes = {
//     count: PropTypes.number.isRequired,
//     onPageChange: PropTypes.func.isRequired,
//     page: PropTypes.number.isRequired,
//     rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(name, calories, fat) {
//     return { name, calories, fat };
// }

// const rows = [
//     //     createData('Cupcake', 305, 3.7),
//     //     createData('Donut', 452, 25.0),
//     //     createData('Eclair', 262, 16.0),
//     //     createData('Frozen yoghurt', 159, 6.0),
//     //     createData('Gingerbread', 356, 16.0),
//     //     createData('Honeycomb', 408, 3.2),
//     //     createData('Ice cream sandwich', 237, 9.0),
//     //     createData('Jelly Bean', 375, 0.0),
//     //     createData('KitKat', 518, 26.0),
//     //     createData('Lollipop', 392, 0.2),
//     //     createData('Marshmallow', 318, 0),
//     //     createData('Nougat', 360, 19.0),
//     //     createData('Oreo', 437, 18.0),
//     // ].sort((a, b) => (a.calories < b.calories ? -1 : 1));
//     <ResultCard />
// ]

// export default function CustomPaginationActionsTable() {
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);

//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//                 <TableBody>
//                     {(rowsPerPage > 0
//                         ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                         : rows
//                     ).map((row) => (
//                         <TableRow key={row.name}>
//                             <TableCell component="th" scope="row">
//                                 {row.name}
//                             </TableCell>
//                             <TableCell style={{ width: 160 }} align="right">
//                                 {row.calories}
//                             </TableCell>
//                             <TableCell style={{ width: 160 }} align="right">
//                                 {row.fat}
//                             </TableCell>
//                         </TableRow>
//                     ))}

//                     {emptyRows > 0 && (
//                         <TableRow style={{ height: 53 * emptyRows }}>
//                             <TableCell colSpan={6} />
//                         </TableRow>
//                     )}
//                 </TableBody>
//                 <TableFooter>
//                     <TableRow>
//                         <TablePagination
//                             //rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                             colSpan={3}
//                             count={rows.length}
//                             rowsPerPage={rowsPerPage}
//                             page={page}
//                             SelectProps={{
//                                 inputProps: {
//                                     'aria-label': 'rows per page',
//                                 },
//                                 native: true,
//                             }}
//                             onPageChange={handleChangePage}
//                             onRowsPerPageChange={handleChangeRowsPerPage}
//                             ActionsComponent={TablePaginationActions}
//                         />
//                     </TableRow>
//                 </TableFooter>
//             </Table>
//         </TableContainer>
//     );
// }

import React, { useState } from "react";
//import Offer from "./Offer";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Pagination from "@material-ui/lab/Pagination";
//import { getOffers, filteredOffers } from "../../actions/offerActions";
import ResultCard from './ResultCard'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    //console.log(state.DetailsReducer.details.destination)
    return {
        details: state.DetailsReducer.details,
        allOffers: state.DetailsReducer.details.allOffers
    };
};




export default connect(mapStateToProps)(Paginations);
function Paginations(allOffers, details) {

    console.log("ANAAA ELOFFFFERRR: ", allOffers)

    // this.state = {
    //     page: 1,
    // };
    const [page, setPage] = useState(1);

    const handleChange = (event, page) => {
        setPage(page)
    }




    // let offers = ""
    // this.setState({filtered:this.props.offers})
    // console.log("this.props.filtered: ", this.props.filtered)
    // console.log("this.props.offers: ", this.props.offers)

    // if (this.props.filtered.length === 0) {
    //   offers = this.props.offers;
    // }
    // else {
    //offers = this.props.filtered;
    //   }

    // console.log("offers", this.props.offers)
    // console.log("filtered", this.props.filtered)
    // console.log("filtered offers", this.props.filteredOffers)



    const currentPage = page;
    const offersPerPage = 1;
    const indexOfLastOffer = offersPerPage * currentPage;
    const indexOfFirstOffer = indexOfLastOffer - offersPerPage;

    console.log("FUNCCCCTTTT", Math.ceil(allOffers.allOffers.data.length / offersPerPage))
    // const currentArray = allOffers.slice(indexOfFirstOffer, indexOfLastOffer);
    console.log("OFFFFFF: ", allOffers)
    console.log("Detailss: ", allOffers.details)
    return (
        <div>
            <GridContainer >
                {/* {currentArray.map((offer) => { */}

                <GridItem xs={12} style={{ marginTop: "100px" }}>
                    {/* <Offer
                  offer={offer}
                  classes={classes}
                  avgCO2={avgCO2}
                  adults={this.props.adults}
                  children={this.props.children}
                  history={this.props.history}
                /> */}
                    <ResultCard offer={allOffers} details={allOffers.details} />
                    {/* <ResultCard />
                    <ResultCard />
                    <ResultCard /> */}
                    {/* <ResultCard />
                    <ResultCard /> */}
                </GridItem>
                {/* );
                }
                )
                } */}
            </GridContainer>
            <GridContainer alignItems="center" justify="center">
                <GridItem xs style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Pagination
                        //style={{ background: "#10404c ", color: "wheat" }}
                        style={{ marginLeft: "47%", color: "wheat" }}
                        count={Math.ceil(allOffers.allOffers.data.length / offersPerPage)}

                        //{Math.ceil(allOffers.data / offersPerPage)}
                        page={currentPage}
                        onChange={handleChange}
                        color="secondary"
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}


