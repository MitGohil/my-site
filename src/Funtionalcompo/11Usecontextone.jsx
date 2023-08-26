import React, { createContext } from 'react'
import CompA from './11.1CompA';

const Fname = createContext()
const Useconntextone = () => {
    return (
        <>
            <Fname.Provider value={"Gohil" + 12345 + [1, 2, 3, 4, 5]}>
                <CompA name="MiteshA" />

                <p>send data from parent to pre-child component using create context functionality</p>
                <p>create context has a three stage. usecontext,provider and consumer</p>
                <p>Send multiple data using + sign</p>
                <p>crete context always out side the function</p>
                <p>This functionality use before hooks</p>
            </Fname.Provider>
        </>
    );
}

export { Fname }
export default Useconntextone;