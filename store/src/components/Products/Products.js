import React from 'react'
import styles from './Products.module.css'
import { connect } from 'react-redux';
import Inventory from "./Inventory"

const Products = ({products}) => {
  return (
    <div classname = {styles.products}>
      {products.map((product) =>(
        <Inventory key={product.id} product={product}/>
      ))}
      
    </div>
  );
};

const mapStateToProps =(state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);