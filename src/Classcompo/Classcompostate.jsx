import React from "react";
import { Component } from "react";


class Classcompostate extends Component {

    //Change functionality on run time use construction function
    //super() compelsory, without super constructor function not work.
    constructor() {
        super()
        this.state = {
            count: 0,
            name : ""
        }
    }
    Increament = () => {
        this.setState ({count : this.state.count + 1})
        this.setState ({name : this.state.name = "You do Increament"})
        
    }
    Decrement = () => {
        this.setState({ count: this.state.count - 1 })
        this.setState ({name : this.state.name = "You do Decrement"})


        
    }


    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <h2>{ this.state.name}</h2>
                <button onClick={this.Increament} >Increament</button> <span></span>                
                <button onClick={this.Decrement} >Decrement</button>

            </>
        );
    }
}
export default Classcompostate;