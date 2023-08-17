import React from 'react'
import { useEffect, useLayoutEffect } from 'react';


const Uselayouteffect = () => {

    useEffect(() => {
        console.log("Use effect called");
    })
    useLayoutEffect(() => {
        console.log("Use layout effect called");
    })

    return (
        <>
            <h1>Uselayouteffect</h1>
            <p>uselayouteffect run before rendering the component</p>
            <p>But after rendering component, useeffect run first</p>
            <p>befoer DOM execute , uselayouteffect run</p>
            <p>after DOM execute, useeffect run</p>
            <p>uselayouteffect run on async</p>
            <p>useeffect run on sync</p>
        </>
    );
}

export default Uselayouteffect;