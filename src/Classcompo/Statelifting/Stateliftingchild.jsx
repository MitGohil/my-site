import React, { Component } from 'react'

class Stateliftingchild extends Component {
    render() {
        return (

            <>

                <h1>State lifting child</h1>
                <p>{this.props.name}</p> {/*Data received from parent*/}
                {/* Function always call on button */}

                {/*Data received from parent*/}
                {/* <button onClick={this.props.click}>Click-parent</button> */}

                {/*Data sent to parent*/}
                <button onClick={() => this.props.click("Gohil")}>Click-child</button>
            </>
        );
    }
}

export default Stateliftingchild;