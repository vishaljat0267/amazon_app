import { all, fork } from 'redux-saga/effects'
import {watchAddToCart,watchCartItemList,watchCartItemList1,watchCartItemList2,watchCartItemList3,watchCartItemList4,watchDeleteToCart, watchUpdateToCart } from '../components/Sagas/cart_saga'

function* forkAllWatchers() {
    yield all([
       fork(watchAddToCart),
       fork(watchCartItemList),
       fork(watchDeleteToCart),
       fork(watchUpdateToCart),
       fork( watchCartItemList1),
       fork(watchCartItemList2),
       fork(watchCartItemList3),
       fork(watchCartItemList4)


    ])
  }

  export default forkAllWatchers