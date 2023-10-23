import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { decrementHadle, incrementHadle } from '../../Redux/action/cart.action';

function Cart(props) {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.data)

    const Cart = useSelector((state) => state.cart)

    const cartData = Cart.cart.map((v) => {
        let d = data.data.find((value) => value.id === v.id)

        return { ...d, qty: v.qty }

    })

    const handleIncrement = (id) => {
        dispatch(incrementHadle(id))
    }

    const handleDecrement = (id) => {
        dispatch(decrementHadle(id))
    }

    const hadleReomve = (id) => {

    }
    return (
        <div>
            <div className="row justify-content-center m-0">
                <div className="col-md-8 mt-5 mb-5">
                    <div className="card">
                        <div className="card-header p-3">
                            Cart Deteils
                        </div>
                        <div className="card-body p-0">
                            <table className="table cart-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartData.map((value, index) => {
                                            return (
                                                <tr>
                                                    <td><div className="product-name"><p>{value.name}</p></div></td>
                                                    <td>{value.price}</td>
                                                    <td>
                                                        <div className="prdct-qty-container">
                                                            {
                                                                Cart.cart.qty === 1 ? <button className="prdct-qty-btn" type="button" disabled={true} onClick={() => handleDecrement(value.id)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button> : <button className="prdct-qty-btn" type="button" onClick={() => handleDecrement(value.id)}>
                                                                    <RemoveIcon />
                                                                </button>
                                                            }
                                                            {/* <button className="prdct-qty-btn" type="button"  onClick={() => handleDecrement(value.id)}>
                                                                <i className="fa fa-minus"></i>
                                                            </button> */}
                                                            <span className='qty'>{value.qty}</span>
                                                            <button className="prdct-qty-btn" type="button" onClick={() => handleIncrement(value.id)}>
                                                                <AddIcon />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="prdct-delete" onClick={() => hadleReomve(value.id)}>
                                                            <DeleteIcon />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                {/* <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colSpan="3">&nbsp;</th>
                                        <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-danger"></span></th>
                                        <th className="text-right">Total Price<span className="ml-2 mr-2">:</span><span className="text-danger">$</span></th>
                                    </tr>
                                </tfoot> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;