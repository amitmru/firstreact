import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Countryfun(props) {

    const [countryName, setChangeName] = useState('INDIA');

    const changeCountry = () => {
        setChangeName('UK');
    }

    return (
        <div>
            <h1>Country Based Function Components</h1>
            <h2>Country Name : {countryName}</h2>
            <Cityfun country_Name = {countryName} />
            <button onClick={changeCountry}>Change Country</button>
        </div>
    );
}

export default Countryfun;
