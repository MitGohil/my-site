import React from 'react'
import CompB from './11.2CompB.jsx';


const CompA = (props) => {
    return (
        <>
             <h1>Use conntex tone</h1>
            <h3>{props.name}</h3>
            <CompB name = "MiteshB" />

        </>
    );
}

export default CompA;