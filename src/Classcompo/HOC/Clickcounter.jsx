import React, { Component } from 'react'
import Updatecounter from './Hoc'

class Clickcounter extends Component {
    render() {
        const { count, incounter, decounter } = this.props
        return (
            <>
                <h2>Click counter</h2>
                <h4>{count}</h4>
                <button className='mx-2' onClick={incounter}>{this.props.name} Increament</button>
                <button className='mx-2' onClick={decounter}>{this.props.name} Decreament</button>
            </>
        );
    }
}

export default Updatecounter(Clickcounter);