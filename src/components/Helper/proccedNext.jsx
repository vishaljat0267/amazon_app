import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchCartItems } from '../Redux/cartReducerCumActions'
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';


export default function ProccedNext() {
  const token = sessionStorage.getItem("token");
  try {
    var decoded = jwt_decode(token);
  } catch (err) {

  }
  const dispatch = useDispatch();
    const navi = useNavigate()
    const { state } = useLocation()
    // console.log("kkkkkkkkkkkk",state)

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
  //   console.log(">>>>>>>", item);
  //   console.log("OOOOOOOOOOOO", res);
  
  
  // }





  return (<>
  <div style={{backgroundColor:'#f0f0f0',width:'100%',height:'100vh',display:'flex',justifyContent:'space-between',padding:'33px'}}>
      <div  style={{backgroundColor:'white',width:'35%',height:'30vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <h1>{state.title}</h1>
      <img style={{ height: '70%', width: '', padding: '',display:'flex' }} src={state.image} />
    

      </div>
      <div style={{backgroundColor:'white',height:'30vh',width:'60%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'column'}}>
         <h1><b>Price ₹ {state.price}</b></h1> 
     <button style={{height:'40px',width:'60%',borderRadius:'20px',background:'#ffd814',borderColor:'#fcd200'}}>Proceed To Pay </button>
        <button  style={{height:'40px',width:'60%',borderRadius:'20px',boxShadow:'0 2px 5px 0',backgroundColor:'213 217 217 /50%'}} onClick={() => { navi('/cardshow') }} >Go To Cart</button>
          

      </div>
 </div>
  
 </>

    
  )
}


