import React, { useState } from "react";
import './Counter2.css'
import AddBoxRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import RemoveBoxRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import { SettingsCellOutlined } from "@material-ui/icons";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    //console.log(state.DetailsReducer.details.destination)
    return {
        children: state.DetailsReducer.details.children,
    };
};
const mapDispatchToState = (dispatch) => {
    return {

        setChildren: (children) => {
            dispatch({ type: 'setChildren', payload: children });
        },


    };
};
export default connect(mapStateToProps, mapDispatchToState)(Counter2);

function Counter2({ count, setCount, children, setChildren }) {
    // Set the initial count state to zero, 0
    //   const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [col, setCol] = useState("disabled");
    const [col2, setCol2] = useState("disabled");

    // Create handleIncrement event handler
    const handleIncrement = () => {
        if (children === 1) {
            // setCount(1);
            setChildren(children + 1);
            setCol("primary")
        }

        else {
            setChildren(children + 1);
            setCol("primary")
        }
        console.log("handleInc ", children)
    };


    //Create handleDecrement event handler
    const handleDecrement = () => {
        if (children === 0) {
            setChildren(0);
            setCol("disabled")
        }
        // if(count==1){
        //     setCol("disabled")

        // }
        else {
            setChildren(children - 1);
        }
        console.log("handleDec ", children)

    };


    const iconColor = (value) => {
        if (children + 1 === 0) {
            setCol("disabled")
            console.log("disabled", { count })
        }
        if (children == 1 && value === "dec") {
            setCol("disabled")
            // console.log("ahmed")
        }
        else if (children === 0 && value === "dec") {
            setCol("disabled")
        }
        else {
            setCol("primary")
            console.log("primary", { children })
        }
    }


    const func2 = () => {
        handleIncrement();
        iconColor("inc");
    }
    const func = () => {

        handleDecrement();
        iconColor("dec");

    }



    return (
        <div className="a1">
            <div className="counter1">
                Aged 2-12
                <IconButton color={col} sign="-" onClick={func} >
                    <RemoveBoxRoundedIcon />
                </IconButton>
                {children}
                <IconButton color="primary" sign="-" onClick={func2} >
                    <AddBoxRoundedIcon />
                </IconButton>
            </div>


        </div>

    );
}

