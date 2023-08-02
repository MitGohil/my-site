import React from "react";
import { Component } from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


class Childcompoforclass extends Component {
    render() {
        return (
            <>
                <h2>Child compoforclass</h2>
                <h3>{this.props.name}  {this.props.email}</h3> {/*This is the receiver to accept data from parent.*/}
                <h4>{this.props.email}</h4>

                <MDBCard>
                    <MDBCardImage src={this.props.imgSrc} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content. {this.props.kuchbhi}
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default Childcompoforclass;