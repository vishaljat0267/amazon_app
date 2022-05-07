import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

ReactDOM.render(
  <BrowserRouter> 
  <Provider store={store}>
      <Main/>
  </Provider>
  </BrowserRouter>

   
 ,
  document.getElementById('root')
);


