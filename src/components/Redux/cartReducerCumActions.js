
export const FETCH_CART_ITEMS_FAIL = "FETCH_CART_ITEMS_FAIL";
export const FETCH_CART_ITEMS_SUCCESS = "FETCH_CART_ITEMS_SUCCESS";
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS"

export const fetchCartItemsSuccess = (payload) => ({ type:FETCH_CART_ITEMS_SUCCESS, payload });
export const fetchCartItemsFail= (payload) => ({ type:FETCH_CART_ITEMS_FAIL, payload });
export const fetchCartItems= (payload) => ({ type:FETCH_CART_ITEMS, payload });

export const ADD_CART_ITEMS = "ADD_CART_ITEMS"
export const ADD_CART_ITEMS_SUCCESS = "ADD_CART_ITEMS_SUCCESS";
export const ADD_CART_ITEMS_FAIL = "ADD_CART_ITEMS_FAIL"

export const addCartItems = (payload) => ({ type:ADD_CART_ITEMS, payload});
export const addCartItemsSuccess = (payload) => ({ type: ADD_CART_ITEMS_SUCCESS, payload});
export const addCartItemsFail = (payload=null) => ({ type: ADD_CART_ITEMS_FAIL, payload});

export const DELETE_CART_ITEMS = "DELETE_CART_ITEMS"
export const DELETE_CART_ITEMS_SUCCESS = "DELETE_CART_ITEMS_SUCCESS";
export const DELETE_CART_ITEMS_FAIL = "DELETE_CART_ITEMS_FAIL"

export const deleteCartItems = (payload) => ({ type: DELETE_CART_ITEMS, payload});
export const deleteCartItemsSuccess = (payload) => ({ type: DELETE_CART_ITEMS_SUCCESS, payload});
export const deleteCartItemsFail = (payload=null) => ({ type: DELETE_CART_ITEMS_FAIL, payload});

export const UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS"
export const UPDATE_CART_ITEMS_SUCCESS = "UPDATE_CART_ITEMS_SUCCESS";
export const UPDATE_CART_ITEMS_FAIL = "UPDATE_CART_ITEMS_FAIL"

export const updateCartItems = (payload) => ({ type: UPDATE_CART_ITEMS, payload});
export const updateCartItemsSuccess = (payload) => ({ type: UPDATE_CART_ITEMS_SUCCESS, payload});
export const updateCartItemsFail = (payload=null) => ({ type: UPDATE_CART_ITEMS_FAIL, payload});

export const GET_CART_ITEMS_FAIL = "GET_CART_ITEMS_FAIL";
export const GET_CART_ITEMS_SUCCESS = "GET_CART_ITEMS_SUCCESS";
export const GET_CART_ITEMS = "GET_CART_ITEMS"

export const getCartItemsSuccess = (payload) => ({ type: GET_CART_ITEMS_SUCCESS, payload });
export const getCartItemsFail= (payload) => ({ type: GET_CART_ITEMS_FAIL, payload });
export const getCartItems= (payload) => ({ type: GET_CART_ITEMS, payload });

const initialState = {
        cartitems:[],
        loading : true,
        items : [],
  }
  
  
  function cart(state = initialState, action) {
    const { type, payload } = action;
    console.log("OOOOOOOOOOOOOOOOOOOOOO",type, payload);
    switch (type) {
      // GET ALL CART ITEMS
      case FETCH_CART_ITEMS:
        return {
                loading : false,
                items : payload
        } 
      case FETCH_CART_ITEMS_FAIL:
        return {
                loading : false,
                items : payload
        } 
        case FETCH_CART_ITEMS_SUCCESS:
          return {
                loading : true,
                items : payload
          } 
        // --------------------------------
        // ----- ADD TO CART --------------------
        case ADD_CART_ITEMS:
          return {
                  loading : false,
                  items : payload
          } 
        case ADD_CART_ITEMS_SUCCESS:
        return {
                loading : true,
                items : payload
        } 
        case ADD_CART_ITEMS_FAIL:
          return {
                  loading : false,
                  items : payload
          }
  // -------------------------------------------------------
  //  --------DELETE TO CART -------------------------
case DELETE_CART_ITEMS:
    return {
            loading : false,
            items : payload
    } 
  case DELETE_CART_ITEMS_SUCCESS:
  return {
          loading : true,
          items : payload
  } 
  case DELETE_CART_ITEMS_FAIL:
    return {
            loading : false,
            items : payload
    }
 //----------- UPDATE CART ITEMS-----------
 case UPDATE_CART_ITEMS:
        return {
                loading : false,
                items : payload
        } 
      case UPDATE_CART_ITEMS_SUCCESS:
      return {
              loading : true,
              items : payload
      } 
      case UPDATE_CART_ITEMS_FAIL:
        return {
                loading : false,
                items : payload
        }

        // ------------get items -----------------

        case GET_CART_ITEMS:
                return {
                        loading : false,
                        cartitems : payload
                } 
              case GET_CART_ITEMS_FAIL:
                return {
                        loading : false,
                        cartitems : payload
                } 
                case GET_CART_ITEMS_SUCCESS:
                  return {
                //        ...state,cartitems:[...state.cartitems,payload],loading:true
                loading : true,
                cartitems : payload
                  } 
  

      default:
        return state
    }
  }

 

  
  
  
  export default cart
 
 
  