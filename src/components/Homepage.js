import React, { Component } from 'react'
//import Cell from './Cell'
//import '../styles/screen.sass'


class Homepage extends Component {
  beginner=() => {
    this.props.playGame(0,'game')
  }
  intermediate=() => {
    this.props.playGame(1,'game')
  }
  advanced=() => {
    this.props.playGame(2,'game')
  }
  render () {
    return <div className='Homepage'>
      <h1>What is poop trabeck </h1>
      <button onClick={this.beginner} >Beg</button>
      <button onClick={this.intermediate} >Int</button>
      <button onClick={this.advanced} >Adv</button>

    </div>
  }
}





  export default Homepage
