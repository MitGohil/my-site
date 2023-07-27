import React from "react";
import { Component } from "react";

class ClasscompoIntro extends Component {
  render() {
    return (
      <>
        <h1>Class component Introduction</h1>

        <p>Class Compo will be created by class</p>
        <p>In reactjs we are not able to create an object of any class</p>
        <p>React Will create its object by inheriting React.Component / Component</p>
        <p>render method will be responsible for the return</p>
        <p>class keyword se class bnega</p>
        <br />
        class ClassCompoIntro extends Component &#123;
        <br />
        render() &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; return ( &lt;tag&gt;&lt;/tag&gt; )
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; &#125; <br />
        &#125;
        <br />
        <br />

        <p>Components are small peace of web page</p>
        <p>in reactJs we define component using class concepts are called class compo</p>
        <p>not like JS in React there is not require to create an object of that class but we just needs to inherit React.Compo prop</p>
        <p>and render will do return in class compo</p>

        <br />
        <br />


        <h3>Constructor</h3>
        <p>Constructor is a method which is invoked by default when components are called</p>
        <p>Render is also calling by default but render used for give response to the compo</p>
        <p>Constructor will use for initiate some value</p>
      </>
    );
  }
}
export default ClasscompoIntro;