import React from 'react'
import Main from './main'
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './redux/action'

export default function App() {

  const state = useSelector((state)=> state);
  const dispatch = useDispatch();

  
  

  const handleIncrease = () => { 
    dispatch(increase(1))
  }

  const handleDecrease = () => { 
    dispatch(decrease(1))
  }

  return (<>
   {/* <b>{state?.value }</b> 
      <br/> */}

      {/* <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button> */}
  
<Main/>
  
  
  </>
    
  )
}

