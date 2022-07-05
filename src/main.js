import Dashboard from './dashboard/dashboard';
import './app.css'
import Home from '../src/Pages/Home'
import Protected from './common/private'

import React, { useState } from 'react';
import Signup from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import HomePage from './Pages/homePage';
import SignIn2 from './components/signIn/signIn2';
import { useRoutes } from 'react-router-dom';
import Verification from './components/verificationCode/verification';
import Productsdetails from './components/Helper/productsdetails';
import Container from './Pages/container';


import Cardshow from './components/Helper/cardshow';
import axios from 'axios';

import ProccedNext from './components/Helper/proccedNext';


 export default function Main() {
  
  
  const [loader, setLoader] = useState(false)


  axios.interceptors.request.use(function (config) {
    
     if(config)  {setLoader(true)}
  
    return config;

  }, function (error) {
  setLoader(false)
   
    return Promise.reject(error);
  });


axios.interceptors.response.use(function (response) {
  setLoader(false)
   
    return response;
   
  }, function (error) {
  setLoader(false)

    return Promise.reject(error);
  },[]);
   

  const routes = useRoutes([
    
    {
      path: "/", element: <Dashboard />, children: [
        { path: '/', element: <Container /> },
        { path: 'productDetails', element: <Productsdetails /> },
        { path: 'cardshow', element: <Cardshow /> },
        {path: 'proceedNext', element:<ProccedNext/>}
      ]
    },
    { path: 'signIn', element: <SignIn /> },
    { path: 'signIn2', element: <SignIn2 /> },
    { path: 'signup', element: <Signup /> },
    { path: 'verification', element: <Verification /> },
    // { path: '/addcard', element: <Addcard /> },
    // {path :'/cardshow', element:<Cardshow/>}

    // {path:"/dashboard" ,element:<Protected page={<Dashboard />} />},
  ])

  return(<>
  {routes}

  
  {loader &&
   <h1 style={{position:'fixed',top:'300px',marginLeft:'550px'}}>
     <img style={{width:'130px',height:'150px'}} src='https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif'/></h1>
 
   
  }
  
  
  </> 
)
}




