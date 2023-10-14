import React from 'react';
import { Decrement, Increment } from '../../Redux/action/counter.action';
import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {

    const c = useSelector(state => state.counter)

    let dispatch = useDispatch()

    const increment = () => {
        dispatch(Increment())
    }

    const decrement = () => {
        dispatch(Decrement())
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            {c.count}
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;