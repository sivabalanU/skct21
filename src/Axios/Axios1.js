import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios1 = () => {

    const [user ,setUser]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(Res => setUser(Res.title))
    })
  return (
    <div>
      {user.map(u=()=>{
       <div>
        {u.title}
       </div>
      })}
    </div>
  )
}

export default Axios1