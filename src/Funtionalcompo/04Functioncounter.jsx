import React from 'react'
import { useState } from 'react';

const Functioncounter = () => {
    //useState always take two arguments.
    //First argument set initial value, and 2nd argument manage upgarded value.
    //Here initial value was 0
    //2nd argument always in camel case

    //    const [count, setCount]= useState(0)

    const startNUmber = 55
    const [count, setCount] = useState(startNUmber)

    return (
        <>
            {/* <button onClick={() => setCount(count + 1)}>Add {count}</button> */}
            <button onMouseOver={() => setCount(count + 1)}>Add {count}</button>
        </>
    );
}

export default Functioncounter;