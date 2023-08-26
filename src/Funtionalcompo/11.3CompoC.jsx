import React from 'react'
import { Fname } from './11Usecontextone';
const CompoC = (props) => {
    return (
        <>

            <h1>Use conntex tone</h1>
            <h3>{props.name}</h3>
            <Fname.Consumer>
                {
                    // Take anything parameter name. fname, data, etc
                    (fname) => {
                        return <h1>Hello {fname}</h1>
                    }
                }


            </Fname.Consumer>
        </>
    );
}

export default CompoC;