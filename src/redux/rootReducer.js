 import { combineReducers } from '@reduxjs/toolkit'
import {cart,allItems, allItems1, allItems2,allItems3,allItems4,deleteitems1, signupdata1,loginpdata1} from '../components/Redux/cartReducerCumActions'

 
 const rootReducer = combineReducers({
    cart,
    allItems,
    allItems1,
    allItems2,
    allItems3,
    allItems4,
    deleteitems1,
    signupdata1,
    loginpdata1
    
  })

  export default rootReducer