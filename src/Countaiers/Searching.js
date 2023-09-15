import React, { useEffect, useState } from 'react';


function Searching(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [qData, setQdata] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [filterData, setFilterData] = useState([]);


    const getRequest = async () => {
        const responce = await fetch('https://fakestoreapi.com/products');

        const Data = await responce.json();

        setQdata(Data)

        setIsLoading(false);

    }

    useEffect(() => {
        getRequest();
    }, []);

    const findData = (val) => {
        setSearchItem(val);

        let SearchData = qData.filter((v) => v.category.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val.toString()) ||
            v.rating.rate.toString().includes(val.toString()));

        setFilterData(SearchData);
    }

    const FinalData = setFilterData.length > 0 ? filterData : qData;
    return (
        <div className='counatiner'>
            {
                isLoading ? (<h1>Loading...</h1>) :

                    <>
                        <input name="text" placeholder='Search...' className='searchBox' onChange={((event) => findData(event.target.value))} />

                        <h1>Products</h1>

                        <div className='row'>
                            {FinalData.map((value) => {
                                return (
                                    <div className='col-md-4'>
                                        <div className='image_Desc'>
                                            <div className='imageBox'>
                                                <img src={value.image} />
                                            </div>
                                            <div className='descBox'>
                                                <h2>Title : {value.category}</h2>
                                                <h2> Price : {value.price}</h2>
                                                <h2> Ratting : {value.rating.rate}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </>
            }
        </div>
    );
}

export default Searching;

