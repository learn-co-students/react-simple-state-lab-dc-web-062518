import React from 'react';


class Cell extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    color: this.props.value
  }
  // ...define initial state with a key of 'color' set to the 'value' prop
}

handleClick = () => {
  this.setState({
    color: '#333'
  })
}

render(){
  return(
    <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}} >
      {this.state.color}
    </div>
  )
}
}

export default Cell
