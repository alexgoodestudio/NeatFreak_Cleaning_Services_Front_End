import React from "react"
import Footer from "./Footer"
import "./Dashboard.css";


function Reviews() {


    return (
      <div className="container">
        <div className="row mt-3 d-flex ms-5 me-5">
            <div className="col-lg-1"></div>
        
            <div className="col-lg-7  mt-2">
            <div className="display-6  br p-3 mt-5 mb-2"> Our <span className="underline">Awesome</span> <span className="italics">Customers</span> love us :-)</div>
               <figure className="p-2 mt-1">
               <hr></hr>
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    "Love NeatFreak Cleaning Services! They use awesome eco-friendly
                    products and are super flexible with scheduling – my home's
                    never looked better."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  review by: <cite title="Source Title">Karen R</cite>
                </figcaption>
              </figure> 
              <hr></hr>
              <figure className="p-2">
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    "I've been using NeatFreak Cleaning Services for a few months now, and it's been a game changer. Incredibly professional, and they do a thorough job every single time. "
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  review by: <cite title="Source Title">Celia V</cite>
                </figcaption>
              </figure> 
              <hr></hr>
              <figure className="p-2">
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    "I booked a one-time cleaning service after a big party, and they made it spotless. Their attention to detail is impressive, and eco-friendly products makes me feel good about choosing them. Planning to set up a monthly cleaning schedule now. Highly recommend!"
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  review by: <cite title="Source Title">Alex G</cite>
                </figcaption>
              </figure> 

            </div>
            <div className="col-lg-4"></div>
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
