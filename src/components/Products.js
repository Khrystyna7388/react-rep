import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {fetchData, toggleItemInCart, toggleItemInWishlist} from "../redux/action-creators";
import {Product} from "./Product";

const LIMIT_STEP = 5;

export const Products = () => {
    const {products, isLoading} = useSelector(({products: {products}, loading: {isLoading}}) => ({
        products,
        isLoading
    }));
    const {productsInCart} = useSelector(store => store.cart);
    // console.log(productsInCart.length)
    const {productsInWishlist} = useSelector(store => store.wishlist);
    const [currentLimit, setCurrentLimit] = useState(LIMIT_STEP);
    const history = useHistory();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData({limit: currentLimit}))
    }, [currentLimit])

    return (
        <>
            <h2 onClick={() => history.push('/men-clothing')}>Men Clothing</h2>
            <h2 onClick={() => history.push('/sort=asc')}>Asc Sort</h2>

            <div className="product-wrapper">
                {isLoading && (
                    <h2>loading...</h2>
                )}

                {!isLoading && !!products.length && products.map(el => (
                    <div className="product-item" key={el.id} onClick={() => history.push(`/products/${el.id}`)}>
                        <Product
                            product={el}
                            onCartClick={() => dispatch(toggleItemInCart(el.id))}
                            onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                            isInCart={productsInCart.includes(el.id)}
                            isInWishlist={productsInWishlist.includes(el.id)}
                        />
                    </div>
                ))}
            </div>
            {products.length < 20 &&
            <button onClick={() => setCurrentLimit(prev => prev += LIMIT_STEP)}>load more</button>}
        </>
    )
}


{/*{!isLoading && !!products.length && products.map(el =>*/
}
{/*    <div key={el.id} className="product-item">*/
}
{/*    <h2>{el.title}</h2>*/
}
{/*    <img style={{width: '60%'}} src={el.image}/>*/
}
{/*    <h3>{el.price}</h3>*/
}
{/*    <p>{el.description}</p>*/
}

{/*    <button style={{backgroundColor: productsInWishlist.includes(el.id) ? 'red' : ''}}*/
}
{/*            onClick={() => dispatch(toggleItemInWishlist(el.id))}>*/
}
{/*        {productsInWishlist.includes(el.id) ? 'remove from wishlist' : 'add to wishlist'}*/
}
{/*    </button>*/
}

{/*    <button style={{*/
}
{/*        backgroundColor: productsInCart.includes(el.id) ? 'red' : ''*/
}
{/*    }}*/
}
{/*            onClick={() => dispatch(toggleItemInCart(el.id))}>{productsInCart.includes(el.id) ?*/
}
{/*        'remove from cart' : 'add to cart'}</button>*/
}

{/*    <hr/>*/
}
{/*</div>)}*/
}