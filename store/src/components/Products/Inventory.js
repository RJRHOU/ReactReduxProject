import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import style from './Inventory.module.css';

import { connect } from "react-redux";
import {
    loadCurrentItem,
    addToCart,
} from "../../redux/Shopping/shopping-actions";



const Product = ({ product, addToCart , loadCurrentItem}) => {
    

//export default function Joke() {
const [fullStore, setFullStore] = useState("");

  useEffect(() => {
      console.log("inside of useEffect")
      fullStoreFunc();
  }, []);

  const fullStoreFunc = () => {
      fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
              console.log(data.value);
              setFullStore(data.value)
          });
  };




const FullStore = {
    products:fullStore,
    
    cart:[],
    currentItem: null,
};
    

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
            onClick={() => loadCurrentItem(product)}
            className={`${style.buttons_btn} ${style.bttnview}`}
            >
                View Item
            </button>

            </Link>
            <button
                onClick={() => addToCart(product.id)}
                className={`${style.buttons_btn} ${style.bttnadd}`}
                >
                Add To Cart    
                </button>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Product);