import React, { Component } from 'react'
import img1 from "../Images/mango.jpeg"
import img2 from "../Images/banana.jpeg"
export default class  extends Component {
    constructor()
    {
        super();
        this.state={
            mango:0,
            banana:0
        }
    }
    In_mango=()=>
    {
        this.setState({mango:this.state.mango+1})
    }
    In_bana=()=>
    {
        this.setState({banana:this.state.banana+1})
    }

  render() {
    return (
      <div>
        <center>

      <h1>Bob ate {this.state.mango} mangoes {this.state.banana}</h1>
      <br></br>
      <img src={img1}></img>
  
      <img src={img2}></img>
      <br></br>
      <button onClick={this.In_mango} style={color=blue}>Eat Mango</button >
      <button onClick={this.In_bana}>Eat Banana</button>
        </center>
    </div>
    )
  }
}
