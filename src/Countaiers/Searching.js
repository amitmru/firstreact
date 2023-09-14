import React, { useEffect, useState } from 'react';


function Searching(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [qData, setQdata] = useState([]);
    const [searchItem, setSearchItem] = useState();


    const getRequest = async () => {
        const responce = await fetch('https://fakestoreapi.com/products');

        const Data = await responce.json();

        console.log(Data);

        setQdata(Data);

        setIsLoading(false);
    }

    useEffect(() => {
        getRequest();
    }, []);

    return (
        <div className='counatiner'>
            {
                isLoading ? (<h1>Loading...</h1>) :

                    <>
                        <input name="text" placeholder='Search...' className='searchBox' onChange={((event) => setSearchItem(event.target.value))} />

                        <h1>Products</h1>
                        {/* <div className='row'>
                            {qData.filter((v) => {
                                if (searchItem === " ") {
                                    return v;
                                } else if (v.category.toLowerCase().includes(searchItem.toLowerCase())) {
                                    return v;
                                }
                            }).map((value) =>
                                <div className='col-4'>
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
                            )}
                        </div> */}
                        <div className='row'>
                        {qData.map((value) => 
                            <div className='col-4'>
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
                        )}
                        </div> 
                    </>
            }
        </div>
    );
}

export default Searching;

