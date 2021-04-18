import {SET_PRODUCTS} from "../action-types";
import {endProductsLoading, startProductsLoading} from "./loading-action-creators";

const qsHelper = (params) => {
    const keys = Object.keys(params);

    let result = '';

    if(!keys?.length) return;

    keys.forEach((el, i) => {
        result += `${el}=${params[el]}`
        if (i === keys.length - 1) result += '&';
    })

    return result
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});

export const fetchData = (params) => async (dispatch, getState) => {
    const hasItems = !!getState().products.products.length

    try{
       !hasItems && dispatch(startProductsLoading())
        const response = await fetch(`https://fakestoreapi.com/products?${qsHelper(params)}`);
        const data = await response.json();
        dispatch(setProducts(data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(endProductsLoading())
    }
}

