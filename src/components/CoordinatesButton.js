// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    console.log(this.props)
    return(
      <div>
      <button onClick={this.handleClick}>Coordinates</button>
      </div>
    )
  }

}

export default CoordinatesButton;
