import React, { useState } from 'react'
import axios from 'axios'
const Axios = () => {
  const [apidata,setApidata] = useState()
  const [apidata1,setApidata1] = useState()
  const [apidata2,setApidata2] = useState()
  const [apidata3,setApidata3] = useState()
  const [apidata4,setApidata4] = useState()

  const [apidata5,setApidata5] = useState()
  const [apidata6,setApidata6] = useState()
  const [apidata7,setApidata7] = useState()
  const [apidata8,setApidata8] = useState()
  const [apidata9,setApidata9] = useState()
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{
        setApidata(response.data[1].title)
        setApidata1(response.data[2].title)
        setApidata2(response.data[3].title)
        setApidata3(response.data[4].title)
        setApidata4(response.data[5].title)

        setApidata5(response.data[6].title)
        setApidata6(response.data[7].title)
        setApidata7(response.data[8].title)
        setApidata8(response.data[9].title)
        setApidata9(response.data[10].title)
        console.log("response=====>>>",response)
    })

    
  
  return (
    <div>
      <h1>1. {apidata}</h1>
      <h1>2. {apidata1}</h1>
      <h1>3. {apidata2}</h1>
      <h1>4. {apidata3}</h1>
      <h1>5. {apidata4}</h1>

      <h1>6. {apidata5}</h1>
      <h1>7. {apidata6}</h1>
      <h1>8. {apidata7}</h1>
      <h1>9. {apidata8}</h1>
      <h1>10. {apidata9}</h1>
    </div>
  )
}

export default Axios