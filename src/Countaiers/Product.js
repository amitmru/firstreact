import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Dropdown,
} from 'reactstrap';

function Product(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [active, setActive] = useState(false);

    const getRequest = async () => {
        const responce = await fetch('https://dummyjson.com/products');

        const Data = await responce.json();

        setProducts(Data.products)

        setIsLoading(false);

    }

    useEffect(() => {
        getRequest();
    }, [])

    const findData = (val,e) => {

        setActive(!active);
        
        setSearchItem(val);

        let SearchData = products.filter((v) => v.category.toLowerCase().includes(val.toLowerCase()));

        setFilterData(SearchData);
    }

    const changeVlaue = (value) => {
        // console.log(value);

        let PData;

        if (value === 'ascending') {
            PData = [...products].sort((a, b) => a.title > b.title ? 1 : -1);
        } else if (value === 'descending') {
            PData = [...products].sort((a, b) => a.title > b.title ? -1 : 1);
        } else if (value === 'high-price') {
            PData = [...products].sort((a, b) => b.price - a.price)
        } else if (value === 'low-price') {
            PData = [...products].sort((a, b) => a.price - b.price)
        }

        setFilterData(PData);
    }


    const FinalData = filterData.length > 0 ? filterData : products;

    return (
        <div className=''>
            {
                isLoading ? (<h2>Loading...</h2>) :
                    <>
                        <>
                            <Navbar
                                className="navbar_nav"
                            >

                                <div className='headerLogo'>
                                    <img src={Logo} />
                                </div>
                                <nav>
                                    <ul className='list'>
                                        <li><a href=''>Home </a></li>
                                        <li><a href=''>Shop </a></li>
                                        <li><a href=''>Contect Us </a></li>
                                        <li><a href=''>About Us </a></li>
                                    </ul>
                                </nav>
                                <div>
                                    <input name="text" placeholder='Search...' className='searchBox' />
                                </div>
                                
                                
                            </Navbar>
                            <hr />
                                <hr />
                        </>

                        <div className='counatiner'>

                            <h1 className='heding'>Online Shop</h1>

                            <div className='row button_gap'>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('smartphones'))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        smartphones
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('laptops'))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        laptops
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('fragrances'))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        fragrances
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('skincare'))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        skincare
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('groceries'))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        groceries
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('home'))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        home-decoration
                                    </Button>
                                </div>
                                <div className='col-md-12'>
                                    <Button outline onClick={((e) => findData(''))} style={{ backgroundColor: active ? "green" : "white" }}>
                                        All Products
                                    </Button>
                                </div>
                            </div>


                            <div className="sorting__widget">
                                <select className="w-50 selectBox" onChange={((e) => changeVlaue(e.target.value))}>
                                    <option value=''>All Products</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>


                            <div className='row'>
                                {FinalData.map((value) => {
                                    return (
                                        <div className='col-md-4'>
                                            <div className='image_Desc'>
                                                <div className='imageBox'>
                                                    <img src={value.thumbnail} />
                                                </div>
                                                <div className='descBox'>
                                                    <h2>category : {value.category}</h2>
                                                    <h2>Title : {value.title}</h2>
                                                    <h2> Price : {value.price}</h2>
                                                    <h2> Ratting : {value.rating}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </>

            }
        </div>
    );
}

export default Product;