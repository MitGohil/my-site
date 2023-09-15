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
                    <li> <Link to="Useeffect"><h3>Useeffect</h3></Link></li>
                    <li> <Link to="Uselayouteffect"><h3>Uselayouteffect</h3></Link></li>
                    <li> <Link to="Usememo"><h3>Usememo</h3></Link></li>
                    <li> <Link to="Usecallback"><h3>Usecallback</h3></Link></li>
                    <li> <Link to="Useconntextone"><h3>Useconntextone</h3></Link></li>
                    <li> <Link to="Usecontexthook"><h3>Usecontexthook</h3></Link></li>
                    <li> <Link to="Usereducer"><h3>Usereducer</h3></Link></li>
                    <li> <Link to="Usereducerparent"><h3>Usereducerparent</h3></Link></li>
                    <li> <Link to="Useref"><h3>Useref</h3></Link></li>
                    <li> <Link to="Api"><h3>Api</h3></Link></li>
                    <li> <Link to="Apipost"><h3>Apipost</h3></Link></li>
                    <li> <Link to="Customhooks"><h3>Customhooks</h3></Link></li>
                    <li> <Link to="Crud"><h3>Crud</h3></Link></li>
                </ol>


            </div>
            <Outlet></Outlet>
        </>
    );
}

export default Functionalcompomenu;