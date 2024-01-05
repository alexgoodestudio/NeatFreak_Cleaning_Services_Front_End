import React from "react"
import "./Dashboard.css";
import Image4 from "./Images/short.png";
import Image5 from "./Images/585e5071cb11b227491c33a2.png";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css"

function NavBar() {

    const navigate = useNavigate();

    function goToHome() {
        navigate('/'); // Navigates to the home page
    }

    return (
        <div className="nav row mt-3 d-flex">
            <div className="col-lg-5">
                <img src={Image4} onClick={goToHome} className="logo mt-1 ms-5 mb-3" alt="..." />
            </div>

            <section className="d-flex  col-lg-7 justify-content-end">
                <Link to="/" className="link ">Home</Link>
                <Link to="/request" className="link ms-5">In Home Estimate</Link>
                <Link to="/ourservices" className="link ms-5 ">What We Offer</Link>
                <Link to="/reviews" className="link ms-5 ">Reviews</Link>
                <img src={Image5} className=" mt-1 ms-5 me-5  widthSmaller2" alt="..." />

                {/* <a href="https://www.facebook.com/getneatfreakclean" target="_blank" rel="noopener noreferrer">
                    <img src={Image5} className="mt-1 ms-5 me-5 widthSmaller2" alt="..." />
                </a> */}

            </section>

        </div>
    )
}

export default NavBar;
