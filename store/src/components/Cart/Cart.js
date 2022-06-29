import React, {useState, useEffect} from "react";
import style from './Cart.module.css'
import { useSelector } from 'react-redux';
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const cart = useSelector(state => state.shop.cart);  
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let price =0;

        cart.forEach((item)=> {
            price += item.qty * item.price;
        });
        
        setTotalItems(cart.length );
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
                <Link to='/stripeContainer'  >
                    <button  className={style.total}>Checkout</button>
                </Link>
                
            </div>
        );
};


export default Cart;