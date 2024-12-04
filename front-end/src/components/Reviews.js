import React from "react";
import Footer from "./Footer";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import pic from "../components/Images/derrick-brooks-dqgVnnRzPio-unsplash.jpg";
import Chatbot from "./Chatbot";

function Reviews() {
  return (
    <div className="mx-4">
      <div className="row d-flex ms-2 me-2 p-lg-5">

        <div className="col-lg-3 "> </div>
        <div className="col-lg-6">
        <div className="display-5 mt-2  ">
          <span className="d-inline-block ">
            <span className="italics">Why Hire Us</span> 
          </span>
        <hr className="mb-lg-5 mb-3"></hr>
        </div>
          <div className="px-lg-5">
            <figure className="mt-5">
              <blockquote className=" ">
                <p>
                  {" "}
                  "Love NeatFreak Cleaning Services! They use awesome
                  eco-friendly products and are super flexible with scheduling –
                  my home's never looked better."
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                review by: <cite title="Source Title">Karen R</cite>
              </figcaption>
            </figure>
            <hr></hr>
            <figure>
              <blockquote className="">
                <p>
                  {" "}
                  "I've been using NeatFreak Cleaning Services for a few months
                  now, and it's been a game changer. Incredibly professional,
                  and they do a thorough job every single time. "
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                review by: <cite title="Source Title">Celia V</cite>
              </figcaption>
            </figure>
            <hr></hr>
            <figure>
              <blockquote className="">
                <p>
                  {" "}
                  "I booked a one-time cleaning service after a party, and
                  they made it spotless. Their attention to detail is
                  impressive. Planning to set up a monthly cleaning schedule
                  now."
                  <Link
                    to="/login"
                    className="link marginNav text-light link-hover "
                  >
                    Employee Login
                  </Link>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                review by: <cite title="Source Title">Alex G</cite>
              </figcaption>
            </figure>
          </div>
   
        </div>

        <div className="col-lg-3 ">
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Reviews;

