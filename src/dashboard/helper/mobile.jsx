import { Card } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartcartItems, getCartcartItems4 } from '../../components/Redux/cartReducerCumActions';

export default function Mobile() {
  const dispatch = useDispatch();
  const cartitems4 = useSelector((state) => (state.allItems4.cartitems4));
  console.log("ccccccccc",cartitems4)

  useEffect(() => {
  

    dispatch(getCartcartItems4())
    
  }, [])


  return (
    <React.Fragment>

      <div className="cards1">
        {cartitems4?.map((val, key) => {
          return (
            <React.Fragment key={key}>

              <Card className="card">
                <h3>{val.title}</h3>
                <div>
                  <img style={{ height: '50%', width: '40%' }}
                    src={val.image} alt="Comics Category" className="card-content" />
                  <br />
                </div>
                <div>
                  <h3><b>Price: {val.price}</b></h3>
                  <h6>{val.description}"</h6>

                </div>
                <Link to="/categories" state={"Comics"} className="link">
                  Shop Now
                </Link>
              </Card>

            </React.Fragment>
          );
        })}
        </div>
         </React.Fragment>
         

  
  
  
  
   
  )
}