import React from "react";
import "./Dashboard.css";
import Image1 from "./Images/markus-spiske-6MB_jBwteIg-unsplash.jpg";
import Image3 from "./Images/point3d-commercial-imaging-ltd-dsh1MmzaMcw-unsplash.jpg";
import Image4 from "./Images/Screenshot 2023-12-31 at 12.19.49 PM.png";
import Footer from "./Footer"



function Offer() {
  return (
    <div className="container  mt-5 slide-in">
      <div className="row mobilePadding">
        <div className="col-lg-6">
          <div className="row">
            <h1 className="display-6 ">
            <span className="italics">Clean&nbsp;</span>Space,&nbsp;
            <span className="slide-in">Happy Mind</span>
          </h1>
      <hr></hr>
              
              <p className=" body  blue mt-1 mb-3">
                At <span className="bold">NeatFreak,</span> we specialize in providing
                top-tier house cleaning that caters to the unique needs of each
                client, transforming your space into a pristine, welcoming
                environment. We pride ourselves on our commitment to
                eco-friendly cleaning practices, utilizing environmentally safe
                and sustainable products to ensure not only the cleanliness but
                also the health and safety of your home. Our services are
                designed to accommodate various schedules and preferences,
                offering flexible options like one-time cleanings, as well as
                weekly, bi-weekly, or monthly appointments. At NeatFreak
                Cleaning Services, our goal is to deliver exceptional cleaning
                services that leave your space spotless and provide you with the
                peace of mind and time to focus on what matters most in your
                life. 
              </p>
           
          </div>
          {/* ------------------------------------------------------------------ */}
          <div className="row  ">
            <div className="col-lg-6 ">
              <div className="card  w-100 d-flex">
                <img src={Image1} className="card-img-top" alt="..." />
                <div className="card-body cardBody1 ">
                  <h5 className="card-title cardTitleFont">Eco Friendly</h5>
                  <p className="card-text">
                  "Green Clean: Safe, sustainable, spotless. Your home, our planet-friendly touch."
                  
            </p>
                  <a href="/request" className="btn-custom ">
                    Eco Friendly
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="card  w-100 ">
                <img src={Image3} className="card-img-top " alt="..." />
                <div className="card-body ">
                  <h5 className="card-title cardTitleFont">Exceptional Quality</h5>
                  <p className="card-text">
                  "Each clean, done with careful attention, leaves your space looking pristine and beautiful."                  </p>
                  <a href="/request" className="btn-custom ">
                    Exceptional Quality
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 ">
          <img src={Image4} className="img-fluid down br" alt="..." />
        </div>
        
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <Footer/>
      </div>
      </div>
    </div>
  );
}

export default Offer;
