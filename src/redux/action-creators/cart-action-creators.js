import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from "../action-types";


const addProductToCart = (id) => ({type: ADD_PRODUCT_TO_CART, payload: id});
const removeProductFromCart = (id) => ({type: REMOVE_PRODUCT_FROM_CART, payload: id});

const toggleItemInCart = (id) => (dispatch, getState) => {
    // console.log(id, getState())
    const {cart: {productsInCart}} = getState();

    const alreadyExist = !!productsInCart.find(el => el === id);

    // alreadyExist ? dispatch(removeProductFromCart(id)) : dispatch(addProductToCart(id))

    dispatch(alreadyExist ? removeProductFromCart(id) : addProductToCart(id));
}

export {
    addProductToCart,
    removeProductFromCart,
    toggleItemInCart
}