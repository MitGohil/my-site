import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import ClasscompoIntro from "./ClasscompoIntro";
import Classcompojsx from "./Classcompojsx";
import Classcompoprop from "./Classcompoprop";
import Classcompostate from "./Classcompostate";
import Classconditionrendring from "./Classconditionrendring";
import Classcompouncontrolld from "./Classcompouncontrolld";
import Classcompocontrolld from "./Classcompocontrolld";


class Classcomporoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="ClasscompoIntro" element={<ClasscompoIntro />} />
                    <Route path="Classcompojsx" element={<Classcompojsx />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />
                    <Route path="Classcompoprop" element={<Classcompoprop />} />
                    <Route path="Classconditionrendring" element={<Classconditionrendring />} />
                    <Route path="Classcompouncontrolld" element={<Classcompouncontrolld />} />
                    <Route path="Classcompocontrolld" element={<Classcompocontrolld />} />

                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;