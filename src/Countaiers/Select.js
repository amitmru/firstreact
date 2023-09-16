import React, { useEffect, useState, } from 'react';



function Select(props) {

    const [objectsToShow, setToShow] = useState();


    const getRequest = async () => {
        const responce = await fetch('https://dummyjson.com/products');

        const Data = await responce.json();

        console.log(Data.products);

        setToShow(Data.products)

    }

    useEffect(() => {
        getRequest();
    }, [])
    return (
        <div>
            <div className='row'>
                {objectsToShow.map((value) => {
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
    );
}

export default Select;