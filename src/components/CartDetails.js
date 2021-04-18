import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";
import {Product} from "./Product";

export const CartDetails = () => {
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const [cartList, setCartList] = useState([]);
    const dispatch = useDispatch();


    const fetchCart = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setCartList(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])


    return(
        <div>

            {cartList.filter(el => productsInCart.includes(el.id)).map(el =>
                <Product
                    key={el.id}
                    product={el}
                    onCartClick={() => dispatch(toggleItemInCart(el.id))}
                    onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                    isInCart={productsInCart.includes(el.id)}
                    isInWishlist={productsInWishlist.includes(el.id)}
                />)}

        </div>
    )
}