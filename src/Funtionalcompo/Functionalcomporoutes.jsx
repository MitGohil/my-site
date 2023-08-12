import React from "react";
import { Route, Routes } from "react-router-dom";

import Functionalcompomenu from "./Functionalcompomenu";
import FunctionalcompoIntro from "./01FunctionalcompoIntro";
import { Component } from "react";


const Functionalcomporoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Functionalcompomenu />}>
                <Route path="FunctionalcompoIntro" element={<FunctionalcompoIntro />} />
            </Route>
        </Routes>
    );
}

export default Functionalcomporoutes;