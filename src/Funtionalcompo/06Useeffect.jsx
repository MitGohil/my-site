import React, { useState } from 'react'
import { useEffect } from 'react';
import User from './User';

const Useeffect = () => {

    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

    //Copy into user.jsx
    // useEffect(() => {
    //     // alert("Called use effect")
    //     console.log("Called use effect");
    // }, [count])


    useEffect(() => {
        alert("Called use effect one more times")
    })
    return (
        <>
            <h1>Use effect</h1>
            <p>After component render, first of all run function was useeffect</p>
            <p>We give many use effect</p>
            <p>useeffect run always one time as per page refresh</p>
            <p>useeffect run on mounting, updating and unmounting stage of life cycle</p>
            <p>control run useeffect on updating, than we use dependancy using [].</p>
            <p>give perticular function name in array, useeffect run on that perticular function/parameter. blank dependancy means run on only refresh of page</p>
            <p>useeffect and dependancy use on add to cart.</p>

            {/* <p>count :-{count} data :-{data}</p> */}
            {/* using props we get count and data from user */}
            <User count={count} data={data} />

            <button onClick={() => setCount(count + 1)}>Update count</button>
            <button onClick={() => setData(data + 1)}>Update data</button>
        </>
    );
}

export default Useeffect;