import React, { Component } from 'react';
import Matrix from './Matrix.js'

export default class Cell extends Component {

  constructor(props) {
    super(props)
    // console.log(props.value);
    this.state = {
      color: this.props.value
    }
  }

  handleOnClick = (event) => {
    //when activated, updates the state to the following hex value: '#333' - ayana
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
        onClick={this.handleOnClick}
        className="cell"
        style={{ backgroundColor: this.state.color }}
        >
      </div>
    )
  }

}
