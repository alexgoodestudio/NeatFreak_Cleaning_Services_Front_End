import React from "react";
import { Link } from "react-router-dom";

function OneTime(){
    return(
        <div className="container mt-3">
            <h1 className="">One-Time Clean</h1>
            <hr></hr>

            <ul>
                <li>1. Deep cleaning of all areas.</li>
                <li>2. Use of eco-friendly and sustainable cleaning products.</li>
                <li>3. Non-Toxic Glass Cleaner</li>
                <li>4. Flexible scheduling to suit your convenience. </li>
                <li>6. Perfect for pre-event preparation or seasonal refreshes.</li>
            </ul>
            <div className="btnMarg ">
                  <Link to="/request" className="btn3 btnScale mt-3">
                    <span className="bold">Request </span>
                    <span className="spacing1">Estimate</span>
                  </Link>
                </div>
        </div>
    )
}

export default OneTime;