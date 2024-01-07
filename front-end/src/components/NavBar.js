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
    <div className="nav row mt-1">
      <section className="d-flex justify-content-between align-items-center col-lg-12">
        <img
          src={Image4}
          onClick={goToHome}
          className="logo mt-3 ms-5 mb-2 "
          alt="Company Logo"
        />

        <div className="d-flex align-items-center justify-content-end mobileUp">
          <Link to="/" className="link link-hover marginNav ">Home</Link>
          <Link to="/request" className="link marginNav link-hover ">Estimates</Link>
          <Link to="/ourservices" className="link marginNav link-hover ">Services</Link>
          <Link to="/subscribe" className="link marginNav link-hover ">Subscribe</Link>
          <Link to="/reviews" className="link marginNav  link-hover ">Reviews</Link>
        </div>
      </section>
    </div>
  );
}

export default NavBar;