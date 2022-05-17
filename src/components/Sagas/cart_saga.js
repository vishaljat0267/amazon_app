import { call, put, takeEvery, takeLatest, } from 'redux-saga/effects'
import {addNewItemToCart,getAllCartItems,deleteNewItemToCart, updateNewItemToCart, getitmesList1, getitmesList2, getitmesList3, getitmesList4} from '../Services/cartservice'
import {FETCH_CART_ITEMS,fetchCartItemsFail,fetchCartItemsSuccess,fetchCartItems,
   ADD_CART_ITEMS, addCartItemsFail, addCartItemsSuccess,DELETE_CART_ITEMS,deleteCartItemsFail,deleteCartItemsSuccess, updateCartItemsSuccess, updateCartItemsFail, UPDATE_CART_ITEMS, getCartItemsFail, getCartItemsSuccess,GET_CART_CARTITEMS,GET_CART_CARTITEMS_SUCCESS, getCartcartItemsSuccess, getCartcartItemsFail, GET_CART_CARTITEMS1, getCartcartItems1Fail, getCartcartItems1Success, GET_CART_CARTITEMS2, getCartcartItems2Fail, getCartcartItems2Success, getCartcartItems3Success, getCartcartItems3Fail} from '../Redux/cartReducerCumActions'


// FETCH ALL CART DATA
function* fetchCartItemsList() {
   
   try { 
    const {data} = yield call(getAllCartItems);
   //  console.log("vvvvvvvvvvvv",data?.length);
    yield put(fetchCartItemsSuccess(data?.data));
   } catch (e) {
      yield put(fetchCartItemsFail(e));
   }
}

export function* watchCartItemList() {
   yield takeLatest(FETCH_CART_ITEMS, fetchCartItemsList);
 }




// ADD TO CART
function* addcartItemsList(payload){
   try{
      // console.log(">##########", payload);

      const data = yield call(addNewItemToCart,payload);
      // console.log(">>>>>>>>>", data);
      yield put(fetchCartItems());
        }catch (e) {
           yield put(addCartItemsFail(e));
        }
}

export function* watchAddToCart() {
   yield takeLatest(ADD_CART_ITEMS, addcartItemsList);
 }


// DELETE TO ITEMS CART

function* deletecartItemsList(payload){
   try{
      const data = yield call(deleteNewItemToCart,payload);
      // console.log(">>>>>>>>>", data);
          yield put(deleteCartItemsSuccess([])); 
          yield put(fetchCartItems()); // Dispatch Action
          
        }catch (e) {
          yield put(deleteCartItemsFail(e));
        }
}

export function* watchDeleteToCart() {
   yield takeLatest(DELETE_CART_ITEMS, deletecartItemsList);
 }


 // UPDATE TO ITEMS CART

 function* updatecartItemsList(payload){
   try{
      // console.log(payload);
      const data = yield call(updateNewItemToCart,payload);
      // console.log(">>>>>>>>>", data);
          yield put(updateCartItemsSuccess([])); 
          yield put(fetchCartItems()); // Dispatch Action
          
        }catch (e) {
          yield put(updateCartItemsFail(e));
        }
}

export function* watchUpdateToCart() {
   yield takeLatest(UPDATE_CART_ITEMS, updatecartItemsList);
 }

 //------------Get items----------
 function* getCartItemsList() {
   
   try { 
    const {data} = yield call( getitmesList1 );
   //  console.log("saga",data);

    yield put(getCartcartItemsSuccess(data?.data));
   
   } catch (e) {
      yield put(getCartcartItemsFail(e));
   }
}

export function* watchCartItemList1() {
   yield takeLatest(GET_CART_CARTITEMS, getCartItemsList);
 }
 //----------------------------------------------//
 function* getCartItemsList1() {
   
   try { 
    const {data} = yield call( getitmesList2 );
   //  console.log("saga",data);
    yield put(getCartcartItems1Success(data?.data));

   } catch (e) {
      yield put(getCartcartItems1Fail(e));
   }
}

export function* watchCartItemList2() {
   yield takeLatest(GET_CART_CARTITEMS1, getCartItemsList1);
 }

 //--------------------------------------------//
 function* getCartItemsList2() {
   
   try { 
    const {data} = yield call(getitmesList4 );
   //  console.log("saga",data);
    yield put(getCartcartItems2Success(data?.data));

   } catch (e) {
      yield put(getCartcartItems2Fail(e));
   }
}

export function* watchCartItemList3() {
   yield takeLatest(GET_CART_CARTITEMS2, getCartItemsList2);
 }
 //--------------------------------------------//
 function* getCartItemsList3() {
   
   try { 
    const {data} = yield call(getitmesList3 );
   //  console.log("saga",data);
    yield put(getCartcartItems3Success(data?.data));

   } catch (e) {
      yield put(getCartcartItems3Fail(e));
   }
}

export function* watchCartItemList4() {
   yield takeLatest(GET_CART_CARTITEMS2, getCartItemsList3);
 }

