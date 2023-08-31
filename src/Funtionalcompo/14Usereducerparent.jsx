import React from 'react'

import Usereducerchild from './14.1Usereducerchild'

export const initialstate = 0

export const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    if (action.type === "MULTI") {
        return state * 2
    }
    if (action.type === "DIV") {
        return state / 2
    }
    if (action.type === "CLR") {
        return state = 0
    }
}

const Usereducerparent = () => {
    return (
        <>
            <h1>Usereducer hook using props</h1>
            <Usereducerchild />
        </>
    );
}

export default Usereducerparent;