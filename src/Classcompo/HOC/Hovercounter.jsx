import React, { Component } from 'react'
import Updatecounter from './Hoc'

class Hovercounter extends Component {

    render() {
        const { count, incounter } = this.props
        return (
            <>
                <h2>Hover Counter</h2>
                <h3 onMouseOver={incounter}>{this.props.name} {count}</h3>

            </>
        );
    }
}

export default Updatecounter(Hovercounter);