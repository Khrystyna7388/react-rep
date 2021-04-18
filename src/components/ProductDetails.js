import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Product} from "./Product";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";

export const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null)
    const params = useParams();

    const {products} = useSelector(({products: {products}}) => products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const dispatch = useDispatch();

    const fetchItem =  async () => {
        if(!params.id) return;

        try {
            setIsLoading(true);
            const resp = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const data = await resp.json();
            setProduct(data);
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchItem()
    }, [])

    return(
        <div>
            {!isLoading && !!product && <Product
                product={product}
                onCartClick={() => dispatch(toggleItemInCart(product.id))}
                onWishlistClick={() => dispatch(toggleItemInWishlist(product.id))}
                isInCart={productsInCart.includes(product.id)}
                isInWishlist={productsInWishlist.includes(product.id)}
            />}
            {isLoading &&
            <h1>loading...</h1>}
        </div>)
}