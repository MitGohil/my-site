import { useEffect, useState } from 'react'
import "../CM-cmp/header.css"


const Apichild = () => {

    const [user, setUser] = useState([])
    const [userp, setUserp] = useState([])

    // We take any name instead of data and res
    //API get, then after stored in data. After stored in data convert it into JSON formate (HTML view).
    //convert in to JSON we use it
    // View API calle or not : inspect in chrome > Network > Name

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
            data.json().then((res) => {
                // console.log(res);
                setUser(res)
            })
        })
    }
    )

    // fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
    //     data.json().then((res) => {
    //         console.log("res called");
    //     })
    // })
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((photo) => {
            photo.json().then((resp) => {
                // console.log("res called");
                setUserp(resp)
            })
        })
    }
    )
    // fetch("https://jsonplaceholder.typicode.com/photos").then((photo) => {
    //     photo.json().then((resp) => {
    //         // console.log("res called");
    //         setUserp(resp)
    //     })
    // })

    const tablestyle = {
        "border": "2px solid black",
        "textAlign": 'center',
    }
    return (
        <>
            <h1>API child</h1>
            <table border="1" width="70%" className='mx-auto' style={tablestyle}>
                <tr>
                    <td style={tablestyle}>userID</td>
                    <td style={tablestyle}>id</td>
                    <td style={tablestyle}>title</td>
                    <td style={tablestyle}>completed</td>
                </tr>
                {
                    user.map((item) =>
                        <tr style={tablestyle}>
                            <td style={tablestyle}>{item.userId}</td>
                            <td style={tablestyle}>{item.id}</td>
                            <td style={tablestyle}>{item.title}</td>
                            <td style={tablestyle}>{item.completed.toString()}</td>
                        </tr>
                    )
                }
            </table>
            <br />
            <br />
            <br />
            {/* <table border="1" width="70%" className='mx-auto' style={tablestyle}>
                <tr>
                    <td style={tablestyle}>albumId</td>
                    <td style={tablestyle}>id</td>
                    <td style={tablestyle}>title</td>
                    <td style={tablestyle}>url</td>
                    <td style={tablestyle}>thumbnailUrl</td>
                </tr>
                {
                    userp.map((item) =>
                        <tr style={tablestyle}>
                            <td style={tablestyle}>{item.albumId}</td>
                            <td style={tablestyle}>{item.id}</td>
                            <td style={tablestyle}>{item.title}</td>
                            <td style={tablestyle}><img src={`${item.url}`} alt="" /></td>
                            <td style={tablestyle}><img src={`${item.thumbnailUrl}`} alt="" /></td>
                        </tr>
                    )
                }
            </table> */}
            <div className="row" style={tablestyle} >
                {
                    userp.map((item) =>
                        <div className="col my-2 " >
                            <div className=' mx-auto py-2 abc ' style={tablestyle}>
                                <img className="rounded-circle mx-auto  apicss" src={`${item.thumbnailUrl}`} alt="" />
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Apichild;