import React from 'react'

const Listitem1 = (props) => {
    console.log('props====>>>>', props)
 return(
    <div>
        <h1>
            List  Value
        </h1>
        <ol>
            {
                props.data.map((list,index)=>(
                        <li key={index}>{list}</li>
                )
                )
            }
        </ol>
        
            {
                props.data1.map((list1,index1)=>(
                    <l1 key={index1}>{list1}</l1>
                )

                )
            }
        
    </div>
  )
}

export default Listitem1