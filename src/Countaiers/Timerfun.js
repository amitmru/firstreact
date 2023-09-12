import React, { useEffect, useState } from 'react';

function Timerfun(props) {

    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        const timer = setInterval(() => tick(),1000);

        return () => {
            clearInterval(timer)
        }
    }, [time])
    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Timerfun;