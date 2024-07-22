import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BasicCrud = () => {
    const [tododata1,settoDodata1]=useState([]);
     const [input,setInput]=useState();
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
        console.log("tododata1===>>>",response.data)
      settoDodata1(response.data)
    })
    },[]);

    const handleinput=(e)=>{
         setInput(e.target.value);
    }
    const handleclick=()=>{
      axios.post("https://jsonplaceholder.typicode.com/todos",{title:input})
      .then(response=>{
        console.log("post------------",response)
        settoDodata1([...tododata1,response.data])
      })
    }
    const handledelete =(id)=>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      settoDodata1(tododata1.filter(task => task.id !==id));
    }
  return (
    <div>
        <h1>Basic Crud</h1>
        <input onChange={handleinput}></input>
        <button onClick={handleclick}>Add</button>
        {
           tododata1 && tododata1.map(index =>(

              <>
             <p >
              key={index.id}{index.title}
             </p>
             <button>Upadate</button>
             <button onClick={()=>handledelete(index.id)}> Delete</button>
             </>
           )
           )
        }
    </div>
  )
}

export default BasicCrud