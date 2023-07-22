import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./CM-cmp/Header";
import Footer from "./CM-cmp/Footer";
import Home from "./Home";
import Product from "./Product";
import Category from "./Category";
import Career from "./Career";
import Example from "./Example";
import Contactus from "./Contactus";
import About from "./About";

const ClasscompoRoute = React.lazy(() => import("./Classcompo/Classcomporoutes"));
const FunctionalCompoRoute = React.lazy(() => import("./Funtionalcompo/Functionalcomporoutes"))

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: (<><Header /><Footer /></>),
  },
  {
    path: "/home",
    element: (<><Header /><Home /><Footer /></>),
  },
  {
    path: "/product",
    element: (<><Header /><Product /><Footer /></>),
  },
  {
    path: "/Category",
    element: (<><Header /><Category /><Footer /></>),
  },
  {
    path: "/Career",
    element: (<><Header /><Career /><Footer /></>),
  },
  {
    path: "/Example",
    element: (<><Header /><Example /><Footer /></>),
    children: [
      {
        path: "Classcompo/*",
        element: (<Suspense fallback={<h2>Loading...</h2>}><ClasscompoRoute /></Suspense>),
      },
      {
        path: "Functionalcompo/*",
        element: (<Suspense fallback={<h2>Loading...</h2>}><FunctionalCompoRoute /></Suspense>),
      },
    ],
  },
  {
    path: "/Contactus",
    element: (<><Header /><Contactus /><Footer /></>),
  },
  {
    path: "/About",
    element: (<><Header /><About /><Footer /></>),
  },
]);
export default Mainrouter;
