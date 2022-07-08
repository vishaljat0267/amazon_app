import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cart, deleteCartItems, fetchCartItems, updateCartItems } from '../Redux/cartReducerCumActions';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { getAllCartItems } from '../Services/cartservice';

export default function Cardshow() {
  const [cartData, setCartData] = useState([])
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log("bbbbbbb", items)

  const token = sessionStorage.getItem("token");
  try {
    var decoded = jwt_decode(token);
  } catch (err) {

  }


  const gitList = () => {
    getAllCartItems().then(res => { setCartData(res.data.data) })

  }
  useEffect(() => {

    gitList()



  }, [items])



  const cartdelete = async (product_id) => {
    let n1 = product_id
    let email = decoded.useremail.email
    const item1 = { product_id, email }
    dispatch(deleteCartItems(item1))
  }

  const cartupdate = (e, update, product_id, quantity) => {
    e.preventDefault();
    let n1 = product_id
    let n2 = update
    let email = decoded.useremail.email
    const item = { product_id, update, email, quantity }
    dispatch(updateCartItems(item))
  }


  var totalCartPrice = 0;




  return (<React.Fragment>
    <div style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'space-between', padding: '1%' }}>
      <div style={{ backgroundColor: 'white', height: 'auto', width: '65%', display: 'flex', flexDirection: 'column', padding: '2%' }}>
        {cartData?.map((val, key) => {
          totalCartPrice += val.price * val.quantity
          return (<React.Fragment key={key}>
            <div key={key} style={{ display: 'flexlex', justifyContent: 'center', height: 'auto', width: '100%' }}>
              <h3>{val.title}</h3>
              <img style={{ height: '70%', width: '30%' }} src={val.image} />
              <h1> <b>Price:{val.price}</b></h1>
            </div>


            <div style={{ width: '70%', height: '100%', display: 'flex', justifyContent: "space-between", }}>

              <button style={{ width: '20%', borderRadius: '6px' }} onClick={(e) => cartupdate(e, "dec", val.product_id, val.quantity)}>-</button>
              <button style={{ border: 'none', width: '20%', backgroundColor: 'gray', height: "100%", borderRadius: '6px' }}>{val.quantity}</button>
              <button style={{ width: '20%', borderRadius: '6px' }} onClick={(e) => cartupdate(e, "inc", val.product_id, val.quantity)}>+</button>
              <div style={{ height: '100%', display: 'flex', justifyContent: 'center', width: '50%' }}>
                <button onClick={() => { cartdelete(val.product_id) }} style={{ borderRadius: '8px', background: 'grey', width: '70%' }}>Delete</button>
              </div>

            </div>

          </React.Fragment>

          )

        })}

      </div>

      <div style={{ backgroundColor: 'white', width: '30%', height: '30vh', margin: '' }}>
        <div>
          <h1>Total Price:</h1>

          <b style={{ fontSize: '3em' }}>₹ {totalCartPrice.toFixed(2)}</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <button style={{ height: '10%', width: '60%', borderRadius: '1vw', background: '#ffd814', borderColor: '#fcd200', paddingTop: '', flexWrap: 'wrap' }}>
            <a style={{ color: 'white', backgroundColor: '#ffd814', fontSize: '2vw' }} className="ex5" href="https://rzp.io/l/i1kL91x">Proceed To Pay </a>
          </button>

        </div>
      </div>
    </div>





  </React.Fragment>

  )
}
