import React from 'react'
import Carousel from './carousel';
import Cardview from './cardview';
import Footer from '../dashboard/helper/footer';
import './Home.css'
import Header from '../dashboard/helper/header';
import { Outlet } from 'react-router-dom';
import Carousels from './carousel';

function Container() {
    return (
        <> 
           
           <Carousels/>  
             <Cardview/> 
                      
           
        </>
    )
}

export default Container;