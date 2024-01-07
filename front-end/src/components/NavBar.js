import React from "react";
import "./Dashboard.css";
import Image4 from "./Images/NeatFreakShort.png";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="nav row">
     
        <div className="col-sm-6  align-items-center   ">
        <img
          src={Image4}
          onClick={goToHome}
          className="logo "
          alt="Company Logo"
        />
        </div>

        <div className="d-flex col-sm-6    ">
          <Link to="/" className="link link-hover marginNav ">Home</Link>
          <Link to="/request" className="link marginNav link-hover ">Estimates</Link>
          <Link to="/ourservices" className="link marginNav link-hover ">Services</Link>
          <Link to="/subscribe" className="link marginNav link-hover ">Subscribe</Link>
          <Link to="/reviews" className="link marginNav  link-hover ">Reviews</Link>
        </div>
        
  
    </div>
  );
}

export default NavBar;