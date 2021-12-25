import logo from '../../images/BOC.png'
import { makeStyles } from "@material-ui/core/styles";
import SideBar from './SideBar'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LogoutButton from './LogoutButton'
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


const useStyles = makeStyles((theme) => ({
    logo: {
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
    },

    profile2: {
        width: "80px",
        height: "80px",
        position: "absolute",
        top: "19px",
        right: "35px",
    },
    profile: {
        width: "80px",
        height: "80px",
        position: "absolute",
        top: "19px",
        right: "0px",
    }
}));



const mapStateToProps = (state) => {
    return {
        UserID: state.DetailsReducer.details.UserID,
        token: state.DetailsReducer.details.token,
      //  user: state.DetailsReducer.details.user,
    };
    
    
};

//console.log("ana el detaiillss",UserID);
/*
const mapDispatchToState = (dispatch) => {
    return {
        setUserID: (UserID) => {
            dispatch({ type: 'setUserID', payload: UserID });
        },
        setToken: (token) => {
            dispatch({ type: 'setToken', payload: token });
        },  
    };
};
*/
export default connect(mapStateToProps)(Header);


function Header({ UserID }) {
    let history = useHistory();
    let init = false;
    if (UserID !== "") {
        init = true;
    }
    const [auth, setAuth] = React.useState(init);
    const [anchorEl, setAnchorEl] = React.useState(null);



    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const viewProfile = () => {
        history.push("/ViewUserinfo");
    };
    const login = () => {
        history.push("/userlogin2");
    };

    const editProfile = () => {
        history.push("/ViewUserInfo/" + { UserID });
    };

    const changePassword = () => {
        history.push(`/ChangePassword/${UserID}`);
    };



    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <div className={classes.side}>
                <SideBar />
            </div>
            <nav className={classes.nav} >
                <img src={logo} alt="logohear" className={classes.logo} />

                {auth && (
                    <div className={classes.profile}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle sx={{ fontSize: 40, color: "#FFFFFF" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                marginTop: '-160px',
                                marginRight: '-3%'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >


                            <MenuItem onClick={viewProfile}>Profile</MenuItem>
                            <MenuItem onClick={editProfile}>View Profile</MenuItem>
                            <MenuItem onClick={changePassword}><VpnKeyIcon></VpnKeyIcon> Change Password</MenuItem>
                            <LogoutButton />
                        </Menu>
                    </div>
                )}
                {!auth &&

                    <div className={classes.profile2}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={login}
                            color="inherit"
                        >
                            <LoginIcon sx={{ fontSize: 35, color: "#FFFFFF" }} />
                           <a style={{fontSize :16 , color : "#FFFFFF"}}>
                               &nbsp;Login
                               </a>
                        </IconButton>
                    </div>

                }


            </nav>
        </div>
    )
}

