import React, {useEffect, useState} from "react";
import {Product} from "./Product";
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";
import {useDispatch, useSelector} from "react-redux";

export const MenClothingCategory = () => {
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const dispatch = useDispatch();
    const [menClothingCategory, setMenClothingCategory] = useState([]);


    const fetchMenClothingCategory = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setMenClothingCategory(data);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchMenClothingCategory()
    }, [])

    
    return(
        <div>
            <div>
                {
                    menClothingCategory.filter(el => el.category === 'men clothing').map(el =>
                        <Product
                            key={el.id}
                            product={el}
                            onCartClick={() => dispatch(toggleItemInCart(el.id))}
                            onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                            isInCart={productsInCart.includes(el.id)}
                            isInWishlist={productsInWishlist.includes(el.id)}
                        />)}
            </div>
        </div>
    )
}