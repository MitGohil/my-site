import React from "react";
import { Link, Outlet } from "react-router-dom";

const Example = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">
          Example of Class component and Function Component
        </h1>
        <div className="row">
          <div className="col-6 text-center">
            <h3>
              <Link to="/Example/Classcompo"> Class Component</Link>
            </h3>
          </div>
          <div className="col-6 ">
            <h3>
              <Link to="/Example/Functionalcompo">Functional Component</Link>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <Outlet />

          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
