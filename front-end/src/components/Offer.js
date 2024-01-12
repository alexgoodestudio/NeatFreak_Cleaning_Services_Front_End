import React from "react";
import "./Dashboard.css";
import Image1 from "./Images/naomi-hebert-MP0bgaS_d1c-unsplash(1).jpg";
import Image3 from "./Images/point3d-commercial-imaging-ltd-dsh1MmzaMcw-unsplash.jpg";
import Image4 from "./Images/katja-rooke-77JACslA8G0-unsplash.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Offer() {
  return (
    <div>
      <div className="container fade-in  mt-5 ">
        <div className="row mobilePadding">
          <h1 className="display-6 ">
            <span className="italics">Our&nbsp;</span>
            <span className="">Services</span>
          </h1>
          <hr></hr>
          <div className="col-lg-9">
            <p className=" body subscribePara pe-2  blue ">
              At <span className="bold">NeatFreak,</span> we specialize in
              providing top-tier house cleaning that caters to the unique needs
              of each client, transforming your space into a pristine, welcoming
              environment. We pride ourselves on our commitment to eco-friendly
              cleaning practices, utilizing environmentally safe and sustainable
              products to ensure not only the cleanliness but also the health
              and safety of your home. Our services are designed to accommodate
              various schedules and preferences, offering flexible options like
              one-time cleanings, as well as weekly, bi-weekly, or monthly
              appointments. At NeatFreak Cleaning Services, our goal is to
              deliver exceptional cleaning services that leave your space
              spotless and provide you with the peace of mind and time to focus
              on what matters most in your life.
            </p>
          </div>
          <div className="col-lg-3 mt-3 mb-4">
            {/* <img src={Image4} className="img-fluid mt-2 " alt="..." /> */}
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
            <div className="col-lg-9 displayFlex">
              <div className="col-lg-4 col-12  p-2 d-flex">
                <div className="card  w-100 d-flex">
                  <img src={Image1} className="card-img-top" alt="..." />
                  <div className="card-body cardBody1 ">
                    <h5 className="card-title  mb-3">One-Time Clean</h5>
                    <p className="card-text">
                      A thorough, one-off cleaning service using eco-friendly
                      products for a sparkling, healthy home.
                    </p>
                    <Link to="/onetime" className="btn btn-primary">
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
                    <p className="card-text">
                      Comprehensive cleaning for hassle-free moving, ensuring
                      your new or old space is immaculate.
                    </p>
                    <Link to="/moving" className="btn btn-primary">
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
                    <p className="card-text">
                      Regular cleaning schedules tailored to your needs,
                      maintaining cleanliness with eco-safe products.
                    </p>
                    <Link to="/recurring" className="btn btn-primary">
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
