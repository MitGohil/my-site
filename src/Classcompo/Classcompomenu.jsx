import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component {
  render() {
    return (
      <>
        <div className=" col-8 mx-auto">
          <ol >
            <li><Link to="ClasscompoIntro" ><h4>Class compo Intro</h4></Link></li>
            <li><Link to="Classcompojsx" ><h4>Classcompojsx</h4></Link></li>
            <li><Link to="Classcompoprop" ><h4>Classcompoprop</h4></Link></li>
            <li><Link to="Classcompostate" ><h4>Classcompostate</h4></Link></li>
            <li><Link to="Classconditionrendring" ><h4>Classconditionrendring</h4></Link></li>
            <li><Link to="Classcompouncontrolld" ><h4>Classcompouncontrolld</h4></Link></li>
            <li><Link to="Classcompocontrolld" ><h4>Classcompocontrolld</h4></Link></li>
            <li><Link to="Classlistandkey" ><h4>Classlistandkey</h4></Link></li>
            <li><Link to="Stateliftingparent" ><h4>Stateliftingparent</h4></Link></li>
            <li><Link to="Classcompositionandinheritance" ><h4>Classcompositionandinheritance</h4></Link></li>
            <li><Link to="Classhoc" ><h4>Classhoc</h4></Link></li>
          </ol>
        </div>
        <Outlet></Outlet>
      </>
    );
  }
}
export default Classcompomenu;
