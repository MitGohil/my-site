import React, { useMemo, useState } from 'react'


const Usememo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(2)

    // function multicount() {
    //     console.log("Multicount");
    //     return count * 2;
    // }

    //Now use usememo hooks
    const multicountwithmemo = useMemo(function multicount() {
        console.log("Multicount");
        return count * 2;
    }, [count])

    return (
        <>
            <h1>Usememo</h1>

            <h3>{count}</h3>
            <h3>{item}</h3>
            {/* <h3>{multicount()}</h3> */}
            <h3>{multicountwithmemo}</h3>

            <button onClick={() => setCount(count + 1)}>Count btn</button>
            <button onClick={() => setItem(item * 2)}>Item btn</button>
            <p>multicount function call on every time on button click</p>
            <p>we call multicount function only on count, but that was called on also item button</p>
            <p>if default function call, than other all function call automatically. Not give output but call every time</p>
            <p>stop this callback, we use usememo hooks</p>
            <p><b>Jab ek hi component me koi function call krenge, to bki ke sbhi function call honge</b></p>
            <p><b>bki ke function call krna band krne k liye useMemo ka use hota hai</b></p>
            <p>usememo hooks return memoized value</p>
        </>
    );
}

export default Usememo;