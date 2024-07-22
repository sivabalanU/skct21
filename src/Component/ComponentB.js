import React, { Component } from 'react'

export default class ComponentB extends Component {
    constructor()
    {
        super();
        this.state={
            num:0
        }
    }
    Add1=()=>{
        this.setState({num:this.state.num+ 1})
    }
    Add2=()=>{
        this.setState({num:this.state.num + 2})
    }
    Add3=()=>{
        this.setState({num:this.state.num + 3})
    }
    Add4=()=>{
        this.setState({num:this.state.num + 4})
    }
    Add5=()=>{
        this.setState({num:this.state.num + 5})
    }
    Add6=()=>{
        this.setState({num:this.state.num + 6})
    }
  render() {
    return (
      <div>
        <center>

        <h1>Number : {this.state.num}</h1>
        <button onClick={this.Add1}>1</button>
        <button onClick={this.Add2}>2</button>
        <button onClick={this.Add3}>3</button>
        <button onClick={this.Add4}>4</button>
        <button onClick={this.Add5}>5</button>
        </center>
      </div>
    )
  }
}
