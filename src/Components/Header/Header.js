import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import Data from '../../Countaiers/Data/Data';


function Header(props) {

    const cart = useSelector(state => state.cart)

    let qty = 0;

    cart.cart.map((v) => {
        qty = qty + v.qty;
    })


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div>
            <header class="brand-navigation">
                <div class="content">
                    <nav>
                        <ul class="navigation">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <button class="button-dark">Keine Ahnung</button>
                    <NavLink to='/Cart'>
                        <Badge badgeContent={qty} color="primary">
                            <AddShoppingCartIcon className="addicon" />
                        </Badge>
                    </NavLink>

                </div>
            </header>
        </div>
    );
}

export default Header;