import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault(); // Prevents the default link behavior
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <Link 
                className="dropdown-toggle link marginNav link-hover " 
                to="#"
                onClick={toggleDropdown}
            >
                Our Services
            </Link>

            <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/onetime">One-Time Clean</Link>
                <Link className="dropdown-item" to="/moving">Move In/Out Clean</Link>
                <Link className="dropdown-item" to="/recurring">Recurring Service</Link>
            </div>
        </div>
    );
};

export default Dropdown;
