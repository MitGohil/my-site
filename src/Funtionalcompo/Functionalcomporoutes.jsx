import React from "react";
import { Route, Routes } from "react-router-dom";

import Functionalcompomenu from "./Functionalcompomenu";
import FunctionalcompoIntro from "./01FunctionalcompoIntro";
import Usestate from "./02Usestate";

const Functionalcomporoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Functionalcompomenu />}>
                <Route path="FunctionalcompoIntro" element={<FunctionalcompoIntro />} />
                <Route path="Usestate" element={<Usestate />} />
            </Route>
        </Routes>
    );
}

export default Functionalcomporoutes;