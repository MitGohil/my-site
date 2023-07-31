import React, { Component } from 'react'

class Classcompocontrolld extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    login = (event) => {
        event.preventDefault()
        console.log(this.state.name);
    }
    render() {
        return (
            <>
                <form onSubmit={(event) => this.login(event)}>
                    <input type="text" name="" id="" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.value} />
                    <input type="submit" value="Login" />
                </form>
            </>
        );
    }
}

export default Classcompocontrolld;