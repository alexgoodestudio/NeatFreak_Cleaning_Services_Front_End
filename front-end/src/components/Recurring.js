import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/card5.png"
import "./Dashboard.css";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function Recurring() {
  return (
    <div className=" mt-5 container">
      <div className="row p-1">
      <div className="col-lg-6 col-12 ">
        <img src={Image1} className="img-fluid br mt-4   br3" alt="..." />
        </div>

        <div className="col-lg-6 col-12 p-3">
          <h4>
            <span className="italics">Recurring</span> Cleaning Services
          </h4>
          <hr></hr>
          <p className="mt-3 body">
            Our Recurring Cleaning service offers weekly, bi-weekly, or monthly
            cleaning schedules to fit your lifestyle. It's designed for those
            who desire continual cleanliness and order in their homes. This
            service includes regular cleaning tasks such as dusting, vacuuming,
            mopping, and bathroom sanitization, ensuring your home remains a
            consistently clean and healthy environment. Our use of eco-friendly
            products means each visit not only cleans but also protects your
            home. Key Features: Regular and consistent home cleaning.
            Customizable frequency – weekly, bi-weekly, or monthly. Maintenance
            of cleanliness and hygiene over time. Use of environmentally safe
            cleaning products.
          </p>
          <div className="btnMarg ">
            <Link to="/request" className="btn3 btnScale mt-3">
              <span className="bold">Request </span>
              <span className="spacing1">Estimate</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
      <Chatbot/>
    </div>
  );
}

export default Recurring;
