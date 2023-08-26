import React from 'react'
import CompoC from './11.3CompoC.jsx';


const CompB = (props) => {
    return (
        <>
             <h1>Use conntex tone</h1>
            <h3>{props.name}</h3>
           <CompoC name = "MiteshC" />
        </>
    );
}

export default CompB;