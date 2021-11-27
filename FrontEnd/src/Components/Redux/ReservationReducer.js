
const ReservationReducer = (state = [], action) => {

    if (action.type == 'setReservation') {
        state.details.reservation = action.payload;
        return {
            ...state,
        };
    }

   

    return state;
};

export default ReservationReducer;
