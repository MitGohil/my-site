import React from 'react'

const User = (props) => {
    return (
        <>
            <h4>User</h4>
            <h5>{props.name} {props.data}</h5>
        </>
    );
}

export default User;