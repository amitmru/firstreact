import React, { Component } from 'react'

class Mounting extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'This name will change in 5 sec'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "This is a componentDidMount Method"})
    }, 5000)

  }
  render() {
    return (
      <div>
       <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default Mounting;