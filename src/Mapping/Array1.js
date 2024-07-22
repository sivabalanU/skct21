import React from 'react'
import Listitem1 from './Listitem1';

const Array1 = () => {
    const Arr1=[1,2,3,4,5,6,7,8,9,0];
    const Arr2=[1," Welcome "," true "];
  return (
    <div>
        <h1>
        Array1
        </h1>
     <Listitem1 data={Arr1} data1={Arr2}/>
    </div>
  )
}

export default Array1;