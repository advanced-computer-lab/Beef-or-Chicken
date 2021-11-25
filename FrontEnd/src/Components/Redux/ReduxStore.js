import { createStore } from 'redux';

import rootReducer from './ReduxReducers';


const store = createStore(rootReducer);


export default store;