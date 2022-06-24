import * as actionTypes from './shopping-types';

export const addToCart =(itemID) => {
    return {
        type: actionTypes.Add_To_Cart,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart =(itemID) => {
    return {
        type: actionTypes.Remove_From_Cart,
        payload:{
            id: itemID
        }
    }
}

export const adjustQty= (itemID ,value) =>{
    return {
        type:actionTypes.Adjust_Qty,
        payload:{
            id: itemID,
            qty:value,
        },
    }
}

export const loadCurrentItem =(item) => {
    return {
        type: actionTypes.Load_Current_Item,
        payload: item,
    }
}