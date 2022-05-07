import { all, fork } from 'redux-saga/effects'
import {watchAddToCart,watchCartItemList,watchDeleteToCart } from '../components/Sagas/cart_saga'

function* forkAllWatchers() {
    yield all([
       fork(watchAddToCart),
       fork(watchCartItemList),
       fork(watchDeleteToCart),

    ])
  }

  export default forkAllWatchers