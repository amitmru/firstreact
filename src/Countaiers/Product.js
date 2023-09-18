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
    const [isSort,setIsSort] = useState('')
    const [searchData, setSearchData] = useState('')
    const [active, setActive] = useState(null);
    const [category,setCategory] = useState([]);

    console.log(category);

    const getRequest = async () => {
        const responce = await fetch('https://dummyjson.com/products');

        const Data = await responce.json();

        let uniqData = [];

        Data.products.map((v) => {
            if (!uniqData.includes(v.category)) {
                uniqData.push(v.category)
            }
        })

        setCategory(uniqData);

        setProducts(Data.products)

        setIsLoading(false);

    }

    useEffect(() => {
        getRequest();
    }, [])

    // const findData = (val) => {

    //     setActive(val);
        
    //     setSearchItem(val);

    //     let SearchData = products.filter((v) => v.category.toLowerCase().includes(val.toLowerCase()));

    //     setFilterData(SearchData);
    // }

   
    const findSeachSortData = () => {

        let SearchData = products.filter((v) => v.category.toLowerCase().includes(searchData.toLowerCase()) ||
            v.price.toString().includes(searchData.toString()) ||
            v.rating.toString().includes(searchData.toString()));

            SearchData = products.filter((v) => {
                if (category !== '') {
                    v.category === category
                }
            })

            SearchData = SearchData.sort((a,b) => {
                if (isSort === 'lp') {
                    return a.price-b.price;
                } else if (isSort === 'hp') {
                    return b.price-a.price;
                } else if (isSort === 'az') {
                    return a.title.localeCompare(b.title)
                } else if (isSort === 'za') {
                    return b.title.localeCompare(a.title)
                }
            })

        return SearchData;
    }


    const FinalData = findSeachSortData();

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
                                    <input name="text" placeholder='Search...' className='searchBox' onChange={((e) => setSearchData(e.target.value))} />
                                </div>
                                
                                
                            </Navbar>
                            <hr />
                                <hr />
                        </>

                        <div className='counatiner'>

                            <h1 className='heding'>Online Shop</h1>

                            {/* <div className='row button_gap'>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('smartphones'))} style={{ backgroundColor: active === 'smartphones' ? "black" : "white" }}>
                                        smartphones
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('laptops'))} style={{ backgroundColor: active === 'laptops' ? "black" : "white" }}>
                                        laptops
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('fragrances'))} style={{ backgroundColor: active === 'fragrances' ? "black" : "white" }}>
                                        fragrances
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('skincare'))} style={{ backgroundColor: active === 'skincare' ? "black" : "white" }}>
                                        skincare
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('groceries'))} style={{ backgroundColor: active === 'groceries' ? "black" : "white" }}>
                                        groceries
                                    </Button>
                                </div>
                                <div className='col-md-2'>
                                    <Button outline onClick={((e) => findData('home'))} style={{ backgroundColor: active === 'home'? "black" : "white" }}>
                                        home-decoration
                                    </Button>
                                </div>
                                <div className='col-md-12'>
                                    <Button outline onClick={((e) => findData(''))} style={{ backgroundColor: active === '' ? "black" : "white" }}>
                                        All Products
                                    </Button>
                                </div>
                            </div> */}

                            <div className='row button_gap'>
                                <div>
                                 {
                                    category.map((v) => {
                                        return (
                                            <Button onClick={(() => setCategory)}>{v}</Button>
                                        )
                                    })
                                 }
                                </div>
                            </div>

                            <div className="sorting__widget">
                                <select className="w-50 selectBox" onChange={((e) => setIsSort(e.target.value))}>
                                    <option value=''>All Products</option>
                                    <option value="az">Alphabetically, A-Z</option>
                                    <option value="za">Alphabetically, Z-A</option>
                                    <option value="hp">High Price</option>
                                    <option value="lp">Low Price</option>
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