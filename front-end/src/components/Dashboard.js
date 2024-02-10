import React from "react";
import { Link } from "react-router-dom";
import Image6 from "./Images/Screenshot 2023-12-30 at 11.16.18 PM.png";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Dashboard() {
  return (
    <div>
      <div className="fadeout">
        <div className="innerColumn mobileBringLeft">
          <h1 className="display-6">
            <span className="italics">Clean&nbsp;</span>Space,&nbsp;
            <span className="">Happy Mind</span>
          </h1>
        </div>
      </div>
      <div className="fadein">
        <div className="slide-in row gx-0">
          <div className="col-xl-6 paddingDashText">
            <div className="text-container d-flex justify-content-center align-items-center">
              <div p-0>
                <p className="title">Let us handle<br/>the <span className="italics2">cleaning</span> stuff.</p>
                <p className="underTitle">Request Your In-Home Estimate Today</p>
                <div className="btnMarg ">
                  <Link to="/request" className="btn2 btnScale mt-3">
                    <span className="bold">Request Estimate!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 ">
            <img src={Image6} className="img-fluid bathroom" alt="..." />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
