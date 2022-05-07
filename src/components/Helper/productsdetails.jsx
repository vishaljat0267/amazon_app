import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { addCartItems } from '../../components/Redux/cartReducerCumActions'

export default function Productsdetails() {

  const { state } = useLocation()
  const dispatch = useDispatch();
  
  

  
  const cartadded = async (e, val) => {

      e.preventDefault();
      let n1 = val.title
      let n2 = val.description
      let n3 = val.price
      let n4 = val.category
      let n5 = val.image
      let n6 = val.rating
console.log("ADD TO CART.................");
      const item = { "title": n1, "description": n2, "price": n3, "category": n4, "image": n5, "rating": n6 }
      dispatch(addCartItems(item))

    //   await axios.post("https://tejinsan.herokuapp.com/addtocart", { "title": n1, "description": n2, "price": n3, "category": n4, "image": n5, "rating": n6 })
    //     .then(response => {
    //       let res = response.data;

    //       console.log(res)


    //     })
    //     .catch(error => {
    //       console.log("error", error)

    //     });
    // console.log("val", val);

  }

 


  return (<>
    <div style={{ display: 'flex', flexDirection: '' }}>
      <div style={{ backgroundColor: 'white', height: '100vh', width: '40%', display: 'flex' }}>
        <img style={{ height: '100vh', width: '90%', padding: '40px' }} src={state.image} />
      </div>
      <div style={{ backgroundColor: 'white', height: '100vh', width: '60%' }}>
        <div style={{ backgroundColor: 'white', height: '70vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '30px', fontSize: '25px', display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}> <b>Title:</b> {state.title} </div>
          <div style={{ display: 'flex', fontSize: '23px', justifyContent: 'center', padding: '35px' }}> <b>Description:</b> {state.description} </div>
          <div style={{ display: 'flex', padding: '32px', fontSize: '29px', justifyContent: 'center' }}><b> Price:</b>  {state.price} </div>
        </div>
        <div style={{ backgrounColor: 'white', height: '30vh', width: '100%', display: '', gap: '', padding: '30px' }}>

          <button style={{ display: 'flex', justifyContent: 'center', padding: '', marginLeft: '20px' }} onClick={(e) => {cartadded(e,state)}}>Add to Card</button>
          <button style={{ display: 'flex', justifyContent: 'center', marginLeft: '20px', marginTop: '30px' }}>Go To Buy</button>
        </div>


      </div>






    </div>






  </>

  )
}
