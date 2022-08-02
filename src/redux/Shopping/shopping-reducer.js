
import { LOAD_ALL_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, LOAD_CURRENT_ITEM, TOTAL_CART_PRICE} from './shopping-types'

const initialState = {
  products:[],
  cart: [],
  currentItem: {}
}

const shopReducer = ( state = initialState ,  action) => {
  switch(action.type) {
    case LOAD_ALL_PRODUCTS:
      return {...state, products: action.payload }
    case ADD_TO_CART:
      return { ...state, cart: [ ...state.cart, action.payload] }
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload }
    case ADJUST_QTY:
      return { ...state, cart: action.payload }
    case LOAD_CURRENT_ITEM:
      return { ...state, currentItem: action.payload}
    case TOTAL_CART_PRICE:
      return {...state, cart: [...state.cart.totalPrice, action.payload] }  
    default:
      return state;
  }              
  
}

export default shopReducer;