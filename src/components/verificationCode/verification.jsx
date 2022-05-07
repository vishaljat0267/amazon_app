import React from 'react'
import { useLocation } from 'react-router-dom'
import AmazonLogo from '../../images/am.jpeg'


export default function Verification() {

  const {state}  = useLocation()
    // const emailphone=state.emailphone.value
  return (
    <>
    
    <div style={{ height: "auto", paddingBottom: "15px" }}>
            <div style={{ width: "125px", height: '50px', margin: "auto", marginTop: "5px" }}>
                <img src={AmazonLogo} alt="not available"
                    style={{ width: '100%', height: "100%", objectFit: 'strech' }}
                ></img>
            </div>

            <div style={{ display: "flex", height: "auto", width: "350px", margin: 'auto', border: '1px solid lightgray', borderRadius: "4px", marginBottom: "10px" }}>

                <div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "auto", paddingTop: "5px", paddingBottom: "25px", gap: "15px" }}>


                    <h2 style={{ height: "6px", fontWeight: "500", fontSize: "30px" }}>Sign-up Verification</h2>
                    <div style={{marginTop:"20px"}}>
                        <span style={{fontWeight:"600"}}>
                        {'state.emailphone.value'}<span ><a style={{color:"#0066c0"}} >&nbsp;Change</a></span>
                        </span>
                        </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <div style={{display:"-webkit-flex",justifyContent:'space-between',width:'100%',fontSize:".9em"}}>
                            <b >Enter Your Verification Code</b>
                        </div>
                        <input type="text" name="Verification_code" style={{height: "2em", border: "1px solid black", borderRadius: "4px" }} />
                        
                    </div>
                    <button
                        onClick={'handleClick'}
                        style={{
                            height: "2.5em",
                            background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: "1px solid #c89411"
                        }}
                    >Continue
                    </button>

                </div>
            </div>
            
            

        </div>
            <div style={{ display: "flex", gap: "28px", justifyContent: "center", width: "100%", height: '2em', alignItems: "center", background: "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)" }}>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Conditions of Use  </a>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Privacy Notice  </a>
                <a style={{ color: "blue", fontSize: "0.8em" }}> Help  </a>

            </div>
            <div style={{ width: "100%", textAlign: "center", fontSize: "0.8em" }}>© 1996-2022, Amazon.com, Inc. or its affiliates </div>


    </>
  )
}
