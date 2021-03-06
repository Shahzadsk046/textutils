import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Navbar Using Props
const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div className={`d-flex text-${
              props.mode === "light" ? "dark" : "light"
            }`}>Choose Color Theme:</div>
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-muted rounded mx-2" onClick={()=>{props.toggleMode('muted')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
            <div className="bg-white rounded mx-2" onClick={()=>{props.toggleMode('white')}} style={{ border: "2px solid #424242", height: "30px", width: "30px", cursor: "pointer" }}>
            </div>
          </div> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input me-auto"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=>{props.toggleMode(null)}}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

// defining propTypes for Navbar to restrict props to string type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// defaultProps is used to add some text by default if given props are not defined
Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "Set About here",
};

export default Navbar;
