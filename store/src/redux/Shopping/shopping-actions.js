import { LOAD_ALL_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, LOAD_CURRENT_ITEM, TOTAL_CART_PRICE} from './shopping-types'

export const loadAllProducts = (dispatch, products) => {
    return dispatch ({ type: LOAD_ALL_PRODUCTS, payload: products})
}

export const addToCart = ( dispatch, item) => {
    return dispatch ({type: ADD_TO_CART, payload: item })
}

export const removeFromCart =(dispatch, item) => {
    return dispatch ({type: REMOVE_FROM_CART, payload: item})
}

export const adjustQty = (dispatch, id, qty) => {
    return dispatch ({ type: ADJUST_QTY, payload: id, qty})
}
export const loadCurrentItem = ( dispatch, item) => {
    return dispatch ({ type: LOAD_CURRENT_ITEM, payload: item})
}
export const totalCartPrice =(dispatch, item) => {
    return dispatch ({ type: TOTAL_CART_PRICE, payload: item })
}

