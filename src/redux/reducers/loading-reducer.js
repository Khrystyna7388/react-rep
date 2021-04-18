import {END_PRODUCTS_LOADING, START_PRODUCTS_LOADING} from "../action-types";

const initialState = {
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_PRODUCTS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_PRODUCTS_LOADING: {
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