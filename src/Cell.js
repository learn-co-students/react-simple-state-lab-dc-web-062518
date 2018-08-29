import React from 'react'

export default class Cell extends React.Component{
  constructor(props){
    super(props)
    this.state={
      color: this.props.value
    }
  }
  handleOnClick=()=>{
    this.setState({color: "#333"})
  }

  render(){
    return (
      <div onClick={this.handleOnClick} className='cell' style={{backgroundColor:this.state.color}}/>
    )
  }
}
