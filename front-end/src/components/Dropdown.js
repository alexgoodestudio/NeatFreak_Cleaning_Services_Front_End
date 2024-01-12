import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Dashboard.css";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleOurServicesClick = (event) => {
        event.preventDefault(); // Prevents the default link behavior
        setIsOpen(!isOpen);
        navigate('/ourservices');
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
                <Link className="dropdown-item" to="/onetime">One-Time Clean</Link>
                <Link className="dropdown-item" to="/moving">Move In/Out Clean</Link>
                <Link className="dropdown-item" to="/recurring">Recurring Service</Link>
            </div>
        </div>
    );
};

export default Dropdown;
