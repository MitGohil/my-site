import React, { Component } from 'react'
import Childcompoforclass from './Childcompoforclass';
import ClasscompoIntro from './01ClasscompoIntro';

class Classcompositionandinheritance extends Component {
    render() {
        return (
            <>
                <h1>Classcompositionandinheritance</h1>
                <Childcompoforclass name="Gohil Mitesh" email="mdgohil111">   {/* Send data from parent to child using attribute its called inheritance */}
                    {/* Send data from child of parent to child its called composition */}
                    <h4>Mitesh</h4>
                    <h5>Gohil</h5>
                    <ClasscompoIntro /> {/* Also send file as a child using composition*/}
                </Childcompoforclass>

            </>
        );
    }
}

export default Classcompositionandinheritance;