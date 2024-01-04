import React from "react";
import { Link } from 'react-router-dom';
import Image5 from "./Images/sparkles.png";
import Image6 from "./Images/Screenshot 2023-12-30 at 11.16.18 PM.png";


import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="">
     
      <div className="fadeout">
        <div className="innerColumn d-flex justify-content-center align-items-center">
          <h1 className="display-6 ">
            <span className="italics">Clean&nbsp; </span> Space,&nbsp;{" "}
            <span className="underline"> Happy Mind</span>
          </h1>
        </div>
      </div>
      <div className=" fadein ">
        <div className=" slide-in row  gx-0">
          {/* ------------------------------------------------------------------ */}

          <div className="col-lg-6 mt-3 blue2">
            <div className="row ">
              <div className="col-lg-12 d-flex justify-content-start ">
                <img
                  src={Image5}
                  className="cleanSpace sparkleMargin br2"
                  alt="..."
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-12 d-flex marginLeft justify-content-start ">
                <h1 className="display-6 d-flex">
                  <span className="italics2">Clean&nbsp; </span>Space,&nbsp;
                  <br />
                  <span className="underline "> Happy Mind</span>
                </h1>
              </div>
            </div>

            <div className="row marginTopLanding">
              <div className="col-lg-12 marginLeft mt-3  d-flex justify-content-start">
                <h5>Let us handle the cleaning</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 marginLeft  d-flex justify-content-start">
                <div className="mt-4">
                  <Link to="/request" className="   btn2 mt-2">
                    <span className="bold ">Request</span> <span className="spacing1"> an Estimate </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}

          <div className="col-lg-6 ">
                <img src={Image6} className="img-fluid bathroom" alt="..." />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;

