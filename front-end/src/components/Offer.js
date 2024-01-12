import React from "react";
import "./Dashboard.css";
import Image3 from "./Images/2.png";
import Image4 from "./Images/1.png";
import Footer from "./Footer";
import Image5 from "./Images/5.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Offer() {
  return (
    <div>
      <div className="container fade-in  mt-5 ">
        <div className="row mobilePadding">
          <h1 className="display-6 ">
            
            <FontAwesomeIcon icon={['far', 'face-smile']} className="ms-3 me-4 increase"/>
            <span className="italics">Our&nbsp;</span>
            <span className="">Services</span>

          </h1>
          <hr></hr>

          <div className="col-lg-9">
            <p className=" body para pe-2  blue ">
              At <span className="bold">NeatFreak,</span> we specialize in
              providing top-tier house cleaning that caters to the unique needs
              of each client, transforming your space into a pristine, welcoming
              environment. We pride ourselves on our commitment to eco-friendly
              cleaning practices, utilizing environmentally safe and sustainable
              products to ensure not only the cleanliness but also the health
              and safety of your home.
            </p>
            
            <p className=" body para pe-2  blue ">
            Our services are designed to accommodate
              various schedules and preferences, offering flexible options like
              one-time cleanings, as well as weekly, bi-weekly, or monthly
              appointments. At NeatFreak Cleaning Services, our goal is to
              deliver exceptional cleaning services that leave your space
              spotless and provide you with the peace of mind and time to focus
              on what matters most in your life.
            </p>
          </div>
          <div className="col-lg-3 mt-lg-3 mt-1 mb-lg-4 mb-1">
            
            <div className="card">
              <div class="card-header">Our Services</div>
              <ul class="list-group list-group-flush">
                <li className=" list-group-item">One Time Clean</li>
                <li className=" list-group-item">Moving In/ Moving Out</li>
                <li className=" list-group-item">Recurring Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-100">
        <div className="container pb-5">
          <div className=" row  pt-3">
            <div className="col-lg-9  displayFlex">
              <div className="col-lg-4 col-12  p-2 d-flex">
                <div className="card  w-100 d-flex">
                  <img src={Image5} className="card-img-top" alt="..." />
                  <div className="card-body cardBody1 ">
                    <h5 className="card-title  mb-3">One-Time Clean</h5>
                    <p className="card-text mb-4">
                      A thorough, one-off cleaning service using eco-friendly
                      products for a sparkling, healthy home.
                    </p>
                    <Link to="/onetime" className=" btn4">
                      One-Time Clean
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 p-2 d-flex">
                <div className="card  w-100 ">
                  <img src={Image3} className="card-img-top " alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title  mb-3">Move In/ Out Cleaning</h5>
                    <p className="card-text mb-4">
                      Comprehensive cleaning for hassle-free moving, ensuring
                      your new or old space is immaculate.
                    </p>
                    <Link to="/moving" className=" btn4">
                      Schedule Moving Clean
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 p-2 d-flex">
                <div className="card  w-100 ">
                  <img src={Image4} className="card-img-top " alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title  mb-3">Recurring Service</h5>
                    <p className="card-text mb-4">
                      Regular cleaning schedules tailored to your needs,
                      maintaining cleanliness with eco-safe products.
                    </p>
                    <Link to="/recurring" className=" btn4">
                      Recurring Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}

      <div className="scaleDown">
        <Footer />
      </div>
    </div>
  );
}

export default Offer;
