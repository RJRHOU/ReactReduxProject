import React from 'react';
import { useDispatch } from 'react-redux';
import style from './SingleItem.module.css'
import { addToCart, adjustQty } from '../../redux/Shopping/shopping-actions'; 
import { useSelector } from 'react-redux';


//loads current item for a larger image on new page, but still allows user to add to cart

const SingleItem =() => {
    const dispatch = useDispatch();

    const currentItem = useSelector(state => state.shop.currentItem);
    const cart = useSelector(state => state.shop.cart);

    const adjustCart = item => {
        const cartItem = cart.filter(product => product.id === item.id)
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

    return (
        <div className={style.product} >
           <img className={style.product_image}
           src={currentItem.image}
           alt={currentItem.title}
           />
            <div className={style.info} >
                <p>
                    {currentItem.description}
                </p>
            
                <p>
                    $ {currentItem.price}
                </p>

                <button onClick={() => adjustCart(currentItem)}>Add To Cart</button>
            </div>

        </div>

        

    );
};

export default SingleItem;

