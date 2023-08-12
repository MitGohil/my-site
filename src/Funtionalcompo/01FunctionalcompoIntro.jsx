import React from 'react'

// function FunctionalcompoIntro() { //This is factory function
const FunctionalcompoIntro = () => { //This is COnstructor function. without memory allocation- constructor function not possible.
    return (

        <>
            <div>
                <h1>Functional Component Introduction</h1>
                <p>Without Hooks, Function component was nothing</p>
                <p>Hooks are feature of  addition of react 16.8</p>
                <p>They allow to use react feature without having to write a class</p>
                <p>Avoid confusion of 'This' keyword</p>
                <p>allow to reuse stateful logic</p>
                <p>Organize logic inside the component into  reusable isolated units</p>
                <p><b>Only call Hooks at the top level</b></p>
                <p><b>Only call Hooks from react function</b></p>
                <p><b>Hooks always start from use</b></p>
            </div>
        </>
    )
}

export default FunctionalcompoIntro;
