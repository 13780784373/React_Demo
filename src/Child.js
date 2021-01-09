import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return (
      <li onClick={this.HandlerClick}>{ this.props.item }</li>
    )
  }
  HandlerClick = () => {
    console.log(this)
    this.props.remove(this.props.index)
  }
}
 
export default Child;