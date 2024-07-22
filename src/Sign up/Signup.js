import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    
  const navigate=useNavigate()
  const handclick=()=>{
    navigate("/Login")
  }
  
  return (
    <div>
        <center>

        <h1>Sign Up from</h1>
        
        
      <form>
        <label>User Name : </label>
        <input></input>
        <br></br>
        <label>Password :</label>
        <input></input>
        <br></br>
        <button onClick={handclick}>Submit</button>
      </form>
        </center>
    </div>
  )
}

export default Signup;