import React from "react"
import Footer from "./Footer"
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from "../components/Images/point3d-commercial-imaging-ltd-dsh1MmzaMcw-unsplash.jpg"

function Reviews() {


  return (
    <div className="container">
      <div className="row d-flex ms-2 me-2">
        <div className="col-lg-6 ">
          <div className="d-flex mt-4">
            <FontAwesomeIcon icon={['far', 'face-smile']} className=" increase2 mt-4 me-5 ms-4" />
            <div className="display-6 mb-2"> We Love Our<span className="italics">&nbsp;Customers</span>!</div>
          </div>
          <figure className="mt-1">
            <hr></hr>
            <blockquote className="blockquote ">
              <p>
                {" "}
                "Love NeatFreak Cleaning Services! They use awesome eco-friendly
                products and are super flexible with scheduling – my home's
                never looked better."
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              review by: <cite title="Source Title">Karen R</cite>
            </figcaption>
          </figure>
          <hr></hr>
          <figure >
            <blockquote className="blockquote">
              <p>
                {" "}
                "I've been using NeatFreak Cleaning Services for a few months now, and it's been a game changer. Incredibly professional, and they do a thorough job every single time. "
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              review by: <cite title="Source Title">Celia V</cite>
            </figcaption>
          </figure>
          <hr></hr>
          <figure >
            <blockquote className="blockquote">
              <p>
                {" "}
                "I booked a one-time cleaning service after a big party, and they made it spotless. Their attention to detail is impressive, and eco-friendly products makes me feel good about choosing them. Planning to set up a monthly cleaning schedule now. Highly recommend!"
                <Link to="/login" className="link marginNav text-light link-hover ">Employee Login</Link>
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              review by: <cite title="Source Title">Alex G</cite>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-6 mt-lg-5 ">
          <img src={pic} className="img-fluid br mt-lg-5 ms-lg-5"/>
        </div>
      </div>
        <div className="row">
          <div className="col-lg-12 scale">
            <Footer />
          </div>
        </div>
    </div>
  )
}

export default Reviews;
