import React from "react";

export const Product = ({product, onCartClick, onWishlistClick, isInCart, isInWishlist}) => (

    <div key={product.id}>
        <h2>{product.title}</h2>
        <div style={{height: '200px'}}>
            <img style={{height: '100%'}} src={product.image}/>
        </div>
        <h3>{product.price} $</h3>
        <p>{product.description}</p>

        <button style={{
            backgroundColor: isInWishlist ? 'red' : ''
        }}
                onClick={onWishlistClick}
        >
            {isInWishlist ? 'remove from wishlist' : 'add to wishlist'}
        </button>

        <button style={{
            backgroundColor: isInCart ? 'red' : ''
        }}
                onClick={onCartClick}
        >
            {isInCart ? 'remove from cart' : 'add to cart'}</button>

        <hr/>
    </div>)