import React, { Component } from 'react'
import Clickcounter from './Clickcounter';
import Hovercounter from './Hovercounter';


class Classhoc extends Component {
    render() {
        return (
            <>
                <h1>Higher Order Component</h1>

                <Clickcounter />
                <Hovercounter />
            </>
        );
    }
}

export default Classhoc;