import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate()
  const login=()=>{
    navigate("/Login")
  }
  const Sign=()=>{
    navigate("/")
  }

  return (
    <div>
     <h1>Home Page</h1>
     
     <button onClick={login}>Login</button>
     <button onClick={Sign}>Sign</button>
    </div>
  )
}

export default Home;