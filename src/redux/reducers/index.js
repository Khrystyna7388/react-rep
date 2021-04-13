// import {
//     INC,
//     INC_CUSTOM,
//     DEC,
//     RESET
// } from "../action-types";
//
//
// const initialState = {
//     counter: 0,
// }
//
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INC: {
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         }
//         case INC_CUSTOM: {
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
//         }
//         case DEC: {
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         }
//         case RESET: {
//             return {
//                 ...state,
//                 counter: 0
//             }
//         }
//         default:
//             console.log('action', action.type, 'does not exist')
//             return state;
//     }
// }

import {combineReducers} from "redux";
import counter1Reducer from './counter-one-reducer';
import counter2Reducer from './counter-two-reducer';

export const reducer = combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
})
