import React, { useState } from 'react'

const Action2 = () => {
    const [user,setUser]=useState("student")
    const handlelogout =()=>{
        setUser("student")
    }
    
  return (
    <div>
        {
        user ?
        <h1>welcome {user}!!!</h1>:
        <h1>New User Please login into continue....</h1>
        }
        <button onClick={handlelogout}>logout</button>
        <button onClick={handlelogout}>login</button>
    </div>

  )
}

export default Action2