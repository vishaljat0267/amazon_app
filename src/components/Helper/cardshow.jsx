import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { cardApi5, cardApi6 } from '../../services/getApi/getApi'
import {  useDispatch, useSelector } from 'react-redux';
import { deleteCartItems, updateCartItems } from '../Redux/cartReducerCumActions';

export default function Cardshow() {
  const [cartData, setCartData] = useState([])
 
const dispatch = useDispatch();
const items = useSelector((state)=> state.cart.items);
useEffect( () => {
 
  gitList()
  
  
}, [items])
  const gitList=()=> {
    cardApi5().then(res => { setCartData(res.data.data) })
    

  }
  const deleteItem = (id) => {
    dispatch(deleteCartItems(id))
  }
  const cartupdate =  (e,update, id) => {

    e.preventDefault();
    
    let n1 = id
    let n2 = update
    
    const item = { "id": n1,"update": n2  }
    dispatch(updateCartItems(item))
  }
  
 
 var totalCartPrice =0;



  return (<React.Fragment>
    <div style={{display:'flex',width:'100%',height:'auto',justifyContent:'space-between',padding:'1%'}}>
    <div style={{ backgroundColor: 'white', height: 'auto', width: '65%', display: 'flex', flexDirection: 'column',padding:'2%' }}>
      {cartData.map((val, key) => {
        totalCartPrice += val.price* val.quantity
        return (<React.Fragment key={key}>
          <div key={key} style={{ display: 'flexlex', justifyContent: 'center', height: 'auto', width: '100%' }}>
            <h3>{val.title}</h3>
            <img style={{ height: '70%', width: '30%' }} src={val.image} />
            <h1> <b>Price:  {val.price}</b></h1>
          </div>

          {/* <div style={{height: '100%',display:'flex',justifyContent:'center',width:'40%'}}>
            <button onClick={() => { deleteItem(val._id) }} style={{borderRadius:'8px',background:'grey',width:'40%'}}>Delete</button>

          </div> */}
          <div style={{width:'70%',height:'100%',display:'flex',justifyContent:"space-between",}}>
           
            <button  style={{width:'20%',borderRadius:'6px'}} onClick={(e)=>cartupdate(e,"dec",val._id)}>-</button>
            <button style={{border:'none',width:'20%',backgroundColor:'gray',height:"100%",borderRadius:'6px'}}>{val.quantity}</button>
            <button style={{width:'20%',borderRadius:'6px'}}  onClick={(e)=>cartupdate(e,"inc",val._id)}>+</button>
            <div style={{height: '100%',display:'flex',justifyContent:'center',width:'50%'}}>
            <button onClick={() => { deleteItem(val._id) }} style={{borderRadius:'8px',background:'grey',width:'70%'}}>Delete</button>
            </div>
         
          </div>

        </React.Fragment>

        )

      })}
    
    </div>
    
    <div style={{backgroundColor:'white',width:'30%',height:'30vh',margin:''}}>
    <div>
    <h1>Total Price:</h1>
    
   <b style={{fontSize:'3em'}}>₹ {totalCartPrice.toFixed(2)}</b>
    </div>
     <div style={{display:'flex',justifyContent:'center'}}>
      
      <button style={{height:'10%',width:'60%',borderRadius:'1vw',background:'#ffd814',borderColor:'#fcd200',paddingTop:'',flexWrap:'wrap'}}>
         <a  style={{ color: 'white',backgroundColor:'#ffd814',fontSize:'2vw' }} className="ex5"href="https://rzp.io/l/i1kL91x">Proceed To Pay </a>
         </button>
     
      </div>



    </div>
    </div>
    



  </React.Fragment>

  )
}
