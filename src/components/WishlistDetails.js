import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./Product";
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";

export const WishlistDetails = () => {
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(stop => stop.wishlist);
    const dispatch = useDispatch();

    const [wishlist, setWishlist] = useState([]);

    const fetchWishlist = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json()
            setWishlist(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchWishlist()
    }, [])

    return(
        <div>
            {wishlist.filter(el => productsInWishlist.includes(el.id)).map(el =>
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