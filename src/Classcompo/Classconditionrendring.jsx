import React from "react";
import { Component } from "react";

class Classconditionrendring extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false
        }
    }
    render() {

        // if (this.state.isLogin) {
        //     return <>
        //         <div>
        //             <h1>Welcome True value1</h1>
        //         </div>
        //     </>
        // }
        // else {
        //     return <>
        //         <div>
        //             <h1>Welcome false value1</h1>
        //         </div>
        //     </>

        // }


        //     let msg
        //     if (this.state.isLogin) {
        //         msg = <div><h1>Welcome true value2</h1></div>
        //     }
        //     else {
        //         msg = <div><h1>welcome false value2</h1></div>
        //     }
        //     return msg

        return this.state.isLogin ? <div><h1>Welcome True value3</h1></div> : <div><h1>Welcome false value3</h1></div>

        return this.state.isLogin && <div><h1>Welcome true value 4</h1></div>
    }

}

export default Classconditionrendring;