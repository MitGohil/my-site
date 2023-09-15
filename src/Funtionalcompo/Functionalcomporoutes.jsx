import React from "react";
import { Route, Routes } from "react-router-dom";

import Functionalcompomenu from "./Functionalcompomenu";
import FunctionalcompoIntro from "./01FunctionalcompoIntro";
import Usestate from "./02Usestate";
import Functioncompoprops from "./05Functioncompoprops";
import Useeffect from "./06Useeffect";
import Uselayouteffect from "./07Uselayouteffect";
import Usememo from "./08Usememo";
import Usecallback from "./09Usecallback";
import Useconntextone from "./11Usecontextone";
import Usecontexthook from "./12Usecontexthook";
import Usereducer from "./13Usereducer";
import Usereducerparent from "./14Usereducerparent";
import Useref from "./15Useref";
import Api from "./16Api";
import Apipost from "./17Apipost";
import Customhooks from "./18Customhooks";
import Crud from "./19Crud";

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
                <Route path="Usecallback" element={<Usecallback />} />
                <Route path="Useconntextone" element={<Useconntextone />} />
                <Route path="Usecontexthook" element={<Usecontexthook />} />
                <Route path="Usereducer" element={<Usereducer />} />
                <Route path="Usereducerparent" element={<Usereducerparent />} />
                <Route path="Useref" element={<Useref />} />
                <Route path="Api" element={<Api />} />
                <Route path="Apipost" element={<Apipost />} />
                <Route path="Customhooks" element={<Customhooks />} />
                <Route path="Crud" element={<Crud />} />
            </Route>
        </Routes>
    );
}

export default Functionalcomporoutes;