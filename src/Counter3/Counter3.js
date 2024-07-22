import React, { useState } from 'react'

const Counter3 = () => {
  const [data,setData]=useState(0);
 const Incre =()=>{
     setData(data+1)
  }
  const Decre =()=>{
 setData(data-1)
  }
  return (
    <div>
        <h1>
           Counter Components {data}
        </h1>
        <button onClick={Incre}>Increment </button>
        <button onClick={Decre}>Decrement </button>

    </div>
  )
}

export default Counter3