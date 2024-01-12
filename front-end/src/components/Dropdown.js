import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css"

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <Link 
                className=" dropdown-toggle dropdown" 
                to="./ourservices"
                type="button" 
                id="dropdownMenuButton" 
                data-bs-toggle="dropdown" 
                aria-expanded={isOpen} 
                onClick={toggleDropdown}
            >
                Our Services
            </Link>

            <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="onetime">One-Time Clean</a>
                <a className="dropdown-item" href="moving">Move In/Out Clean</a>
                <a className="dropdown-item" href="recurring">Recurring Service</a>
            </div>
        </div>
    );
};

export default Dropdown;