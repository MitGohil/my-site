import React, { useRef } from 'react'

const Useref = () => {
    const inputRef = useRef(null)
    function inputUpdate() {
        // console.log("input Upate called");
        // inputRef.current.value = "ReactJS"
        inputRef.current.focus()
        inputRef.current.value.toUpperCase()
        inputRef.current.style.color = "darkblue"
        inputRef.current.style.backgroundColor = "pink"
    }
    return (
        <>
            <h1>Useref</h1>
            <input type="text" ref={inputRef} />
            <button onClick={inputUpdate}>Update</button>
        </>
    );
}

export default Useref;