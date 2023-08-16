import React from 'react'
import { useEffect } from 'react';

const User = (props) => {
    useEffect(() => {
        // alert("Called use effect")
        console.log("Called use effect");
    }, [props.count])
    return (
        <>
            <h3>User</h3>
            <p>{props.name}  {props.email}</p>
            <p>{props.count}</p>
            <p>{props.data}</p>
        </>
    );
}

export default User;