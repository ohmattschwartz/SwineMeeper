import React, { Component } from 'react'
<<<<<<< HEAD
import Game from './Game'
import Home from './Home'
=======
import Homepage from './Homepage'
import Cell from './Cell'
>>>>>>> 81448c4addf6c03b12303e16bed0ea14a84cf89f
import '../styles/screen.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {
<<<<<<< HEAD
      currentScreen: 'home',
      difficulty: 0
    }
  }

  _playgame = (scr, difficulty) => {
    this.setState({
      currentScreen: scr,
      difficulty: difficulty
=======
      board: [],
      difficulty: 1,
      display: 'home'
    }
  }
//fetch is working because the window.fetch is a callback in this case
  playGame = (diff, dis) => {
    this.setState({difficulty: diff, display: dis}, () => {
    window.fetch(`${API_URL}/games?difficulty=${this.state.difficulty}`, {
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(data)
    })
  })
}

  revealCell = (row, col) => {
    window.fetch(`${API_URL}/games/${this.state.id}/check?row=${row}&col=${col}`, {
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(data)
>>>>>>> 81448c4addf6c03b12303e16bed0ea14a84cf89f
    })
  }
  render () {
<<<<<<< HEAD
    let screen
    switch (this.state.currentScreen) {
      case 'home': screen = <Home play={this._playgame} />
        break
      case 'game': screen = <Game difficulty={this.state.difficulty} />
        break
      default: screen = <Home play={this._playgame} />
    }
    return <div>{screen}</div>
=======
    if (this.state.display==='game'){
    const rows = this.state.board.map((row, i) => {
      const cells = row.map((cell, j) => {
        return <Cell
          type={cell}
          revealCell={this.revealCell}
          flagCell={this.flagCell}
          row={i}
          col={j}
          key={j} />
      })
      return <tr key={i}>{cells}</tr>
    })
    return <div>
      <h1>Bomb Sniffer!</h1>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
    }
    else {
      return (<Homepage playGame={this.playGame} />)
    }
>>>>>>> 81448c4addf6c03b12303e16bed0ea14a84cf89f
  }
}

export default App
