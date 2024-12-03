import React from "react";
import "./Dashboard.css";
import Image4 from "./Images/NeatFreakShort.png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function NavBar() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="nav row">
      <div className="row bg3 ">
        <div className="col-12  text-black topNav text-center">
        <h6 className="mt-2 mb-2 pt-1 pb-2 topNav space ">Cleaning Services in <span className="italics">Richmond, Virginia</span></h6>
        </div>
      </div>
      <div className="row mt-3">
      <div className="col-sm-6  align-items-center">
        <img
          src={Image4}
          onClick={goToHome}
          className="logo "
          alt="Company Logo"
        />
      </div>

      <div className="d-flex col-sm-6">
        <Link to="/" className="link link-hover marginNav ">Home</Link>
        <Link to="/request" className="link marginNav link-hover ">Book | Estimate</Link>

        <div className="link marginNav mb2 link-hover ">
        <Dropdown/>
        </div>
        <Link to="/subscribe" className="link marginNav link-hover ">Subscribe</Link>
        <Link to="/reviews" className="link marginNav  link-hover ">Reviews</Link>
      </div>
      </div>

    </div>
  );
}

export default NavBar;