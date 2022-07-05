import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Card } from 'antd';
import Carouselss from '../components/carouselss'
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCartcartItems, getCartcartItems1, getCartcartItems2, getCartcartItems3 } from '../components/Redux/cartReducerCumActions'
const catCard = [Adventure, Fantasy, Horror, Dictionaries];

export default function Cardview() {
  const navi1 = useNavigate()
  const [data1, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const dispatch = useDispatch();


  const cartitems = useSelector((state) => (state.allItems.cartitems));
  const cartitems1 = useSelector((state) => (state.allItems1.cartitems1));
  const cartitems2 = useSelector((state) => (state.allItems2.cartitems2));
  const cartitems3 = useSelector((state) => (state.allItems3.cartitems3));

  useEffect(() => {
  

    dispatch(getCartcartItems())
    dispatch(getCartcartItems1())
    dispatch(getCartcartItems2())
    dispatch(getCartcartItems3())

  }, [])

  return (
   
    <React.Fragment>

      <div className="cards">
        {cartitems?.map((val, key) => {
          return (
            <React.Fragment key={key}>

              <Card className="card">
                <h3>{val.title}</h3>
                <div>
                  <img style={{ height: '50%', width: '40%' }} onClick={() => { navi1('/productDetails', { state: val }) }}
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

        <Card className="card">
          <h1>Shop By Category</h1>
          <div className="card-content">
            {cartitems?.map((d, id) => {
              if (id < 4) return (<React.Fragment key={id}>
                <div style={{ display: 'flex', justifyContent: 'center', width: '50%', height: 'auto', flexDirection: 'column' }}>
                  <div>
                    <img style={{ height: '50%', width: '60%' }} onClick={() => { navi1('/productDetails', { state: d }) }}
                      src={d.image}
                      alt="category"
                      className="card-category"

                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h6><b>{d.title}</b></h6>
                    <h3><b>Price: {d.price}</b></h3>

                  </div>
                </div>
              </React.Fragment>
              );
            })}
            <br />
            <Link to="/" className="link">
              Shop All
            </Link>
          </div>
        </Card>
        <Card className="card">
          <h1>Shop By Category</h1>
          <div className="card-content">
            {cartitems3?.map((d, id) => {
              if (id < 4) {
                return (<React.Fragment key={id}>
                  <div style={{ display: 'flex', justifyContent: 'center', width: '50%', height: 'auto', flexDirection: 'column' }}>
                    <div>
                      <img style={{ height: "60%", width: "60%" }} onClick={() => { navi1('/productDetails', { state: d }) }}
                        src={d.image}

                        alt="category"
                        className="card-category"


                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h6><b>{d.title}</b></h6>
                      <h3><b>Price: {d.price}</b></h3>

                    </div>

                  </div>
                </React.Fragment>


                )
              }
            }
            )}
            <br />
            <Link to="/" className="link">
              Shop All
            </Link>
          </div>
        </Card>
        <Card className="card">
          <h1>Shop By Category</h1>
          <div className="card-content">
            {cartitems2?.map((d, id) => {
              if (id < 4) {
                return (<React.Fragment key={id}>
                  <div style={{ display: 'flex', justifyContent: 'center', width: '50%', height: 'auto', flexDirection: 'column' }}>
                    <div>
                      <img style={{ height: '60%', width: '55%' }} onClick={() => { navi1('/productDetails', { state: d }) }}
                        src={d.image}
                        alt="category"
                        className="card-category"

                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h6><b>{d.title}</b></h6>
                      <h3><b>Price: {d.price}</b></h3>

                    </div>

                  </div>
                </React.Fragment>
                );
              }
            })}
            <br />
            <Link to="/" className="link">
              Shop All
            </Link>
          </div>
        </Card>
        <Card className="card">
          <h1>Shop By Category</h1>
          <div className="card-content">
            {cartitems?.map((d, id) => {
              if (id < 4) {
                return (<React.Fragment key={id}>
                  <div style={{ display: 'flex', justifyContent: 'center', width: '50%', height: 'auto', flexDirection: 'column' }}>
                    <div>
                      <img style={{ height: '60%', width: '55%' }} onClick={() => { navi1('/productDetails', { state: d }) }}
                        src={d.image}
                        alt="category"
                        className="card-category"

                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h6><b>{d.title}</b></h6>
                      <h3><b>Price: {d.price}</b></h3>

                    </div>
                  </div>
                </React.Fragment>
                );
              }
            })}
            <br />
            <Link to="/" className="link">
              Shop All
            </Link>
          </div>
        </Card>

      </div>
      <div style={{ marginTop: '20px' }}>

        <Carouselss />
      </div>
    </React.Fragment>

  )

}

