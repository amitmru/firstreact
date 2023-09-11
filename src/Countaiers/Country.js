import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'INDIA'
        }
    }
    
    changeCountry = () => {
        this.setState ({
            countryName : 'UK'
        })
    }

    render() {
        return (
            <div>
               <h1>Country Compontes</h1> 
                <h2>Our Country Is : {this.state.countryName}</h2>

                <button onClick={this.changeCountry}>Change Country</button>

                <City country={this.state.countryName}/>
            </div>
        );
    }
}



export default Country;
