import React, { useContext } from 'react'
import { Fname, Lname } from './12Usecontexthook';


const CompoC = () => {
    const data = useContext(Fname)
    const data1 = useContext(Lname)
    return (
        <>
            <h1>Use context hooks </h1>
            <h4>{data} {data1}</h4>
        </>
    );
}

export default CompoC;