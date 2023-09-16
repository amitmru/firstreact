import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const [filterPrice, setFilterPrice] = useState([]);
    const [Price, setPrice] = useState([]);



    const getRequest = async () => {
        const responce = await fetch('https://dummyjson.com/products');

        const Data = await responce.json();

        // console.log(Data.products);

        setProducts(Data.products)

        setIsLoading(false);

    }

    useEffect(() => {
        getRequest();
    }, [])

    const findData = (val) => {
        // console.log('idadnh');
        setSearchItem(val);

        let SearchData = products.filter((v) => v.category.toLowerCase().includes(val.toLowerCase()));

        setFilterData(SearchData);
    }

    const changeVlaue = (value) => {
        // console.log(value);

        let PData;

        if (value === 'ascending') {
            PData = [...products].sort((a,b) => a.title > b.title ? 1 : -1);
        } else if (value === 'descending') {
            PData = [...products].sort((a,b) => a.title > b.title ? -1 : 1);
        } else if (value === 'high-price') {
            PData = [...products].sort((a,b) => b.price - a.price)
        } else if (value === 'low-price') {
            PData = [...products].sort((a,b) => a.price - b.price)
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
                                className="my-2"
                                color="dark"
                                dark
                            >
                                <NavbarBrand href="/">
                                    <img
                                        alt="logo"
                                        src="../public/logo.png"
                                        style={{
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                    <input name="text" placeholder='Search...' className='searchBox' />
                                </NavbarBrand>
                            </Navbar>

                        </>

                        <div className='counatiner'>

                            <h1 className='heding'>Online Shopping</h1>

                            <div className='row button_gap'>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData('smartphones'))}>
                                        smartphones
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData('laptops'))}>
                                        laptops
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData('fragrances'))}>
                                        fragrances
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData('skincare'))}>
                                        skincare
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData('groceries'))}>
                                        groceries
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData('home'))}>
                                        home-decoration
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={(() => findData(''))}>
                                        All Products
                                    </Button>
                                </div>
                            </div>


                            <div className="sorting__widget text-end">
                                <select className="w-50" onChange={((e) => changeVlaue(e.target.value))}>
                                    <option value=''>Default</option>
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