import React, { Component } from 'react'

const Updatecounter = Originalcompo => {
    class Newcompo extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }
        incounter = () => {
            this.setState({ count: this.state.count + 1 })
        }
        decounter = () => {
            this.setState({ count: this.state.count - 1 })
        }
        render() {
            return (
                <>
                    <Originalcompo name=" Mitesh" count={this.state.count} incounter={this.incounter} decounter={this.decounter} />
                </>
            );
        }
    }

    return Newcompo;
}
export default Updatecounter;