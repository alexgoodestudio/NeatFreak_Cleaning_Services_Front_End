import React from "react";
import { Link } from "react-router-dom";

function Recurring(){
    return(
        <div className="container mt-5">
            <h1 className="display-6">Recurring Cleaning</h1>

                <p className="mt-3">
                Our Recurring Cleaning service offers weekly, bi-weekly, or monthly cleaning schedules to fit your lifestyle. It's designed for those who desire continual cleanliness and order in their homes. This service includes regular cleaning tasks such as dusting, vacuuming, mopping, and bathroom sanitization, ensuring your home remains a consistently clean and healthy environment. Our use of eco-friendly products means each visit not only cleans but also protects your home.
                Key Features:
                Regular and consistent home cleaning.
                Customizable frequency – weekly, bi-weekly, or monthly.
                Maintenance of cleanliness and hygiene over time.
                Use of environmentally safe cleaning products.
                </p>
                <div className="btnMarg ">
                  <Link to="/request" className="btn3 btnScale mt-3">
                    <span className="bold">Request </span>
                    <span className="spacing1">Estimate</span>
                  </Link>
                </div>
        </div>
    )
}

export default Recurring