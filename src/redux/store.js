import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'
import rootSage from './rootSaga'

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware : (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

// then run the saga
sagaMiddleware.run(rootSage)