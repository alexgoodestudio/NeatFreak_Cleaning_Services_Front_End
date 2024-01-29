
import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/5.jpg"
import "./Dashboard.css";
import Footer from "./Footer";

function OneTime(){
  return (
    <div className=" mt-5 container">
      <div className="row">
        <div className="col-lg-6 col-12">
       
          <h1 className="display-5"><span className="italics">One</span>-Time Clean</h1>
             <hr></hr>
             <p className="ara">Our One-Time Clean service is ideal for those who need a single, thorough cleaning to refresh their home. It's perfect for special occasions, seasonal cleaning, or just to give your space a reset. This comprehensive service includes a detailed cleaning of all rooms, focusing on hard-to-reach areas and ensuring every corner sparkles. We use environmentally safe products, guaranteeing not just a clean home but also one that's safe and healthy for you and your family.</p>
 
          <div className="btnMarg ">
            <Link to="/request" className="btn3 btnScale mt-3">
              <span className="bold">Request </span>
              <span className="spacing1">Estimate</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-12">
        <img src={Image1} className="img-fluid br mt-4  m-lg-3" alt="..." />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default OneTime;
