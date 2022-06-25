import { LOAD_ALL_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, LOAD_CURRENT_ITEM} from './shopping-types'

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
    default:
      return state;
  }              
  
}

export default shopReducer;