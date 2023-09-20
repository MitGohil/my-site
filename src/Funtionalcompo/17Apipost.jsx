import React, { useEffect, useState } from 'react'

const Apipost = () => {

    const [name, setName] = useState("")
    const [enrl, setEnrl] = useState("")
    const [standard, setStandard] = useState("")
    const [percentage, setPercentage] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [user, setUser] = useState([])
    const [sec, setSec] = useState(false)



    const savedata = (event) => {
        // if (name === "") {
        //     alert("Please enter your name")
        // }
        // else if (enrl === "") {
        //     alert("Please enter your Enrollment number")
        // }
        // else if (standard === "") {
        //     alert("Please enter your Standard")
        // }
        // else if (percentage === "") {
        //     alert("Please enter your Percentage")
        // }
        // else if (mobile === "") {
        //     alert("Please enter your Mobile number")
        // }
        // else if (address === "") {
        //     alert("Please enter your Address")
        // }
        // else {
        if (name === "" || enrl === "" || standard === "" || percentage === "" || mobile === "" || address === "") {
            alert("Please fill blank input")
        }
        else {
            const data = { name, enrl, standard, percentage, mobile, address }
            fetch("http://localhost:2020/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then((results) => {
                results.json().then((resp) => {

                })
            })
            setName("");
            setEnrl("");
            setStandard("");
            setPercentage("");
            setMobile("");
            setAddress("");
            event.preventDefault()
        }
        setSec(true)
    }

    useEffect(() => {
        fetch("http://localhost:2020/students").then((data) => {
            data.json().then((res) => {
                // console.log(res);
                setUser(res)
            })
        })
    }, [sec])
    const handledel = (index) => {
        user.splice(index, 1)
        setUser([...user])
    }
    return (
        <>
            <h1 className='text-center'>API post</h1>
            <form action="">
                <fieldset>
                    <h1 className='text-center'>Student Portal</h1>
                    <table className='mx-auto border border-5 border-danger ' width="100%" >
                        <tr>
                            <td><label className='m-2' htmlFor="name">Name :- </label></td>
                            <td><input className='m-2' type="text" name="" value={name} id="name" onChange={(e) => setName(e.target.value)} required /></td>
                            <td><label className='m-2' htmlFor="enrl">Enrollment No. :-</label></td>
                            <td><input className='m-2' type="number" name="" value={enrl} id="enrl" onChange={(e) => setEnrl(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label className='m-2' htmlFor="std">Standard :- </label></td>
                            <td><input className='m-2' type="text" value={standard} name="" id="std" onChange={(e) => setStandard(e.target.value)} required /></td>
                            <td><label className='m-2' htmlFor="per">Percentage :- </label></td>
                            <td><input className='m-2' type="number" name="" value={percentage} id="per" onChange={(e) => setPercentage(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label className='m-2' htmlFor="mo">Mobile No. :-  :- </label></td>
                            <td><input className='m-2' type="tel" name="" maxLength="10" value={mobile} id="mo" onChange={(e) => setMobile(e.target.value)} required /></td>
                            <td><label className='m-2' htmlFor="add">Address :- </label></td>
                            <td><input className='m-2' type="text" name="" value={address} id="add" onChange={(e) => setAddress(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-center'><input className='rounded-9 my-2 btn btn-success' type="button" value="SUBMIT" onClick={savedata} /></td>
                        </tr>
                    </table>
                </fieldset>
            </form>
            <table className='mx-auto my-2  text-dark text-center ' width="100%">
                <tr className='fw-bold fs-5 fst-italic text-decoration-underline'>
                    <td className=' p-2 bg-primary bg-gradient rounded-6 '>name</td>
                    <td className=' p-2 bg-success bg-gradient rounded-6 '>enrl</td>
                    <td className=' p-2 bg-secondary bg-gradient rounded-6'>standard</td>
                    <td className=' p-2 bg-info bg-gradient rounded-6'>percentage</td>
                    <td className=' p-2 bg-danger bg-gradient rounded-6'>mobile</td>
                    <td className=' p-2 bg-warning bg-gradient rounded-6'>address</td>
                    <td className=' p-2 bg-success bg-gradient rounded-6'  >EDIT</td>
                    <td className=' p-2 bg-danger bg-gradient rounded-6'  >DELETE</td>
                </tr>
                {
                    user.map((item, i) =>
                        <tr>
                            <td className=' p-2 bg-primary bg-gradient rounded-6 '>{item.name}</td>
                            <td className=' p-2 bg-success bg-gradient rounded-6 '>{item.enrl}</td>
                            <td className=' p-2 bg-secondary bg-gradient rounded-6'>{item.standard}</td>
                            <td className=' p-2 bg-info bg-gradient rounded-6'>{item.percentage}</td>
                            <td className=' p-2 bg-danger bg-gradient rounded-6'>{item.mobile}</td>
                            <td className=' p-2 bg-warning bg-gradient rounded-6'>{item.address}</td>
                            <td className='bg-success bg-gradient rounded-6' ><input className='fw-bold text-dark rounded-9 my-2 btn bg-gradient' type="button" value="EDIT" /></td>
                            <td className='bg-danger bg-gradient rounded-6' ><input className='fw-bold text-dark rounded-9 my-2 btn  bg-gradient' onClick={() => handledel(i)} type="button" value="DELETE" /></td>
                        </tr>
                    )
                }
            </table>
        </>
    );
}

export default Apipost;