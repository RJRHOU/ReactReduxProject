import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'
import Inventory from "./Inventory"
import { loadAllProducts } from '../../redux/Shopping/shopping-actions';

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.shop.products);
//pulling store API fro products in json
  const loadStore = async () => {
    const apiData = await fetch("https://fakestoreapi.com/products")
    const jsonData = await apiData.json()
    loadAllProducts(dispatch, jsonData)
};

//without teh empty array loadstore kept looping
  useEffect(() => {
    loadStore()
  }, [])

  return (
    <div className = {styles.products}>
      {products.map((product) =>(
        <Inventory key={product.id} product={product}/>
      ))}
      
    </div>
  );
};


export default Products;