import React, { useEffect, useState } from 'react';

function Quote(props) {

    //1
    const [isLoading, setIsLoading] = useState(true);
    const [qData, setQdata] = useState([]);
    const [index, setIndex] = useState(0);

    const getRequest = async () => {
        const responce = await fetch('https://type.fit/api/quotes');

        const Data = await responce.json();

        setQdata(Data);

        setIsLoading(false);
    }

    const previousPage = () => {

        let newIndex = index - 1;

        setIndex(newIndex)
    }

    const nextPage = () => {

        let newIndex = index + 1;

        setIndex(newIndex)
    }
    //3
    useEffect(() => {
        getRequest();
    },[])

    //2
    return (
        <div>
            {
               isLoading ?  <h1>Loading...</h1> : 
               <div  className='QuoteData'>
                {/* {console.log(qData)} */}
               <p>{qData[index].text}</p>
               <h4>--- {qData[index].author}</h4>
               <button 
               onClick={previousPage}
               disabled = {index === 0 ? true : false}
               >Previous</button>
               <button 
               onClick={nextPage}
               disabled = {index === qData.length - 1 ? true : false}
               >Next</button>
               </div>
            }
        </div>
    );
}

export default Quote;