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
        if (name === "") {
            alert("Please enter your name")
        }
        else if (enrl === "") {
            alert("Please enter your Enrollment number")
        }
        else if (standard === "") {
            alert("Please enter your Standard")
        }
        else if (percentage === "") {
            alert("Please enter your Percentage")
        }
        else if (mobile === "") {
            alert("Please enter your Mobile number")
        }
        else if (address === "") {
            alert("Please enter your Address")
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
   
    return (
        <>
            <h1>API post</h1>

            <form action="">
                <fieldset>

                    <legend>Student Portal</legend>
                    <table cellPadding="10" border="2px" className='mx-auto' width="70%" >
                        <tr>
                            <td><label htmlFor="name">Name :- </label></td>
                            <td><input type="text" name="" value={name} id="name" onChange={(e) => setName(e.target.value)} required /></td>
                            <td><label htmlFor="enrl">Enrollment No. :-</label></td>
                            <td><input type="number" name="" value={enrl} id="enrl" onChange={(e) => setEnrl(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="std">Standard :- </label></td>
                            <td><input type="text" value={standard} name="" id="std" onChange={(e) => setStandard(e.target.value)} required /></td>
                            <td><label htmlFor="per">Percentage :- </label></td>
                            <td><input type="number" name="" value={percentage} id="per" onChange={(e) => setPercentage(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="mo">Mobile No. :-  :- </label></td>
                            <td><input type="tel" name="" maxLength="10" value={mobile} id="mo" onChange={(e) => setMobile(e.target.value)} required /></td>
                            <td><label htmlFor="add">Address :- </label></td>
                            <td><input type="text" name="" value={address} id="add" onChange={(e) => setAddress(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><input type="submit" value="SUBMIT" onClick={savedata} /></td>
                        </tr>
                    </table>
                </fieldset>
            </form>
            <table border="1" width="70%" className='mx-auto' style={tablestyle}>
                <tr>
                    <td style={tablestyle}>name</td>
                    <td style={tablestyle}>enrl</td>
                    <td style={tablestyle}>standard</td>
                    <td style={tablestyle}>percentage</td>
                    <td style={tablestyle}>mobile</td>
                    <td style={tablestyle}>address</td>
                </tr>
                {
                    user.reverse().map((item) =>
                        <tr style={tablestyle}>
                            <td style={tablestyle}>{item.name}</td>
                            <td style={tablestyle}>{item.enrl}</td>
                            <td style={tablestyle}>{item.standard}</td>
                            <td style={tablestyle}>{item.percentage}</td>
                            <td style={tablestyle}>{item.mobile}</td>
                            <td style={tablestyle}>{item.address}</td>
                        </tr>
                    )
                }
            </table>
        </>
    );
}

export default Apipost;