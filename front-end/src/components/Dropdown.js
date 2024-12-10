import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";

const Dropdown = ({ isOpen, setIsOpen }) => {

    const handleOurServicesClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen); // Toggle dropdown state
    };

    return (
        <div className="dropdown">
            <Link 
                className="dropdown-toggle link marginNav link-hover" 
                to="/ourservices"
                onClick={handleOurServicesClick}
            >
                Our Services
            </Link>

            <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/onetime" onClick={() => setIsOpen(false)}>One-Time Clean</Link>
                <Link className="dropdown-item" to="/moving" onClick={() => setIsOpen(false)}>Move In/Out Clean</Link>
                <Link className="dropdown-item" to="/recurring" onClick={() => setIsOpen(false)}>Recurring Service</Link>
            </div>
        </div>
    );
};

export default Dropdown;
