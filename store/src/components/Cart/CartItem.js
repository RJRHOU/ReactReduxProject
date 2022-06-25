import React, {useState} from "react";
import style from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux';

import {
    adjustQty
    
} from "../../redux/Shopping/shopping-actions"; 

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState(item.qty)
    const cart = useSelector(state => state.shop.cart)

    const onChangeHandler = (e) => {
        const cartItem = cart.filter(product => product.id === item.id)
        let cartCopy = cart.filter(cartItem => cartItem.id !== item.id)
        cartItem[0].qty = e.target.value
        cartCopy.push(cartItem[0])
        setInput(e.target.value);
        adjustQty(dispatch, cartCopy);
    };

    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId)
        adjustQty(dispatch, newCart)
    }

    return(
        <div className={style.product}>
            <img className={style.product_image}
            src={item.image}
            alt={item.title}
            />
            <div>
                <p> {item.title}</p>
                <p> {item.description}</p>
                <p> $ {item.price}</p>
            </div>

            <div>
                <div>
                    <label htmlFor="qty">Qty</label>
                    <input 
                        min='1'
                        type='number'
                        id='qty'
                        name='qty'
                        value={input}
                        onChange={onChangeHandler}
                        />
                </div>
                
                <button 
                    onClick={() => removeFromCart(item.id)}
                    >
                    <img className={style.trash}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRateOZaIYcbtdnJ87VaHCC9zehgdHcc_mDSXC0ffA93kBoP5w5j35rGWWKvCV5sZlrimY&usqp=CAU"
                    alt="Delete Button"
                    />
                    </button>
            </div>

        </div>
    );
};


export default CartItem;