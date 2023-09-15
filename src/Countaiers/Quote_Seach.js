import { useEffect, useState } from "react";

function Quote_Seach(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [qData, setQdata] = useState([]);
    const [searchTitle, setSeachTitle] = useState('')
    const [filterData, setFilterData] = useState([]);


    const getRequest = async () => {
        const responce = await fetch('https://type.fit/api/quotes');

        const Data = await responce.json();

        setQdata(Data);

        setIsLoading(false);
    }

    useEffect(() => {
        getRequest();
    },[])

    const findData = (val) => {

        setSeachTitle(val);

        let  SearchData = qData.filter((v) => v.text.toLowerCase().includes(val.toLowerCase()) ||
        v.author.toLowerCase().includes(val.toLowerCase()))

        // setQdata(SearchData)
        setFilterData(SearchData)

        // console.log(setFilterData);
    }

    let FinalData = filterData.length > 0 ? filterData : qData;

    return (
        <div className='counatiner'>
            {
                isLoading ?  <h1>Loading...</h1> : 
              
                <>
                        <input name="text" placeholder='Search...' className='searchBox' onChange={((event) => findData(event.target.value))} />
                        <br /> 
                        <br />
                        <br />
                        <br />
                        <div className='row'>
                            {FinalData.map((value) => {
                                return (
                                    <div className='col-md-4 border' key={value.id}>
                                        <h5>{value.text}</h5>
                                        <h2>{value.author}</h2>
                                    </div>
                                )
                            })}

                        </div>
                    </>
            }
        </div>
    );
}

export default Quote_Seach;