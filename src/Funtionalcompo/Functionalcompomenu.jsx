import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Functionalcompomenu extends Component {
    render() {
        return (
            <>
                <div className="col-3 me-auto offset-6 text-center">
                    <ol>
                        <li> <Link to="FunctionalcompoIntro"><h3>Functional compo Intro</h3></Link></li>
                    </ol>


                </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default Functionalcompomenu;