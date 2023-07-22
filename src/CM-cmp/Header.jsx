import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./logo2.jpg";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" className="navbg shadow rounded  " sticky>

        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logo} alt="LOGO" className="logo" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className=" mb-2 mb-lg-0 justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/home"}>Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/product"}>Product</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/category"}>Category</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/career"}>Career</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/Example"}>Example</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/contactus"}>Contact-us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <Link className="nav-link" to={"/about"}>About-us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input type="search" className="form-control" placeholder="Type Search" aria-label="Search" />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}
