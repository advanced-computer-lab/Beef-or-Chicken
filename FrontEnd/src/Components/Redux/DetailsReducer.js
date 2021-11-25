const initState = {
    details: {
        origin: "",
        origin_name: "",
        destination: "",
        destination_name: "",
        departure_date: '',
        return_date: '',
        tripType: "Round Trip",
        cabin_class: 'Economy',
        Adults: 1,
        children: 0,
        infants_on_lap: 0,
        infants_in_seat: 0,
        totalPassengers: 0,

    },
};
const DetailsReducer = (state = initState, action) => {
    if (action.type == 'setOrigin') {
        state.details.origin = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setOriginName') {
        state.details.origin_name = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setDestinationName') {
        state.details.destination_name = action.payload;
        return {
            ...state,
        };
    }

    if (action.type == 'setDestination') {
        state.details.destination = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setDepartureDate') {
        state.details.departure_date = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setReturnDate') {
        state.details.return_date = action.payload;
        return {
            ...state,
        };
    }

    if (action.type == 'setTripType') {
        state.details.tripType = action.payload;
        return {
            ...state,
        };
    }

    if (action.type == 'setAdult') {
        state.details.Adults = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setChildren') {
        state.details.children = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setInfantsOL') {
        state.details.infants_on_lap = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setInfantsIS') {
        state.details.infants_in_seat = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setCabinClass') {
        state.details.cabin_class = action.payload;
        return {
            ...state,
        };
    }
    if (action.type == 'setTotalPassengers') {
        state.details.totalPassengers = action.payload;
        return {
            ...state,
        };
    }

    return state;
};

export default DetailsReducer;
