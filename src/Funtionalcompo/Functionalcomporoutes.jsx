import React from "react";
import FunctionalcompoIntro from "./FunctionalcompoIntro";
import Functionalcompomenu from "./Functionalcompomenu";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";


class Functionalcomporoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Functionalcompomenu />}>
                    <Route path="FunctionalcompoIntro" element={<FunctionalcompoIntro />} />
                </Route>
            </Routes>
        );
    }
}
export default Functionalcomporoutes;