import React, { Component } from 'react';

class Timer extends Component {

    // 1.
    constructor(props) {
        super(props);
        
        this.state = {
            time : new Date()
        }
    }

    tick = () => {
        console.log("tick");
        this.setState({
            time : new Date()
        })
    }
    
    // 3.

    componentDidMount = () => {
        console.log("componentDidMount");
        setInterval(() =>this.tick(),1000);
    }

    // 5.
    componentDidUpdate = (prevprops, prevstate) => {
        
        if (this.state.time !== prevstate) {
            console.log("componentDidUpdate");
        }
    }

    // 6.
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
        clearInterval(this.time)
    }

    // 2. // 4.
    render() {
        return (
            <div>
              <h2>{this.state.time.toLocaleTimeString()}</h2>  
            </div>
        );
    }
}

export default Timer;