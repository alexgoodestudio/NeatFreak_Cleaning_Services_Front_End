import React, { useState, useEffect } from 'react';
import Footer from "./Footer"
import { listRequests } from '../utils/api';
import { deleteSubscriber } from '../utils/api';

const EmployeeHome = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

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
  }, []);
  console.log(requests)

  async function handleDelete(estimate_id){
    const abortController = new AbortController();
    const deleteUser = window.confirm("Would you like to delete Subscriber?");
    if(deleteUser){
      try{
        setError(null);
        const response = await deleteSubscriber(estimate_id, abortController.signal);
        if (!response) {
          // Handle case where delete was successful but the item was not found (204 No Content or similar response)
          console.log(`Subscriber with ID ${estimate_id} not found or already deleted.`);
        }
      }catch(err){
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
                <p className="card-text">Name: {request.name} </p>
                <p className="card-text">Email Address: {request.email_address} </p>
                <p className="card-text">Type: {request.service_type} </p>
  
                <button onClick ={()=> handleDelete(request.estimate_id)} className="btn btn-outline-danger ms-2">Delete</button>
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
