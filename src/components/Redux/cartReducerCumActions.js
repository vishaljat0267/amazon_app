
export const FETCH_CART_ITEMS_FAIL = "FETCH_CART_ITEMS_FAIL";
export const FETCH_CART_ITEMS_SUCCESS = "FETCH_CART_ITEMS_SUCCESS";
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS"

export const fetchCartItems = (payload) => ({ type: FETCH_CART_ITEMS, payload });
export const fetchCartItemsSuccess = (payload) => ({ type: FETCH_CART_ITEMS_SUCCESS, payload });
export const fetchCartItemsFail = (payload = null) => ({ type: FETCH_CART_ITEMS_FAIL, payload });

export const ADD_CART_ITEMS = "ADD_CART_ITEMS"
export const ADD_CART_ITEMS_SUCCESS = "ADD_CART_ITEMS_SUCCESS";
export const ADD_CART_ITEMS_FAIL = "ADD_CART_ITEMS_FAIL"

export const addCartItems = (payload) => ({ type: ADD_CART_ITEMS, payload });
export const addCartItemsSuccess = (payload) => ({ type: ADD_CART_ITEMS_SUCCESS, payload });
export const addCartItemsFail = (payload = null) => ({ type: ADD_CART_ITEMS_FAIL, payload });

export const DELETE_CART_ITEMS = "DELETE_CART_ITEMS"
export const DELETE_CART_ITEMS_SUCCESS = "DELETE_CART_ITEMS_SUCCESS";
export const DELETE_CART_ITEMS_FAIL = "DELETE_CART_ITEMS_FAIL"

export const deleteCartItems = (payload) => ({ type: DELETE_CART_ITEMS, payload });
export const deleteCartItemsSuccess = (payload) => ({ type: DELETE_CART_ITEMS_SUCCESS, payload });
export const deleteCartItemsFail = (payload = null) => ({ type: DELETE_CART_ITEMS_FAIL, payload });

export const UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS"
export const UPDATE_CART_ITEMS_SUCCESS = "UPDATE_CART_ITEMS_SUCCESS";
export const UPDATE_CART_ITEMS_FAIL = "UPDATE_CART_ITEMS_FAIL"

export const updateCartItems = (payload) => ({ type: UPDATE_CART_ITEMS, payload });
export const updateCartItemsSuccess = (payload) => ({ type: UPDATE_CART_ITEMS_SUCCESS, payload });
export const updateCartItemsFail = (payload = null) => ({ type: UPDATE_CART_ITEMS_FAIL, payload });

export const GET_CART_CARTITEMS_FAIL = "GET_CART_CARTITEMS_FAIL";
export const GET_CART_CARTITEMS_SUCCESS = "GET_CART_CARTITEMS_SUCCESS";
export const GET_CART_CARTITEMS = "GET_CART_CARTITEMS"

export const getCartcartItemsSuccess = (payload) => ({ type: GET_CART_CARTITEMS_SUCCESS, payload });
export const getCartcartItemsFail = (payload) => ({ type: GET_CART_CARTITEMS_FAIL, payload });
export const getCartcartItems = (payload) => ({ type: GET_CART_CARTITEMS, payload });

export const GET_CART_CARTITEMS1_FAIL = "GET_CART_CARTITEMS1_FAIL";
export const GET_CART_CARTITEMS1_SUCCESS = "GET_CART_CARTITEMS1_SUCCESS";
export const GET_CART_CARTITEMS1 = "GET_CART_CARTITEMS1"

export const getCartcartItems1Success = (payload) => ({ type: GET_CART_CARTITEMS1_SUCCESS, payload });
export const getCartcartItems1Fail = (payload) => ({ type: GET_CART_CARTITEMS1_FAIL, payload });
export const getCartcartItems1 = (payload) => ({ type: GET_CART_CARTITEMS1, payload });

export const GET_CART_CARTITEMS2_FAIL = "GET_CART_CARTITEMS2_FAIL";
export const GET_CART_CARTITEMS2_SUCCESS = "GET_CART_CARTITEMS2_SUCCESS";
export const GET_CART_CARTITEMS2 = "GET_CART_CARTITEMS2"

export const getCartcartItems2Success = (payload) => ({ type: GET_CART_CARTITEMS2_SUCCESS, payload });
export const getCartcartItems2Fail = (payload) => ({ type: GET_CART_CARTITEMS2_FAIL, payload });
export const getCartcartItems2 = (payload) => ({ type: GET_CART_CARTITEMS2, payload });

export const GET_CART_CARTITEMS3_FAIL = "GET_CART_CARTITEMS3_FAIL";
export const GET_CART_CARTITEMS3_SUCCESS = "GET_CART_CARTITEMS3_SUCCESS";
export const GET_CART_CARTITEMS3 = "GET_CART_CARTITEMS3"

export const getCartcartItems3Success = (payload) => ({ type: GET_CART_CARTITEMS3_SUCCESS, payload });
export const getCartcartItems3Fail = (payload) => ({ type: GET_CART_CARTITEMS3_FAIL, payload });
export const getCartcartItems3 = (payload) => ({ type: GET_CART_CARTITEMS3, payload });

export const GET_CART_CARTITEMS4_FAIL = "GET_CART_CARTITEMS4_FAIL";
export const GET_CART_CARTITEMS4_SUCCESS = "GET_CART_CARTITEMS4_SUCCESS";
export const GET_CART_CARTITEMS4 = "GET_CART_CARTITEMS4"

export const getCartcartItems4Success = (payload) => ({ type: GET_CART_CARTITEMS4_SUCCESS, payload });
export const getCartcartItems4Fail = (payload) => ({ type: GET_CART_CARTITEMS4_FAIL, payload });
export const getCartcartItems4 = (payload) => ({ type: GET_CART_CARTITEMS4, payload });



export const GET_SINGUP_DATA_FAIL = "GET_SINGUP_DATA_FAIL";
export const GET_SINGUP_DATA_SUCCESS = "GET_SINGUP_DATA_SUCCESS";
export const GET_SINGUP_DATA = "GET_SINGUP_DATA"

export const getSingupData = (payload) => ({ type: GET_SINGUP_DATA, payload });
export const getSingupDataSuccess = (payload) => ({ type: GET_SINGUP_DATA_SUCCESS, payload });
export const getSingupDataFail = (payload = null) => ({ type: GET_SINGUP_DATA_FAIL, payload });

export const GET_LOGIN_DATA_FAIL = "GET_LOGIN_DATA_FAIL";
export const GET_LOGIN_DATA_SUCCESS = "GET_LOGIN_DATA_SUCCESS";
export const GET_LOGIN_DATA = "GET_LOGIN_DATA"

export const getLoginData = (payload) => ({ type: GET_LOGIN_DATA, payload });
export const getLoginpDataSuccess = (payload) => ({ type: GET_LOGIN_DATA_SUCCESS, payload });
export const getLoginDataFail = (payload = null) => ({ type: GET_LOGIN_DATA_FAIL, payload });

const initialState = {

  loading: true,
  items: [],
}


export const cart = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("OOOOOOOOOOO",type, payload);
  switch (type) {
    // GET ALL CART ITEMS
    case FETCH_CART_ITEMS:
      return {
        loading: false,
        items: payload
      }
    case FETCH_CART_ITEMS_FAIL:
      return {
        loading: false,
        items: payload
      }
    case FETCH_CART_ITEMS_SUCCESS:
      return {
        loading: true,
        items: payload
      }
    // --------------------------------
    // ----- ADD TO CART --------------------
    case ADD_CART_ITEMS:
      return {
        loading: false,
        items: payload
      }
    case ADD_CART_ITEMS_SUCCESS:
      return {
        loading: true,
        items: payload
      }
    case ADD_CART_ITEMS_FAIL:
      return {
        loading: false,
        items: payload
      }
    // -------------------------------------------------------
    //  --------DELETE TO CART -------------------------
    // case DELETE_CART_ITEMS:
    //     return {
    //             loading : false,
    //             items : payload
    //     } 
    //   case DELETE_CART_ITEMS_SUCCESS:
    //   return {
    //           loading : true,
    //           items : payload
    //   } 
    //   case DELETE_CART_ITEMS_FAIL:
    //     return {
    //             loading : false,
    //             items : payload
    //     }


    //----------- UPDATE CART ITEMS-----------
    case UPDATE_CART_ITEMS:
      return {
        loading: false,
        items: payload
      }
    case UPDATE_CART_ITEMS_SUCCESS:
      return {
        loading: true,
        items: payload
      }
    case UPDATE_CART_ITEMS_FAIL:
      return {
        loading: false,
        items: payload
      }






    default:
      return state
  }
}


//-----------GET ALL PRODUCTS--------------------

const itemsState = {
  loading: true,
  cartitems: [],
}

export const allItems = (state = itemsState, action) => {
  const { type, payload } = action;
  // console.log("allItemsreducers",type, payload);
  switch (type) {
    case GET_CART_CARTITEMS:
      return {
        loading: false,
        cartitems: payload
      }
    case GET_CART_CARTITEMS_FAIL:
      return {
        loading: false,
        cartitems: payload
      }
    case GET_CART_CARTITEMS_SUCCESS:
      return {

        loading: true,
        cartitems: payload
      }

    default:
      return state
  }
}
const itemsState1 = {
  loading: true,
  cartitems1: []



}

export const allItems1 = (state = itemsState1, action) => {
  const { type, payload } = action;
  // console.log("allItemsreducers",type, payload);
  switch (type) {

    case GET_CART_CARTITEMS1:
      return {
        loading: false,
        cartitems1: payload
      }
    case GET_CART_CARTITEMS1_FAIL:
      return {
        loading: false,
        cartitems1: payload
      }
    case GET_CART_CARTITEMS1_SUCCESS:
      return {

        loading: true,
        cartitems1: payload
      }
    default:
      return state
  }
}
const itemsState2 = {
  loading: true,
  cartitems2: []



}

export const allItems2 = (state = itemsState2, action) => {
  const { type, payload } = action;
  // console.log("allItemsreducers",type, payload);
  switch (type) {

    case GET_CART_CARTITEMS2:
      return {
        loading: false,
        cartitems2: payload
      }
    case GET_CART_CARTITEMS2_FAIL:
      return {
        loading: false,
        cartitems2: payload
      }
    case GET_CART_CARTITEMS2_SUCCESS:
      return {

        loading: true,
        cartitems2: payload
      }
    default:
      return state
  }
}

const itemsState3 = {
  loading: true,
  cartitems3: []



}

export const allItems3 = (state = itemsState3, action) => {
  const { type, payload } = action;
  // console.log("allItemsreducers",type, payload);
  switch (type) {

    case GET_CART_CARTITEMS3:
      return {
        loading: false,
        cartitems3: payload
      }
    case GET_CART_CARTITEMS3_FAIL:
      return {
        loading: false,
        cartitems3: payload
      }
    case GET_CART_CARTITEMS3_SUCCESS:
      return {

        loading: true,
        cartitems3: payload
      }
    default:
      return state
  }
}

//----------------------------------------------------------//

const itemsState4 = {
  loading: true,
  cartitems4: []



}

export const allItems4 = (state = itemsState4, action) => {
  const { type, payload } = action;
  // console.log("allItemsreducers",type, payload);
  switch (type) {

    case GET_CART_CARTITEMS4:
      return {
        loading: false,
        cartitems4: payload
      }
    case GET_CART_CARTITEMS4_FAIL:
      return {
        loading: false,
        cartitems4: payload
      }
    case GET_CART_CARTITEMS4_SUCCESS:
      return {

        loading: true,
        cartitems4: payload
      }
    default:
      return state
  }
}

//-------------DELETE CART---------------------------------

const deleteitems = {
  loading: true,
  cartitems3: []



}

export const deleteitems1 = (state = deleteitems, action) => {
  const { type, payload } = action;
  // console.log("allItemsreducers", type, payload);
  switch (type) {

    case DELETE_CART_ITEMS:
      return {
        loading: false,
        items: payload
      }
    case DELETE_CART_ITEMS_SUCCESS:
      return {
        loading: true,
        items: payload
      }
    case DELETE_CART_ITEMS_FAIL:
      return {
        loading: false,
        items: payload
      }
    default:
      return state
  }
}


//---------------------------------signup data-------------

const signupdata = {
  loading: true,
  items: []



}

export const signupdata1 = (state = signupdata, action) => {
  const { type, payload } = action;


  // console.log(">>>>>>>>>>>",action); 
  switch (type) {

    case GET_SINGUP_DATA:
      return {
        loading: true,
        items: payload
      }
    case GET_SINGUP_DATA_SUCCESS:
      return {
        loading: true,
        items: payload
      }
    case GET_SINGUP_DATA_FAIL:
      return {
        loading: false,
        items: payload
      }
    default:
      return state
  }
}


//=========================================================////////// LOGIN  ===============================

const loginupdata = {
  loading: true,
  items: []

}

export const loginpdata1 = (state = loginupdata, action) => {
  const { type, payload } = action;


  // console.log(">>>>>>>>>>>", payload);
  switch (type) {

    case GET_LOGIN_DATA:
      return {
        loading: true,
        items: payload
      }
    case GET_LOGIN_DATA_SUCCESS:
      return {
        loading: true,
        items: payload.data
      }
    case GET_LOGIN_DATA_FAIL:
      return {
        loading: false,
        items: payload
      }


    default:
      return state
  }
}











