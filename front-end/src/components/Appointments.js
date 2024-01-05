import React, { useState, useEffect } from 'react';
import Footer from "./Footer"
import { listRequests } from '../utils/api';

const Appointments = () => {
  const [requests, setRequests] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listRequests(); 
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } 
    //   finally {
    //     setIsLoading(false);
    //   }
    };

    fetchData();
  }, []);
  console.log(requests)
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className='display-3 mb-3'> Email List</div>
        {requests.map((request, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                {/* Display your request data here */}
                
                <p className="card-title">Name: {request.name} </p>
                <p className="card-text">Email Address: {request.email_address} </p>
                <p className="card-text">Type: {request.service_type} </p>
                {/* Add more request details as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <Footer/>
      </div>
      </div>
    </div>
  );
};

export default Appointments;
