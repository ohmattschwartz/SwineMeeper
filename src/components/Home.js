import React, { Component } from 'react'
import { Select } from 'rebass'

class Home extends Component {
  _handleClick = () => {
    let select = document.querySelector("select[name='difficulty_level']")
    let difficulty = select.value
    this.props.play('game', difficulty)
  }
  render () {
    return <div className="Home">
      <h1>SwineMeeper</h1>
      <Select
        label="Manage your Meeping"
        name="difficulty_level"
        options={[{children: 'MassiveMeeps', value: 2}, {children: 'MiddleMeeps', value: 1}, {children: 'ManageableMeeps', value: 0}]}
        rounded
      />
      <br />
      <button onClick={this._handleClick}>Meep Some Swine!</button>
    </div>
  }
}

Home.propTypes = {
  play: React.PropTypes.func.isRequired
}

export default Home
