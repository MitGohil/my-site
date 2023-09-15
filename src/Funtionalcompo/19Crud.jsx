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

                <input className='m-2 p-3' type="text" value={name} name="" id="" onChange={(e) => setName(e.target.value)} />
                <button className='m-2 p-4 btn btn-success' onClick={handleadd}>Add-Item</button>
            </div>
            {
                alldata.map((data) =>
                    <div className='text-center'>
                        <h1 className='fw-bold fst-italic text-decoration-underline'>{data}</h1>
                        <button className='m-1 btn btn-info'>Edit</button>
                        <button className='m-1 btn btn-info'>Delete</button>
                    </div>

                )
            }
        </>
    );
}

export default Crud;