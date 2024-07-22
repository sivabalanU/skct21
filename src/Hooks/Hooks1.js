import React,{useState} from 'react'
const Hooks1 =()=>{
    const [count, setCount]=useState(0);
    const [input, setInput]=useState();

    const increment =()=>{
        setCount(count+1)
    }
    const handchange=(e)=>{
     setInput(e.target.value)
    }
    return(
          
        <div>
        
            <h1>{count}</h1>
            <button onClick={increment}>Ince</button>
            <br></br>
            <input onChange={handchange}></input>
           <h1>{input}</h1>

          
        </div>
    )
}
export default Hooks1