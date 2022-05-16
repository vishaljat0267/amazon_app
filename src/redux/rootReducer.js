 import { combineReducers } from '@reduxjs/toolkit'
import {cart,allItems, allItems1, allItems2,allItems3} from '../components/Redux/cartReducerCumActions'

 
 const rootReducer = combineReducers({
    cart,
    allItems,
    allItems1,
    allItems2,
    allItems3
  })

  export default rootReducer