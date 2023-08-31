import React, { useReducer } from 'react'
import { initialstate, reducer } from './14Usereducerparent'



const Usereducerchild = (props) => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    return (
        <>
            <h3>Use reducer child</h3>
            <h2>{state}</h2>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "INCREMENT" })}>Increament</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "DECREMENT" })}>Decreament</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "MULTI" })}>Multiply</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "DIV" })}>Divide</button>
            <button className='mx-2 p-1 px-2 rounded-pill' onClick={() => dispatch({ type: "CLR" })}>Clear</button>
        </>
    );
}

export default Usereducerchild;