import React from "react";
import "./Dashboard.css";
import { BsCalendar3 } from "react-icons/bs";
import Image5 from "./Images/9.png";
import CalendlyInlineWidget from "./Calendly";
import Footer from "./Footer"
import Chatbot from "./Chatbot";
import EstimateNewForm from "./EstimateNewForm"

function Request() {

  return (
    <div className="container mt-5 ">
      <div className="row mobilePadding">
        <div className="col-lg-6 ">
        
          <h3 className="fontLight "><BsCalendar3 className="me-3"/>Schedule your
            <span className="bold"> in-home estimate</span>{" "}
            today and take the first step towards a happier, cleaner home!
          </h3>
          <p className="fontLight para mt-4">
            Ready for a cleaner space? We offer easy and quick in-home
            estimates that fit into your busy schedule. Just fill out a short
            form with your contact details and a preferred time for the
            estimate. I'll be in and out in just 15 minutes, ensuring a fast,
            efficient process tailored just for you.
          </p>
          <hr className="mt-4"></hr>
          <div className="mb-5">
            {/* <CalendlyInlineWidget /> */}

            <br/>
            <EstimateNewForm/>
            <br/>
            <br/>
            <br/>
            <br/>

          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={Image5}
            class="bounce-in img-fluid slide-in right-aligned-img pic bounce-in handMargin"
            alt="..."
          />
        </div>
      </div>
      <hr className="mt-5"></hr>
      <div className="row">
        <div className="col-lg-12 ">
          <Footer />
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}

export default Request;
