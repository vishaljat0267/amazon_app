import React, { useEffect, useState } from 'react';
import './signInpopover.css'
import { Button, Popover, Tooltip } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useNavigate } from 'react-router-dom';
export default function LanguagePopover(props) {
 
 
  
  const text = (
    <div style={{ width: "100%", display: "grid" }}>
     
      <span style={{ placeSelf: 'center', fontSize: '0.8em' }}>New Customer?
        <a style={{ color: "blue" }} href="#">&nbsp;Click here</a>
      </span>
    </div>

  )

  const content = (
    <div style={{ width: '200px'}}>
      <div style={{ display: 'grid', gridTemplateColumns: '225px 225px', gridTemplateRows: '300px' }}>
       
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
    </div>
  )


  return (
    <>
      
      <Popover placement="bottomRight"
          
          style={{position :'relative', top:"-10px"}}
        trigger='hover'
        title={text} content={content} >
        <button style={{ border:'none',background:"none", width: '20%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                        <a href="" className="ex1"
                         style={{ display: 'flex', justifyContent: 'center', textAlign: 'center',
                          flexDirection: 'column', height: '100%', width: '90%' }}>
                        
                        
                       
                         
                          <img  className='header_flag'
                             style={{ height: 'auto', width: '3vw', display: 'flex', marginTop: '0px' }}
                            src='https://flagicons.lipis.dev/flags/4x3/in.svg' />
                            <div style={{display:'flex',justifycontent:'center',marginLeft:'55px',marginTop:'-19px'}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" color="" fill="white" className="bi bi-caret-down" viewBox="0 0 16 16" >
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
           </div> 
            
           
                   
                    </a>
                    </button>
      </Popover>
    
      
    </>
  );
}

