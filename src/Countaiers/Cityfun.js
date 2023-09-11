import React from 'react';

function Cityfun(props) {
    return (
        <div>
            <h1>City Based Function Components</h1>
            <h2>City Name : {props.country_Name === 'INDIA' ? 'SURAT' : 'LONDON'}</h2>
        </div>
    );
}

export default Cityfun;