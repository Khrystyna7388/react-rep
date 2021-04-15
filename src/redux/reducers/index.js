import {END_LOADING, SET_PRODUCTS, START_LOADING} from "../action-types";

const initialState = {
    products: [],
    isLoading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return{
                ...state,
                products: action.payload
            }
        }
        case START_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}

export default reducer;