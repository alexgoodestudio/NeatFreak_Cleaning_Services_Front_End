import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/Screenshot2024-01-12at10.20.12AM.png"
import Footer from "./Footer";

function Recurring() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-12">
          <h1 className="display-6 ">
            <span className="italics">Recurring</span> Cleaning Services
          </h1>
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
        <div className="col-lg-6 col-12">
        <img src={Image1} className="img-fluid br mt-4 p-lg-5 m-lg-3" alt="..." />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Recurring;
