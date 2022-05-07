import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { cardApi5, cardApi6 } from '../../services/getApi/getApi'
import {  useDispatch } from 'react-redux';
import { deleteCartItems } from '../Redux/cartReducerCumActions';

export default function Cardshow() {
  const [cartData, setCartData] = useState([])
 
const dispatch = useDispatch();

  useEffect( () => {
    gitList()

  }, [])
  console.log(cartData);
  const gitList=()=> {
    cardApi5().then(res => { setCartData(res.data.data) })

  }
  const deleteItem = async (id) => {
    dispatch(deleteCartItems(id))
    gitList()
  }


  return (<React.Fragment>
    <div style={{ backgroundColor: 'white', height: 'auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
      {cartData.map((val, key) => {
        return (<React.Fragment key={key}>
          <div key={key} style={{ display: 'flexlex', justifyContent: 'center', height: 'auto', width: '100%' }}>
            <h3>{val.title}</h3>
            <img style={{ height: '200px', width: '200px' }} src={val.image} />
            <h1> <b>Price:  {val.price}</b></h1>
          </div>

          <div style={{ paddingTop: '20px', marginLeft: '200px', height: '100%' }}>
            <button onClick={() => { deleteItem(val._id) }}>Delete</button>

          </div>

        </React.Fragment>

        )

      })}

    </div>




  </React.Fragment>

  )
}
