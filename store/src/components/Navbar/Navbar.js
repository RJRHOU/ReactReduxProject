import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import style from './Navbar.module.css';



const Navbar = ( {cart} ) => {

   const [cartCount, setCartCount] = useState(0)

   useEffect (() => {
        let count =0;
        cart.forEach((item) => {
            count += (item.qty  * 1);
        } );

        setCartCount(count);
   }, [cart, cartCount]);

    return (
        <nav  className={style.navbar}>
        
        <Link to='/' className={style.navlogo} >
            <h2  >HOT MESS</h2>
        </Link>

        <Link to='/products' className={style.navlink}>
            <h3 >SHOP</h3>
        </Link>

        <Link to='/cart' className={style.navlink}>
            <div >
                <h3 >Cart</h3>
                <img className={style.cart__image}
                src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png"
                alt="shopping cart" />
                <div >{cartCount}</div>
            </div>

        </Link>
        
        </nav>
    )
}

const mapStateToProps = (state) =>{   
     return {
        cart: state.shop.cart,
    }
}
export default connect(mapStateToProps)(Navbar);