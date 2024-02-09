import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import { listRequests, deleteSubscriber } from '../utils/api';

const EmployeeHome = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [deleteCount, setDeleteCount] = useState(0); // Step 1: Add deletion count state

// The actual delete count does not matter. Purpose of writing this in is to create a state change that can be added into the useEffect to cause it to run since.
// EX. if this line from the useEffect had an empty array it would only run on intial render or when the component mounts:   }, [deleteCount]); 
// Now that the deleteCount stae is the parameter, every state change it will run.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listRequests(); 
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } 
    };
    fetchData();
  }, [deleteCount]); // Step 3: Add deleteCount to the dependency array

  async function handleDelete(estimate_id) {
    const abortController = new AbortController();
    const deleteUser = window.confirm("Would you like to delete Subscriber?");
    if (deleteUser) {
      try {
        setError(null);
        const response = await deleteSubscriber(estimate_id, abortController.signal);
        setDeleteCount(count => count + 1); // Step 2: Increment deletion count after successful delete
        if (!response) {
          console.log(`Subscriber with ID ${estimate_id} not found or already deleted.`);
        }
      } catch (err) {
        setError(err.message);
        console.log(error);
      }
    }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className='display-6 mb-3'> Email List</div>
        {requests.map((request, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <div className="card">
              <div className="card-body">                
                <p className="card-text"><span className='text-bold'>Name:</span> {request.name} </p>
                <p className="card-text"><span className='text-bold'>Email Address:</span>  {request.email_address} </p>
                <p className="card-text"><span className='text-bold'>Type:</span>  {request.service_type} </p>
  
                <button onClick={() => handleDelete(request.estimate_id)} className="btn btn-outline-danger ms-2">Delete</button>
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

export default EmployeeHome;
