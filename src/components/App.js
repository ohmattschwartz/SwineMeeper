import React, { Component } from 'react'
import Game from './Game'
import Home from './Home'
import '../styles/screen.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {
      currentScreen: 'home',
      difficulty: 0
    }
  }

  _playgame = (scr, difficulty) => {
    this.setState({
      currentScreen: scr,
      difficulty: difficulty
    })
  }
  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'home': screen = <Home play={this._playgame} />
        break
      case 'game': screen = <Game difficulty={this.state.difficulty} />
        break
      default: screen = <Home play={this._playgame} />
    }
    return <div>{screen}</div>
  }
}

export default App
