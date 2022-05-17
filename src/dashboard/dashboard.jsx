import React from 'react'
import '../app.css'
import Header from './helper/header';
import HeaderMain from './helper/layout';
import Footer from './helper/footer'
import Container from '../Pages/container';
import {  Outlet, useLocation } from 'react-router-dom';
import Productsdetails from '../components/Helper/productsdetails';
import Carousels from '../Pages/carousel';
import Cardview from '../Pages/cardview';
import Drawer1 from './helper/sidemenu';




export default function Dashboard() {

    const {state}  = useLocation()
    // console.log('state',state);
    return (
        <>
          <HeaderMain />
          {/* <HeaderMain name={state}/> */}

          <div className="container" style={{ width:"100vw",backgroundColor: '#dddddd !important',overflowY:'scroll'}}>
                <Header/>  
                {/* <Drawer1/> */}
                <Outlet/>
                <Footer/>   
            </div>
      
     
        </>
    )
}
