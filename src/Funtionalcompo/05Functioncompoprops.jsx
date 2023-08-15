import React from 'react'
import User from './User';

const Functioncompoprops = () => {
    const age = 26
    return (
        <>
            <h1>Functional component props</h1>
            <User name = "Mitesh" data = {age} />
        </>
    );
}

export default Functioncompoprops;