import { all, fork } from 'redux-saga/effects'
import {watchAddToCart,watchCartItemList,watchCartItemList1,watchCartItemList2,watchCartItemList3,watchCartItemList4,watchDeleteToCart, watchLoginDataList1, watchSignupDataList1, watchUpdateToCart } from '../components/Sagas/cart_saga'

function* forkAllWatchers() {
    yield all([
       fork(watchAddToCart),
       fork(watchCartItemList),
       fork(watchDeleteToCart),
       fork(watchUpdateToCart),
       fork( watchCartItemList1),
       fork(watchCartItemList2),
       fork(watchCartItemList3),
       fork(watchCartItemList4),
       fork(watchSignupDataList1),
       fork(watchLoginDataList1)


    ])
  }

  export default forkAllWatchers