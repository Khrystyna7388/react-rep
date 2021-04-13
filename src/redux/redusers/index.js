import {combineReducers} from "redux";
import firstReducer from './firts-counter-reducer';
import secondReducer from './second-counter-reducer';

export const reducer = combineReducers({
    counter1: firstReducer,
    counter2: secondReducer,
})