import {END_LOADING, SET_PRODUCTS, START_LOADING} from "../action-types";
import {URL} from "../action-types";


export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const startLoading = () => ({type: START_LOADING});
export const endLoading = () => ({type: END_LOADING});

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(startLoading());
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        dispatch(setProducts(data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(endLoading());
    }
}