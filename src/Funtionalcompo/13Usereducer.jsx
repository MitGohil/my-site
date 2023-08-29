import React, { useReducer, useState } from 'react'

// initialstate declare always out of function, because of in some time we pass object in initial value.
// In usereducer hook we can not pass the object.
const initialstate = 0

// Reducer is a pure function.
// Pure function take two parameters. state and action.
// Pure function always return something
const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    if (action.type === "MULTI") {
        return state * 2
    }
    if (action.type === "CLEAR") {
        return state * 0
    }
}


const Usereducer = () => {

    const [count, setCount] = useState(0)

    // Reducer was a pure function. Take as it is.
    // usereducer compare with usestate: count = state, setCount = dispatch, 0 = initialstate
    // Dispatch work : which function dispatch
    const [state, dispatch] = useReducer(reducer, initialstate)

    // const Increament = () => {
    //     setCount(count + 1)
    // }
    // const Decreament = () => {
    //     setCount(count - 1)
    // }
    return (
        <>
            <p><b>React basic hooks are : useState, useContext, useEffect. Who's provide functionality</b></p>
            <p>Other hoos are additional hooks</p>
            <p>reducer use for short the code</p>
            <p>reducer use for wrap the functions</p>
            <h2>{count}</h2>

            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => setCount(count + 1)}>Increament</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => setCount(count - 1)}>Decreament</button>
            {/* <button onClick={Increament}>Increament</button> */}
            {/* <button onClick={Decreament}>Decreament</button> */}

            {/* use dispatch with object. its key always type and value always in capital */}
            <h2>{state}</h2>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "INCREMENT" })}>Increament</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "DECREMENT" })}>Decreament</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "MULTI" })}>Multiply</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
        </>
    );
}

export default Usereducer;