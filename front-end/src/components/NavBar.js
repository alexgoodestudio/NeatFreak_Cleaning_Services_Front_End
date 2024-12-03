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
      <div className="row bg3  mb-2 p-lg-2 pb-lg-1 topNav space text-center">
      <div className="col-sm-4 "></div>
        <div className="col-sm-4  text-black topNav  ">
        <h6 className="">Clean Space, Happy Mind &nbsp;<span className="italics"> | Richmond, Virginia</span></h6>
        </div>
        <div className="col-sm-4 text-center text-black">(804) 482-0516</div>
      </div>
      <div className="row mt-2">
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
        <Link to="/request" className="link marginNav link-hover "> Contact</Link>

        <div className="link marginNav mb2 link-hover ">
        <Dropdown/>
        </div>
        <Link to="/subscribe" className="link marginNav link-hover ">Subscribe</Link>
        <Link to="/reviews" className="link marginNav  link-hover ">Why Hire Us</Link>
      </div>
      </div>

    </div>
  );
}

export default NavBar;