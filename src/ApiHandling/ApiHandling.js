import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ApiHandling = () => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>
    {
        const fetchData= async()=>
        {
try{
    const response=await axios.get(
        axios.get("https://jsonplaceholder.typicode.com/todos")
        
    );
    setData(response.data);
}
catch(error)
{
    console.log("error====>>>>",error)
    setError (error.message || "An error occured");
}
        }
       
    })
  return (
    <div>ErrorHandling
        <h1>{data}</h1>
    </div>
  )
}

export default ApiHandling;