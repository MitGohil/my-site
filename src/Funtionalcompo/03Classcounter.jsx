import React, { Component } from 'react'

class Classcounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <>
                <button onClick={() => this.setState({count : this.state.count +1})}>Add {this.state.count}</button>
            </>
        );
    }
}

export default Classcounter;