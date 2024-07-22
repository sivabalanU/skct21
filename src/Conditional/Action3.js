import React, { useState } from 'react';

const Action3 = () => {
  const [pin, setPin] = useState(1832);
  const [entpin, setEntpin] = useState('');

  const check = () => {
    if (pin == entpin) {
      alert("Pincode Correct");
    } else {
      alert("Pincode Wrong");
    }
  }

  const handlePinChange = (e) => {
    setEntpin(e.target.value);
  }

  return (
    <div>
      <form>
        <label>Name : </label>
        <input></input>
        <br></br>
        <label>Pin Number :</label>
        <input onChange={handlePinChange}></input> 
      </form>

      <button onClick={check}>Submit</button>
    </div>
  );
}

export default Action3;
