import {SET_PRODUCTS} from "../action-types";

const initFormLs = localStorage.getItem('products');

const initialState = initFormLs ? JSON.parse(initFormLs) : {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }

        default:
            return state
    }
}

export default reducer;