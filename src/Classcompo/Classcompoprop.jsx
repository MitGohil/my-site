import React from "react";
import { Component } from "react";
import Childcompoforclass from "./Childcompoforclass"; //Compelsory for props. Load child 
import bike from "./05.jpg"



//Props means transfer data from parent to child. i.e. Inheritance

class Classcompoprop extends Component {

    render() {
        return (
            <>
                <h1>Classcompoprop</h1>
                <Childcompoforclass name="Mitesh" email="mdgohil111@gmail.com" />
                {/* Name is a provider for transfer data from parent to child.
                                                        we take any name for providr except variable name
                                                        Not transfer data from child to parent using props.
                                                        Transfer data from child to parent using HOC(Higher order component)(Last topic of class)*/}

                <div className="row">
                    <div className="col-3">
                        <Childcompoforclass title="Props Title" imgSrc="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>

                    <div className="col-3">
                        <Childcompoforclass title="Product" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4M3ip3piTUTYow4hV-7fuXK5vNxaSsjPXeZKx5uxjg&s" />
                    </div>

                    <div className="col-3">
                        <Childcompoforclass title="Other Product" imgSrc={bike} kuchbhi="Mitesh" />
                    </div>

                    <div className="col-3">
                        {/* {JSON.stringify(process.env)} */}
                        {/* <Childcompoforclass title="Other Product" imgSrc={`${process.env.PUBLIC_URL}/BMWBike.jpg`} kuchbhi="Gohil" /> */}
                        <Childcompoforclass title="Other Product" imgSrc={`../CM-cmp/Bike.jpg`} kuchbhi="Jaymeet" />
                    </div>
                </div>
            </>


        );
    }
}

export default Classcompoprop;