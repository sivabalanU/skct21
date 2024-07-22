import React, { useState } from 'react'

const Action1 = () => {
  
    const[islogged,setIslogged]=useState(true)
    if(true)
    {

    }
    else
    {

    }


    const handleopen=()=>{
        setIslogged(false)
    }
    const handleclose=()=>{
        setIslogged(true)
    }
  return (
    <div>
        { islogged &&
        <form>
            <label>UserName:</label>
            <input></input>
            <label>Password</label>
            <input></input>
        </form>
} 
<button onClick={handleopen}>close</button>
<button onClick={handleclose}>open</button>
    </div>
  )
}

export default Action1