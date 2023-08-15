import React from "react";
import { Link, Outlet } from "react-router-dom";

const Functionalcompomenu = () => {
    return (
        <>
            <div className="col-3 me-auto offset-7">
                <ol>
                    <li> <Link to="FunctionalcompoIntro"><h3>Functional compo Intro</h3></Link></li>
                    <li> <Link to="Usestate"><h3>Usestate</h3></Link></li>
                    <li> <Link to="Functioncompoprops"><h3>Functioncompoprops</h3></Link></li>
                </ol>


            </div>
            <Outlet></Outlet>
        </>
    );
}

export default Functionalcompomenu;