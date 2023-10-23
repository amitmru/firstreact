import React from 'react';
import Header from '../Components/Header/Header';
import { Route, Routes } from 'react-router';
import Data from '../Countaiers/Data/Data';
import Cart from '../Countaiers/Cart/Cart';

function UserRoute(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Data />} />
                <Route exact path='/Cart' element={<Cart />} />
            </Routes>
        </>
    );
}

export default UserRoute;