import {combineReducers} from "redux";
import products from './produts-reducer';
import loading from './loading-reducer';
import cartReducer from './cart-reducer';
import wishlistReducer from './wishlist-reducer';


export const reducer = combineReducers({
    products,
    loading,
    cart: cartReducer,
    wishlist: wishlistReducer
})