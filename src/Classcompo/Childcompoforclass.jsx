import React from "react";
import { Component } from "react";

class Childcompoforclass extends Component {
    render() {
        return (
            <>
                <h2>Child compoforclass</h2>
                <h3>{this.props.name}  {this.props.email}</h3> {/*This is the receiver to accept data from parent.*/}
                <h4>{ this.props.email}</h4>
            </>
        );
    }
}

export default Childcompoforclass;