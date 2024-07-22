import React, { Component } from 'react'

export class ComponentA extends Component {
    constructor()
    {
        super();
        this.state={
            count:0
        }

    }


    Increment =()=>{
        this.setState({count:this.state.count+1})
    }
    Decrement =()=>
    {
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Increment:{this.state.count}</h1>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    )
  }
}

export default ComponentA