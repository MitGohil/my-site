import React from "react";
import { Component } from "react";
import Childcompoforclass from "./Childcompoforclass"; //Compelsory for props. Load child 



//Props means transfer data from parent to child. i.e. Inheritance

class Classcompoprop extends Component {

    render() {
        return (
            <>
                <h1>Classcompoprop</h1>
                <Childcompoforclass name="Mitesh" email="mdgohil111@gmail.com" /> {/* Name is a provider for transfer data from parent to child.
                                                        we take any name for providr except variable name 
                                                        Not transfer data from child to parent using props.
                                                        Transfer data from child to parent using HOC(Higher order component)(Last topic of class)*/}

            </>
        );
    }
}

export default Classcompoprop;