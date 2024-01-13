import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/2.png"
import "./Dashboard.css";
import Footer from "./Footer";

function Moving(){
  return (
    <div className=" mt-5 container">
      <div className="row">
        <div className="col-lg-6 col-12">
        <h1 className="display-6"><span className="italics">Moving </span> In/ Out Clean</h1>

          <hr></hr>

          <p className="mt-3 body">
           Our Moving In/Out Cleaning service is tailored for those transitioning to a new home or vacating an old one. This service ensures that your new space is pristine and welcoming or that your previous home is left in impeccable condition. Our team will thoroughly clean kitchens, bathrooms, living areas, and bedrooms, focusing on areas often overlooked during regular cleaning. This service not only aids in a stress-free move but also helps in securing deposit returns for rentals.

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

export default Moving

// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "./Footer";

// function Moving(){
//     return(
//         <div className="container p-lg-1 p-4 mt-lg-5 mt-2">
            // <h1 className="display-6"><span className="italics">Moving </span> In/ Out Clean</h1>
//             <hr></hr>
//             <p className="mt-3 para">
//             Our Moving In/Out Cleaning service is tailored for those transitioning to a new home or vacating an old one. This service ensures that your new space is pristine and welcoming or that your previous home is left in impeccable condition. Our team will thoroughly clean kitchens, bathrooms, living areas, and bedrooms, focusing on areas often overlooked during regular cleaning. This service not only aids in a stress-free move but also helps in securing deposit returns for rentals.
//             </p>
//             <div className="btnMarg ">
//                   <Link to="/request" className="btn3 btnScale mt-3">
//                     <span className="bold">Request </span>
//                     <span className="spacing1">Estimate</span>
//                   </Link>
//                 </div>
//                 <Footer/>
//         </div>
//     )
// }

// export default Moving