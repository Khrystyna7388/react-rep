import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./Product";
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";

export const AscSort = () => {
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const dispatch = useDispatch();

    const [ascSort, setAscSort] = useState([]);

    const fetchAscSort = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setAscSort(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchAscSort()
    }, [])

    return (
        <div>
            {ascSort.sort((a, b) => a.price - b.price).map(el =>
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