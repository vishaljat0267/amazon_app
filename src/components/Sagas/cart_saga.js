import { call, put, takeEvery, takeLatest, } from 'redux-saga/effects'
import {addNewItemToCart,getAllCartItems,deleteNewItemToCart} from '../Services/cartservice'
import {FETCH_CART_ITEMS,fetchCartItemsFail,fetchCartItemsSuccess,fetchCartItems,
   ADD_CART_ITEMS, addCartItemsFail, addCartItemsSuccess,DELETE_CART_ITEMS,deleteCartItemsFail,deleteCartItemsSuccess} from '../Redux/cartReducerCumActions'


// FETCH ALL CART DATA
function* fetchCartItemsList() {
   
   try { 
    const {data} = yield call(getAllCartItems);
    console.log("vvvvvvvvvvvv",data?.data?.length);
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

