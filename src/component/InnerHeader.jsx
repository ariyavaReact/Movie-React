import React, { Fragment } from "react";
import "../style/custom.css";
import "../index.css";
import logo from "../style/hd-tickets-49032-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faSearch } from "@fortawesome/free-solid-svg-icons";

function InnerHeader() {
  return (
    <Fragment>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" width="70" height="50" />
            </a>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faSearch }className="lIcons" />
          </form>
          <button class="btn btn-success" type="submit">
            Logout
          </button>
        </nav>
      </header>
    </Fragment>
  );
}
export default InnerHeader;
