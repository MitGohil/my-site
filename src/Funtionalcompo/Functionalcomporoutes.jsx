import React from "react";
import { Route, Routes } from "react-router-dom";

import Functionalcompomenu from "./Functionalcompomenu";
import FunctionalcompoIntro from "./01FunctionalcompoIntro";
import Usestate from "./02Usestate";
import Functioncompoprops from "./05Functioncompoprops";
import Useeffect from "./06Useeffect";
import Uselayouteffect from "./07Uselayouteffect";
import Usememo from "./08Usememo";

const Functionalcomporoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Functionalcompomenu />}>
                <Route path="FunctionalcompoIntro" element={<FunctionalcompoIntro />} />
                <Route path="Usestate" element={<Usestate />} />
                <Route path="Functioncompoprops" element={<Functioncompoprops />} />
                <Route path="Useeffect" element={<Useeffect />} />
                <Route path="Uselayouteffect" element={<Uselayouteffect />} />
                <Route path="Usememo" element={<Usememo />} />
            </Route>
        </Routes>
    );
}

export default Functionalcomporoutes;