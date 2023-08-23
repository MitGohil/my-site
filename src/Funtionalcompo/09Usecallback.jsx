import React, { useCallback, useState } from 'react'
import Usechild from './10Usechild';

const Usecallback = () => {
    const [count, setCount] = useState(5)
    // function loading() {

    // }

    const loadingwithcallback = useCallback(function loading() {

    }, []
    )
    return (
        <>
            <h1>Usecallback</h1>
            {/* <Usechild loading={loading} /> */}
            {/* Here we send value to child, tha  we use memo to stop the childcalled */}


            <Usechild loading={loadingwithcallback} />
            {/* Here we send callback function to child, we use usecalback hook to stop childcalled */}


            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Count btn</button>
            <p> Here child was called, but in reallity it was no called.
                count was re-render. which should not happen.
                stop this use memo in child.</p>
            <p>After using memo in child, count was not re-render.</p>
            <p>If we create a function and send it to child, than again usechild function was called</p>

            <p><b>Kisi or component se koi function call krenge, to bki ke sbhi function call honge</b></p>
            <p><b>bki ke function ka call band krne k liye useCallback memo ka use hota hai</b></p>

            <p><b>ek hi component se function ko call krne ke bad bki ke sabhi function call hote hai, isko band krne k liye useMemo</b></p>

            <p>usecallback return memoized callback function</p>
            <p>Usememo return memoized value</p>

        </>
    );
}

export default Usecallback;