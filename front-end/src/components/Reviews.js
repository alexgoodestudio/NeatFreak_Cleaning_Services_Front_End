import React from "react"
import Footer from "./Footer"
import "./Dashboard.css";


function Reviews() {


    return (
      <div className="container">
        <div className="row mt-3 d-flex ms-5 me-5">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">


               <figure className="p-5 mt-5">
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    "Love NeatFreak Cleaning Services! They use eco-friendly
                    products and are super flexible with scheduling – my home's
                    never looked better."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  review by: <cite title="Source Title">Karen R</cite>
                </figcaption>
              </figure> 
              <hr></hr>
              <figure className="p-5">
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    "I've been using NeatFreak Cleaning Services for a few months now, and it's been a game changer. The team is always on time, incredibly professional, and they do a thorough job every single time. I opted for the bi-weekly service, and it's perfect for keeping my place in tip-top shape. Plus, their commitment to using sustainable products? A big win in my book!"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  review by: <cite title="Source Title">Celia V</cite>
                </figcaption>
              </figure> 
              <hr></hr>
              <figure className="p-5">
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    "I booked a one-time cleaning service after a big party, and they turned my chaotic space into a spotless haven. The attention to detail is impressive, and their eco-friendly approach makes me feel good about choosing them. Planning to set up a monthly cleaning schedule now. Highly recommend!"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  review by: <cite title="Source Title">Alex G</cite>
                </figcaption>
              </figure> 

            </div>
            
            <div className="row">
        <div className="col-lg-12">
          <Footer/>
      </div>
      </div>
        </div>
        </div>
    )
}

export default Reviews;
