import React, { Component } from 'react'
import Stateliftingchild from './Stateliftingchild'

class Stateliftingparent extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }



    // clickparent = () => {
    //     console.log("click parent");
    // }

    //for receiving data from child one paramenetr pass in function
    // Any other name can be taken instead of data, for receive data from child
    //     clickparent(data) {
    //     console.log("click parent", data);
    // }

    // If we use state , function in arrow function
    clickparent = (data) => {
        console.log("click parent", data);
        this.setState = {
            data: data
        }
    }

    render() {
        return (
            <>
                <h1>State lifting parent</h1>
                <Stateliftingchild name="Mitesh" click={this.clickparent} /> {/*Data sent to child*/}
            </>
        );
    }
}

export default Stateliftingparent;