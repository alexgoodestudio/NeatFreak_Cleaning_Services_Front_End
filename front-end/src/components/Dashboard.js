import React from "react";
import { Link } from "react-router-dom";
import Image6 from "./Images/Screenshot 2023-12-30 at 11.16.18 PM.png";
import "./Dashboard.css";
import Chatbot from "./Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


function Dashboard() {




  return (
    <div>
      <div>
        <div className="slide-in row gx-0">
          <div className="col-xl-6 paddingDashText">
            <div className="text-container d-flex justify-content-center align-items-center">
              <div>
                <p className="title">Let us handle<br/>the <span className="italics2">cleaning</span> stuff.</p>
                <p className="underTitle">Request Your In-Home Estimate Today</p>
                <div className="btnMarg ">
                  <Link to="/request" className="btn2 btnScale mt-3">
                    <span className="">Request Estimate!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 ">
            <img src={Image6} className="img-fluid bathroom" alt="..." />
          </div>
        </div>
        <Chatbot/>
      </div>

    </div>
  );
}

export default Dashboard;
