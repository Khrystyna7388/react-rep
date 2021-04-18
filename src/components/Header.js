import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export const Header = () => {
    const products = useSelector(({products: {products}}) => products);
    const {productsInCart} = useSelector(store => store.cart);
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const history = useHistory();

    const calculatedCartSum = useMemo(() => {
        return products.filter(el => productsInCart.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInCart]);
    const calculatedWishlistSum = useMemo(() => {
        return products.filter(el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInWishlist])

    return (
        <header>
            <h2 onClick={() => history.push('/')}>HEADER</h2>

            <div className="container">

                <span>
                    wishlist: {productsInWishlist.length} ($ {calculatedWishlistSum})
                </span>

                <span>
                    cart: {productsInCart.length} ($ {calculatedCartSum})
                </span>
            </div>
        </header>
    )
}