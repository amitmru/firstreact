import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                <h1>City Componets</h1>
                <h3>City Name : {this.props.country === 'INDIA' ? 'SURAT' : 'LONDAN'}</h3>
            </div>
        )
    }
}

export default City;