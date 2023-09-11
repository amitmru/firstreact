import React, { useState } from 'react';

function Counterfun(props) {

    const [counter, setCounter] = useState(0);

    const valueAdd = () => {
        console.log('+++');
        if (counter < 5) {
            setCounter(counter + 1)
        }
    }

    const valueDecr = () => {
        console.log('---');
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <h1>Counter Based Function Components</h1>
            <button onClick={valueAdd}>+</button>
              {counter}
            <button onClick={valueDecr}>-</button> 
        </div>
    );
}

export default Counterfun;