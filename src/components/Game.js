import React, { Component } from 'react'
import Cell from './Cell'

const API_URL = 'http://minesweeper-api.herokuapp.com'

class App extends Component {
  constructor () {
    super()
    this.state = {
      board: []
    }
  }

  componentDidMount () {
    const gameId = window.localStorage.getItem('gameId')
    if (gameId) {
      window.fetch(`${API_URL}/games/${gameId}`)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (data.state === 'won' || data.state === 'lost') {
          this.createGame()
        } else {
          this.setState(data)
        }
      })
    } else {
      this.createGame()
    }
  }

  createGame () {
    window.fetch(`${API_URL}/games?difficulty=1`, {
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      window.localStorage.setItem('gameId', data.id)
      this.setState(data)
    })
  }

  revealCell = (row, col) => {
    window.fetch(`${API_URL}/games/${this.state.id}/check?row=${row}&col=${col}`, {
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(data)
    })
  }

  flagCell = (row, col) => {
    window.fetch(`${API_URL}/games/${this.state.id}/flag?row=${row}&col=${col}`, {
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(data)
    })
  }

  render () {
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
      <h1>Meep Some Swine!</h1>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
      <h2>Instructions:</h2>
      <p>Your pigs have gone crazy and, as all farmers know, Crazy Pigs need to be Meeped!  Click a cell to begin cleaning the pen. The numbers tell you how many pigs are in the adjacent cells.  Right-Click to Flag where you think your pigs are hiding. -BUT- Be careful not to startle the swine!</p>
    </div>
  }
}

export default App
