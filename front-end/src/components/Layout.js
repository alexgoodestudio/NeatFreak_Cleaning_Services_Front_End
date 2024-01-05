import React from "react";
import AppRoutes from "./Routes"
import NavBar from './NavBar';

import "./Dashboard.css"

function Layout() {
    return (
       
         <div className="">
            <div className="row h-100 ">
                <div className="col-lg-12">
                 
                        <NavBar />
                        <AppRoutes />
                
                </div>
            </div>
            
        </div>

    );
}

export default Layout;
