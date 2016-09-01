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
  _goHome = (scr) => {
    this.setState({currentScreen: scr})
  }

  _playGame = (scr, difficulty) => {
    this.setState({
      currentScreen: scr,
      difficulty: difficulty
    })
  }

  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'home': screen = <Home play={this._playGame} />
        break
      case 'game': screen = <Game difficulty={this.state.difficulty} goHome={this._goHome} />
        break
      default: screen = <Home play={this._playGame} />
    }
    return <div className="App">
      {screen}
    </div>
  }
}

export default App
