import React, {useState} from "react";
import style from './Cart.module.css'
import { connect } from 'react-redux';

import {
    adjustQty,
    removeFromCart,
    
} from "../../redux/Shopping/shopping-actions"; 

const CartItem = ({ item, adjustQty, removeFromCart}) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };

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

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id,value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),

    };
};

export default connect(null, mapDispatchToProps)(CartItem);