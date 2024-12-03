import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/qwe.png";
import "./Dashboard.css";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function OneTime() {
  return (
    <div className=" mt-lg-5 container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <img src={Image1} className="img-fluid mt-lg-3 mobileScale br3  " alt="..." />
        </div>
        <div className="col-lg-6 col-12 mt-2 px-lg-5 px-4">
          <h4>Need to <span className="italics2">refresh</span> your home?</h4>
          <hr></hr>
        <p className="text-justify body ">
            Our <span className="">One-Time Clean</span> service is ideal for those who need a single,
            thorough cleaning to refresh their home. It's perfect for special
            occasions, seasonal cleaning, or just to give your space a reset.
            This comprehensive service includes a detailed cleaning of all
            rooms, focusing on hard-to-reach areas and ensuring every corner
            sparkles. We use environmentally safe products, guaranteeing not
            just a clean home but also one that's safe and healthy for you and
            your family.
          </p>    
          <div className="btnMarg ">
            <Link to="/request" className="btn3 btnScale mt-3">
              <span className="bold">Request </span>
              <span className="spacing1">Estimate</span>
            </Link>
          </div>    
          <Chatbot/>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default OneTime;
