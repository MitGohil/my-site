import React from "react";
import { Component } from "react";


class Classcompostate extends Component {

    //Change functionality on run time use construction function
    //super() compelsory, without super constructor function not work.
    constructor(props) {
        super(props)
        this.state = {
            data: "Something",
            count: 0,
            name: ""
        }
        this.datamember = "DM"
        console.log(this.datamember);
    }

    changeData = () => {
        console.log("Called");
        this.setState({ data: "Testing" })
        this.datamember = "Change"
    }

    Increament = () => {
        this.setState({ count: this.state.count + 1 })
        this.setState({ name: this.state.name = "You do Increament" })

    }
    Decrement = () => {
        this.setState({ count: this.state.count - 1 })
        this.setState({ name: this.state.name = "You do Decrement" })



    }


    render() {
        let Something = "data"
        return (
            <>

                <p>Change Data</p>
                <button onClick={this.changeData}>Click</button>
                {Something}
                <p><strong>State</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.data}</p>
                {this.datamember}


                <h1>{this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.Increament} >Increament</button> <span></span>
                <button onClick={this.Decrement} >Decrement</button>

            </>
        );
    }
}
export default Classcompostate;