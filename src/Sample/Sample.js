import React from 'react'

import img1 from '../Images/4.png'

const Sample=()=>{
  return(
    <div>
        <center>
      <h1>


                <img src={img1} width="800"></img><br></br>
                Welcome to <span title="Sri Krishna colllege of Technology">SKCT</span> 
            </h1>
            <p>
                Learning and Growth:*
                - What it means: Continuously improving yourself through education and experiences.
                - Why it's important: Learning opens up opportunities and enhances your skills for a better life.
            </p>
            <img src="./Images/2.jpeg" alt="skct" width="50"></img>


            <a href="https://www.skct.edu.in/" target="_blank">Click Here!!!</a>

            <br></br>

            <a href="https://www.ccmc.gov.in/ccmc/index.php/createpage/bus-services" target="_blank">
                <img src="./Images/bus1.jpeg" ></img>
            </a>

            <a href="https://joyuniversity.edu.in/wp-content/uploads/2022/08/JU-HostelMessFee.pdf" target="_blank">
                <img src="./Images/boys.jpeg"></img>
            </a>
        </center>
      
        <h1>Courses</h1>
        <ul>
            <li>CSE</li>
            <li>ECE</li>
            <li>IT</li>
            <li>EEE</li>
            <li>AIDS</li>
        </ul>
        <h1>Subject</h1>
        <ol>
            <li>Tamil</li>
            <li>English</li>
            <li>M-1</li>
            <li>M-2</li>
            <li>Analog circuit</li>
        </ol>
        <a href="mailto:sivabalan@gmail.com">
            <img src="./Images/mail.png"></img>
        </a>

        <button onclick="document.location='Login.html'">Next</button>
        <button onclick="document.location='Sample.html'">Back</button>

    </div>
  )
}
export default Sample