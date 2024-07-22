import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './Home/Home'
import SignUp from './SignUp/SignUp'
import Hooks1 from './Hooks/Hooks1'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Hooks1/>}></Route>
            <Route path="/Login" element={<SignUp/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
         
              
         </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App