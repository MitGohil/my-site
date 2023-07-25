import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import ClasscompoIntro from "./ClasscompoIntro";
import Classcompojsx from "./Classcompojsx";
import Classcompostate from "./Classcompostate";
import Classcompoprop from "./Classcompoprop";


class Classcomporoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="ClasscompoIntro" element={<ClasscompoIntro />} />
                    <Route path="Classcompojsx" element={<Classcompojsx />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />
                    <Route path="Classcompoprop" element={<Classcompoprop />} />

                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;