import React from 'react'
import { useState } from 'react'

const Crud = () => {
    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])

    const handleadd = () => {
        // console.log("handle add");
        // console.log(name);

        // Old data also remaining store in array, use spread operator
        if (name.length !== 0) {

            setAlldata(newData => [...newData, name])
            setName("")
        }
    }
    console.log(alldata);
    return (
        <>
            <div className='text-center' >

                <input type="text" value={name} name="" id="" onChange={(e) => setName(e.target.value)} />
                <button onClick={handleadd}>Add-Item</button>
            </div>
            {
                alldata.map((data) =>
                    <div className='text-center'>
                        <h1 >{data}</h1>
                        <button >Edit</button>
                        <button >Delete</button>
                    </div>

                )
            }
        </>
    );
}

export default Crud;