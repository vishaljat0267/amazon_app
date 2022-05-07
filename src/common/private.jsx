import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Private(props) {
    const navi = useNavigate();
const page=props.page;

const token=sessionStorage.getItem('token');



return token ? page : <div style={{height:'100vh',width:'100vw',backgroundColor:'red',textAlign:'center',fontSize:'50px'}}>unauthorised</div>

}