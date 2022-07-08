import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { addCartItems, fetchCartItems } from '../../components/Redux/cartReducerCumActions'

export default function Productsdetails() {

//   useEffect(() => {
//     dispatch(fetchCartItems())
   
// }, [])




  const navi = useNavigate()

  const { state } = useLocation()
  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");
  try {
    var decoded = jwt_decode(token);
  } catch (err) {

  }
  const cartadded = async (e, val) => {

    e.preventDefault();
    let n1 = val.title
    let n2 = val.description
    let n3 = val.price
    let n4 = val.category
    let n5 = val.image
    let n6 = val.rating
    let n7 = val.quantity
    let n8 = decoded.useremail.email
    let n9 = val._id
    console.log("ADD TO CART.................");
    const item = { "title": n1, "description": n2, "price": n3, "category": n4, "image": n5, "rating": n6, "quantity": n7, "email": n8, "product_id": n9 }
    // console.log("qqqqqqqqqqq", item);
    dispatch(addCartItems(item))
  setTimeout(() => {
      navi('/proceedNext', { state: val })
    }, 3000);

  }

 
//   useEffect(() => {
//     dispatch(fetchCartItems())
//     cartadde()
    
// }, [])

// const cartadde = async () => {

//   // e.preventDefault();
//   let n1 = decoded.useremail.email
//   console.log("kjhgfdsxgfchvjbnk>>>", n1);
//   console.log("GET ALL TO CART.................");
//   const item = { "email": n1 }
//   console.log("??????", item);
//   let res = dispatch(fetchCartItems(item))
//   // console.log(">>>>>>>", item);
//   console.log("OOOOOOOOOOOO", res);


// }

  return (<>
    <div style={{ display: 'flex', flexDirection: '' }}>
      <div style={{ backgroundColor: 'white', height: '100vh', width: '40%', display: 'flex' }}>
        <img style={{ height: '80vh', width: '90%', padding: '40px' }} src={state.image} />
      </div>
      <div style={{ backgroundColor: 'white', height: 'auto', width: '30%' }}>
        <div style={{ backgroundColor: 'white', height: '', width: '', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '30px', fontSize: '25px', display: 'flex', justifyContent: 'center', backgroundColor: '', flexDirection: 'column' }}> <b>Title:</b>{state.title}</div>
          <div style={{ display: 'flex', fontSize: '', justifyContent: 'center', padding: '', flexDirection: 'column' }}> <b>Description:</b> {state.description} </div>
          <div style={{ fontSize: '25px' }}><b>Rating:</b> {state.rating.rate}, Count: {state.rating.count}</div>
          <div style={{ display: 'flex', padding: '', fontSize: '29px', justifyContent: '' }}><b> Price:</b>  {state.price} </div>

        </div>

      </div>
      <div style={{ backgroundColor: 'white', width: '30%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div style={{ backgroundColor: 'white', width: '70%', height: '85vh', display: 'flex', borderRadius: '20px' }}>

          <div style={{ backgrounColor: 'white', height: '', width: '100%', display: 'flex', padding: '30px', flexDirection: 'column', justifyContent: 'end', fontSize: 'larger' }}>

            <button style={{
              display: 'flex', justifyContent: 'center', padding: '', marginLeft: '', borderRadius: '20px',
              backgroundColor: '#ffd814', borderColor: '#fcd200', height: '5vh', alignItems: 'center'
            }}
              onClick={(e) => { cartadded(e, state) }}>Add to Card</button>
            <button style={{ display: 'flex', justifyContent: 'center', marginLeft: '', marginTop: '30px', borderRadius: '20px', backgroundColor: '#ffa41c', borderColor: '#ff8f00', height: '5vh', alignItems: 'center' }}>Go To Buy</button>
          </div>


        </div>
      </div>
    </div>

  </>

  )
}
