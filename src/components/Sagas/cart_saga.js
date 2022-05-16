import { call, put, takeEvery, takeLatest, } from 'redux-saga/effects'
import {addNewItemToCart,getAllCartItems,deleteNewItemToCart, updateNewItemToCart, getitmesList1, getitmesList2, getitmesList3, getitmesList4} from '../Services/cartservice'
import {FETCH_CART_ITEMS,fetchCartItemsFail,fetchCartItemsSuccess,fetchCartItems,
   ADD_CART_ITEMS, addCartItemsFail, addCartItemsSuccess,DELETE_CART_ITEMS,deleteCartItemsFail,deleteCartItemsSuccess, updateCartItemsSuccess, updateCartItemsFail, UPDATE_CART_ITEMS, getCartItemsFail, getCartItemsSuccess,GET_CART_ITEMS,GET_CART_ITEMS_SUCCESS} from '../Redux/cartReducerCumActions'


// FETCH ALL CART DATA
function* fetchCartItemsList() {
   
   try { 
    const {data} = yield call(getAllCartItems);
    console.log("vvvvvvvvvvvv",data?.length);
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
      console.log(">##########", payload);

      const data = yield call(addNewItemToCart,payload);
      console.log(">>>>>>>>>", data);
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
      console.log(">>>>>>>>>", data);
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
      console.log(payload);
      const data = yield call(updateNewItemToCart,payload);
      console.log(">>>>>>>>>", data);
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
    console.log("saga",data);

    yield put(getCartItemsSuccess(data?.data));
   //  const {data1} = yield call( getitmesList2 );
   //  console.log("saga",data1);

   //  yield put(getCartItemsSuccess(data1?.data));
   //  const {data2} = yield call( getitmesList3 );
   //  console.log("saga",data2);

   //  yield put(getCartItemsSuccess(data2?.data));
   //  const {data3} = yield call( getitmesList4 );
   //  console.log("saga",data3);
   //  yield put(getCartItemsSuccess(data3?.data));
   } catch (e) {
      yield put(getCartItemsFail(e));
   }
}

export function* watchCartItemList1() {
   yield takeLatest(GET_CART_ITEMS, getCartItemsList);
 }
 //----------------------------------------------//
 function* getCartItemsList1() {
   
   try { 
    const {data1} = yield call( getitmesList2 );
    console.log("saga",data1);
    yield put(getCartItemsSuccess(data1?.data));

   } catch (e) {
      yield put(getCartItemsFail(e));
   }
}

export function* watchCartItemList2() {
   yield takeLatest(GET_CART_ITEMS, getCartItemsList1);
 }


