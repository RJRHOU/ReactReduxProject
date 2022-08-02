import React from "react";
import {Link} from 'react-router-dom';
import style from './Inventory.module.css';

import { useDispatch, useSelector } from "react-redux";
import {
    loadCurrentItem, adjustQty, addToCart } from "../../redux/Shopping/shopping-actions";

const Product = ({ product}) => {
    const dispatch = useDispatch()

const cart = useSelector(state => state.shop.cart);

const adjustCart = item => {
    const cartItem = cart.filter(product => product.id === item.id )
    const isInCart = !!cartItem.length
    if (!isInCart) {
        item.qty = 1
        addToCart(dispatch, item)
    } else {
        let cartCopy = cart.filter(cartItem => cartItem.id !== item.id)
        cartItem[0].qty += 1
        cartCopy.push(cartItem[0])
        adjustQty(dispatch, cartCopy)
    }
}

const setCurrentItem = item =>{
    loadCurrentItem(dispatch, item)
}

return (
    <div className={style.product}>
        <img 
        className={style.product_image}
        src={product.image}
        alt={product.title}
        />
   

    <div className={style.product_details}>
        <p classname={style.details_title}>{product.title}</p>
        <p classname={style.details_desc}>{product.description}</p>
        <p classname={style.deatils_price}>$ {product.price}</p>
    </div>

    <div className={style.product_buttons}>
        <Link to={`/product/${product.id}`}>
        <button
        onClick={() => setCurrentItem(product)}
        className={`${style.buttons_btn} ${style.bttnview}`}
        >
            View Item
        </button>

        </Link>
        <button
            onClick={() => adjustCart(product)}
            className={`${style.buttons_btn} ${style.bttnadd}`}
            >
            Add To Cart    
            </button>
    </div>
    </div>
)

};

export default Product;