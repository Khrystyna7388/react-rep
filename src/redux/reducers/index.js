import {SET_VALUE, SET_IS_LOADING} from "../types";

const initialState = {
    values: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_VALUE: {
            return{
                ...state,
                values: action.payload
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state;
    }

}

export default reducer;