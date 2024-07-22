import React, { Component } from 'react'

export default class Lifecycle extends Component {
   constructor(){
    super();
    this.state={
          count:0
    }
   }
   Increment =()=>{
    this.setState({count:this.state.count + 1})
   }
   Drecrement =()=>{
    this.setState({count:this.state.count - 1})
   }

    componentDidMount()
    {
        console.log("componentDidmount=====>>>>>>")
        alert("Welcome to Skct Portal")
    }
        componentDidUpdate()
        {
             console.log("componentDidupdate=====>>>>>>")
             
        }
            componentWillUnmount()
        {
                
                console.log("componentWillunmount=====>>>>>>")
         }
  render() {
    return (
      <div>Lifecycle
        <h1>Increment {this.state.count}</h1>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Drecrement}>Drecrement</button>
      </div>
    )
  }
}
