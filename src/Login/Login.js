import React from 'react'
import im1 from "../Images/4.png"
import "./Login.css"
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  
  const hand=()=>
  {
    navigate("/Home")
    alert("form Submitted successfully")
    
  }
  const find = ()=>{
    navigate("/")
  }
  const handchange=(e)=>{
    console.log(e.target.value)
  }
return (

    <div className='background'>
      <center>
      <span title='Welcome to skct'><img src={im1} alt="Imagres" width={1200}></img></span>
      <h1>Welcome to <span title='Sri Krishna Collge of technology'>Skct</span></h1>
      <br></br>
      <a href="https://skct892.examly.io/ide">Click!!</a>
      <h1>Login from</h1>
      <form>
        <label>User Name : </label>
        <input onChange={handchange}></input>
        <br></br>
        <br></br>
        <label>Password :</label>
        <input></input>
        <br></br>
        <br></br>
      </form>
        <button onClick={hand} className='sub'>Submit</button>
        <button onClick={find} className='back'>Back</button>
        </center>
        
    </div>
  )
}

export default Login