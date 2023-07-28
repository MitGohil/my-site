import React, { Component } from 'react'

class Classcompouncontrolld extends Component {
    constructor() {
        super()
        this.inref = React.createRef()
    }

    login = (event) => {
        event.preventDefault()
        console.log(this.inref.current.value);
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.login(event)} >
                    <input type="text" ref={this.inref} />
                    <input type="submit" value="Login" />
                </form>
            </>
        );
    }
}

export default Classcompouncontrolld;
