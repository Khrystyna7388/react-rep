import {
    SET_VALUE,
    SET_IS_LOADING
} from "../types";

export const setValue = (payload) => ({type: SET_VALUE, payload});
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload});

export const fetchData = async (dispatch, url) => {
    dispatch(setIsLoading(true));
    const response = await fetch(url);
    const data = await response.json();
    dispatch(setValue(data));
    dispatch(setIsLoading(false));
}
