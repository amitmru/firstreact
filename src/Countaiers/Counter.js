import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count : 0
        }
    }
    
    valueAdd = () => {
        if (this.state.count < 5) {
            this.setState({
                count : this.state.count + 1
            })
        }  
    }

    valueDecr = () => {
        if (this.state.count > 0) {
            this.setState({
                count : this.state.count - 1
            })
        }  
    }

    render() {
        return (
            <div>
              <button onClick={this.valueAdd}>+</button>
              {this.state.count}
              <button onClick={this.valueDecr}>-</button> 
            </div>
        );
    }
}

export default Counter;