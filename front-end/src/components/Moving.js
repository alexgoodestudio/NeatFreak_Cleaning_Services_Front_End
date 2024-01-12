import React from "react";
import { Link } from "react-router-dom";

function Moving(){
    return(
        <div className="container mt-5">
            <h1 className="display-6">Moving In/ Out Clean</h1>
            <hr></hr>
            <p className="mt-3">
            Our Moving In/Out Cleaning service is tailored for those transitioning to a new home or vacating an old one. This service ensures that your new space is pristine and welcoming or that your previous home is left in impeccable condition. Our team will thoroughly clean kitchens, bathrooms, living areas, and bedrooms, focusing on areas often overlooked during regular cleaning. This service not only aids in a stress-free move but also helps in securing deposit returns for rentals.
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

export default Moving