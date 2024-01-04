import React from "react";
import Logo from "./Images/Untitled-1.png";
import "./Dashboard.css";

function Footer() {
    return (
        <div>
            
            <div className="d-flex justify-content-center align-items-center ">
                <img src={Logo} className="logoWidth" alt="..." />
              </div>
            <div className=" body pb-5 mt-5 d-flex justify-content-center">
                Richmond, VA | (804) 661-2740 | support@getneatfreakclean.com
            </div>
        </div>
    )
}

export default Footer;


