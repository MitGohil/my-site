import React, { createContext } from 'react'
import CompoC from './12.1CompoC';


const Fname = createContext()
const Lname = createContext()   

const Usecontexthook = () => {
    const name = "Gohil"
    const userName = {
        Name: "Jiyansh",
        age: 3
    }
    return (
        <>
            <Fname.Provider value={"Mitesh" + name + " " + userName.Name + " " + userName.age}>
                <Lname.Provider value={"Jaymeet"}>
                    <p>In Usecontext Hook, only two stage. creator and provider.</p>
                    <p><b>Send data from parent to any other component or component's child without tree</b></p>
                    <CompoC />
                </Lname.Provider>
            </Fname.Provider>
        </>
    );
}

export default Usecontexthook;
export { Fname, Lname }