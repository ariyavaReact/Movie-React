import React, { Fragment } from "react";
import "../style/custom.css";
import "../index.css";
import logo from "../style/hd-tickets-49032-removebg-preview.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <Fragment>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="70" height="50" />
            </a>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}
export default Header;
