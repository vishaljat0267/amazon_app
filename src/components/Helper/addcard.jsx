import React from 'react'
import axios from 'axios';

export default function Addcard() {

  const cardhandle = async (e) => {
    e.preventDefault();
  
     await axios.post(" https://tejinsan.herokuapp.com/addcard", )
        .then(response => {
            let res = response.data;

            console.log(res)
           

        })
        .catch(error => {
            console.log("error", error)
         
        });
      }
  return (<>
  <button onClick={cardhandle}>api</button>
  
  
  
  
  
  </>
   
  )
}

