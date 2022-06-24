import React, {useState, useEffect} from "react";
import style from './Cart.module.css'

import { connect } from 'react-redux';

import CartItem from "./CartItem";
const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] =useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items=0;
        let price =0;

        cart.forEach((item)=> {
            items += item.qty;
            price += item.qty * item.price;
        });
        
        setTotalItems(items);
        setTotalPrice(price);
        }, [cart,totalPrice, totalItems, setTotalPrice, setTotalItems]);

        return (
            <div >
                <div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item}/>
                    ) )}
                    
                </div>
                <h4 className={style.total}>Cart Summary</h4>
                <div>
                    <span className={style.total}> Total: ({totalItems} items)</span>
                    <span>$ {totalPrice}</span>
                </div>
                <button className={style.total}>Checkout</button>
            </div>
        );
};

const mapStateToProps = (state) => {
    return {
        cart:state.shop.cart,
    }
}

export default connect (mapStateToProps)(Cart);