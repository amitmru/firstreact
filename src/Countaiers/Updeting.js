import React, { Component } from 'react'

class Updeting extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'shouldComponentUpdate Method'
    }
  }
  shouldComponentUpdate() {
    return false; //Change to true for state to update
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "componentDidMount Method"})
    }, 1000)
  }
  render() {
    return (
      <div>
       <p>This is a {this.state.name}</p>
      </div>
    )
  }
}

export default Updeting;