import { combineReducers } from 'redux';

import DetailsReducer from './DetailsReducer';
import ReservationReducer from './ReservationReducer';
import details from './DetailsReducer';


const rootReducer = combineReducers({

    DetailsReducer: DetailsReducer,
    ReservationReducer : ReservationReducer,

});

export default rootReducer;