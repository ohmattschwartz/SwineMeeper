import React, { Component } from 'react'
import { Select } from 'rebass'

class Home extends Component {
  _handleClick = () => {
    let select =
    document.querySelector("select[name = 'difficulty_level']")
    let difficulty = select.value
    this.props.play('game', difficulty)
  }
  render () {
    return <div className="Home">
      <h1>BOMBSNIFFER</h1>
      <Select
        label="Select Your Difficulty"
        name="difficulty_level"
        options={[{children: 'Hard', value: 2}, {children: 'Medium', value: 1}, {children: 'Easy', value: 0}]} />
      <button onClick={this._handleClick}>Start Game</button>
    </div>
  }
}

Home.propTypes = {
  play: React.PropTypes.func.isRequired
}

export default Home
