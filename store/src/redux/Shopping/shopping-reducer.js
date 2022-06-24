import* as actionTypes from './shopping-types';
import { useState, useEffect } from 'react';





const shopReducer = (state = FullStore, action) => {
    switch(action.type) {
        case actionTypes.Add_To_Cart:
            //check if item is in cart alraedy and get items data from the array
            const item = state.products.find(product => product.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                    ...state,
                    cart: inCart ? state.cart.map(item =>item.id === action.payload.id
                         ? {...item, qty: item.qty + 1} : item) :
                         [...state.cart, {...item,qty:1}],
            };
        case actionTypes.Remove_From_Cart:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
            

        case actionTypes.Adjust_Qty:
            return{
                ...state, 
                cart: state.cart.map((item) => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            } 
        case actionTypes.Load_Current_Item:
            return{
                ...state, 
                currentItem: action.payload,
            }        
        default:
            return state;
    }
}

export default shopReducer;