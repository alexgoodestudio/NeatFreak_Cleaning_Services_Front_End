import React, { useState } from "react";
import "./Dashboard.css";
import Image4 from "./Images/NeatFreakShort.png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);  // state lifted here
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  // Function to close the dropdown when any link is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav row">
      <div className="row bg3  mb-2 p-3 pb-2 topNav space text-center">
        <div className="col-sm-4 "></div>
        <div className="col-sm-4  text-black topNav  ">
          <h6 className="">
            Clean Space, Happy Mind &nbsp;<span className="italics"> | Richmond, Virginia</span>
          </h6>
        </div>
        <div className="col-sm-4 text-center text-black"> CALL (804) 482-0516</div>
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
          <Link to="/" className="link link-hover marginNav" onClick={closeDropdown}>
            Home
          </Link>
          <Link to="/request" className="link marginNav link-hover" onClick={closeDropdown}>
            Contact
          </Link>

          <div className="link marginNav mb2 link-hover">
            <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <Link to="/subscribe" className="link marginNav link-hover" onClick={closeDropdown}>
            Subscribe
          </Link>
          <Link to="/reviews" className="link marginNav  link-hover" onClick={closeDropdown}>
            Why Hire Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
