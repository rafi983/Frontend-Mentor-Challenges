import React from "react";
import "./Navbar.css";
import Header from "../Header/Header";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2" href="/#">
            sunnyside
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  Projects
                </a>
              </li>
            </ul>

            <button className="btn btn-contact ms-2">Contact</button>
          </div>
        </div>
      </nav>

      <Header />
    </div>
  );
};

export default Navbar;
