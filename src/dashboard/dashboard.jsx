import React, { useEffect, useState } from 'react'
import '../app.css'
import Header from './helper/header';
import HeaderMain from './helper/layout';
import Footer from './helper/footer'
import {  Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';




export default function Dashboard() {
  

    return (
        <>
          <HeaderMain  />
         <div className="container" style={{ width:"100vw",backgroundColor: '#dddddd !important',overflowY:'scroll'}}>
                <Header/>  
                <Outlet/>
                <Footer/>   
            </div>
       </>
    )
}
