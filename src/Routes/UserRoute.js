import React from 'react';
import Header from '../Components/Header/Header';
import { Route, Routes } from 'react-router';
import Data from '../Countaiers/Data/Data';
import Cart from '../Countaiers/Cart/Cart';
import Todo from '../Countaiers/Todo/Todo';

function UserRoute(props) {
    return (
        <>
            <Header />
            <Routes>
                {/* <Route exact path='/' element={<Data />} />
                <Route exact path='/Cart' element={<Cart />} /> */}
                <Route exact path='/' element={<Todo />} />
            </Routes>
        </>
    );
}

export default UserRoute;