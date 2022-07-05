import React, { useEffect, useState } from 'react';
import './signInpopover.css'
import { Button, Popover, Tooltip } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import PropTypes from 'prop-types';
export default function SigninPopover({ name }) {

  const navi = useNavigate();
  const naviSignin = () => {
    navi('/signIn')
  }

  const text = (
    <div style={{ width: "100%", display: "grid" }}>
      <button style={{ placeSelf: "center", width: "14em", height: "33px", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: '1px solid #c89411' }} onClick={naviSignin} >
        Sign in
      </button>
      <span style={{ placeSelf: 'center', fontSize: '0.8em' }}>New Customer?
        <a style={{ color: "blue" }} href="#">&nbsp;Click here</a>
      </span>
    </div>

  )

  const content = (
    <div style={{ width: '450px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '225px 225px', gridTemplateRows: '300px' }}>
        <div style={{ borderRight: "1px solid gray" }} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: "2px", paddingTop: '10px' }}>

            <h4>Your List</h4>

            <a style={{ color: "#444" }} href='#'> Create a Wishlist</a>

            <a style={{ color: "#444" }} href='#'>Wish from any website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Discover Your Style </a>
            <a style={{ color: "#444" }} href='#'>View Showroom</a>
          </div>
        </div>
        <div style={{}} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: "2px", paddingLeft: "10px", paddingTop: '10px' }}>
            <h4>Your Account</h4>
            <a style={{ color: "#444" }} href='#'> Your Orders</a>
            <a style={{ color: "#444" }} href='#'>Your Wish List</a>
            <a style={{ color: "#444" }} href='#'>Your Recommendations</a>
            <a style={{ color: "#444" }} href='#'>Your Prime Video</a>
            <a style={{ color: "#444" }} href='#'>Your Subscribe & Save Items</a>
            <a style={{ color: "#444" }} href='#'>Your Gift Card Balance</a>
            <a style={{ color: "#444" }} href='#'>Your Amazon Business Account</a>
            <a style={{ color: "#444" }} href='#'>Your Seller Account</a>
            <a style={{ color: "#444" }} href='#'>Manage Your Content and Devices</a>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <>

      <Popover placement="bottomRight"

        style={{ position: 'relative', top: "-10px" }}
        trigger='hover'
        title={text} content={content} >
        <button style={{ border: 'none', background: "none", width: '45%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <a href="" className="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '100%', width: '90%' }}>
            <span style={{ fontSize: '1vw', marginTop: '9px', color: 'white' }}>Hello ,{name}</span>
            <span style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '1.2vw', color: 'white' }}> Account & Lists</span></a>
        </button>
      </Popover>

    </>
  );
}


SigninPopover.defaultProps = {
  name: "hello user"
}