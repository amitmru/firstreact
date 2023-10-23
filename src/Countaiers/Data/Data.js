import React, { useEffect } from 'react';
import { cartAdd } from '../../Redux/action/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/action/data.action';

function Data(props) {

    const dispatch = useDispatch()

    const data = useSelector(state => state.data)


    useEffect(() => {
        dispatch(getData())
    }, [])


    const hadleAddCart = (id) => {
        dispatch(cartAdd(id))
    }

    
    
    return (
        <div className='conatiner'>
             <div className='row'>
                {
                    data.data.map((v) => {
                        return (
                            <div className='col-4 border cart'>
                                <h1>{v.name}</h1>
                                <h1>{v.price}</h1>
                                <h1>{v.expiry}</h1>
                                <button onClick={() => hadleAddCart(v.id)}>Add To Card</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Data;