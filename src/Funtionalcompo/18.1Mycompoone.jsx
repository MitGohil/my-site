import React, { useState } from 'react'
import useCustomhooks from './18.3useCustomhooks.jsx'

const Mycompoone = () => {

    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])

    useCustomhooks(count)
    return (
        <>
            <h1>Mycompo one</h1>

            <button onClick={() => setCount(count + 1)}>{count} : count</button>
        </>
    );
}

export default Mycompoone;