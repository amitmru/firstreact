import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'INDIA'
        }
    }
    
    changeCountry = () => {
        this.setState ({
            countryName : 'BHARAT'
        })
        // console.log("AAAAA");
    }

    render() {
        return (
            <div>
               <h1>Country Compontes {this.props.name}</h1> 
                <h2>Our Country Is : {this.state.countryName}</h2>

                <button onClick={this.changeCountry}>Change Country</button>
            </div>
        );
    }
}



export default Country;
