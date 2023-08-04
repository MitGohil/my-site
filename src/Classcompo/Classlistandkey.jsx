import React, { Component } from 'react'

class Classlistandkey extends Component {
    constructor() {
        super()
        this.state = {
            items: [1, 2, 3, 4, 5, 6]
        }
    }

    //If we add new element in array @ random index, than all other elements index will be change. Solve this issue using Keys. Key was by default index.
    //using key, adding new element , no change other element index.
    add = () => {
        console.log("add");
        this.setState({
            items: [7, 1, 2, 3, 4, 5, 6]
        })
    }
    render() {


        //Map() used for array destructure.
        //Map() always take 3 values. i.e. Value, Index and array.
        // const items = [1, 2, 3, 4, 5, 6]
        const listitems = this.state.items.map((item, index) => <li key={item.toString()}>{item}</li>)
        return (
            <>
                <ul>
                    {listitems}
                </ul>
                <button onClick={() => this.add()}>Add-items</button>

            </>
        );
    }
}

export default Classlistandkey;