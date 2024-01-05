import React from "react";
// import { useState } from "react";
import "./Dashboard.css";
// import { createEntry } from "../utils/api";
// import { useNavigate } from "react-router-dom";
// import ErrorAlert from "./ErrorAlert";
import Image5 from "./Images/9.png";
import CalendlyEmbed from "./Calendly";
import Footer from "./Footer"

function Request() {
  // const history = useNavigate();

  // function cancelAndReturn() {
  //   history(-1);
  // }

  // const keyValues = {
  //   first_name: "",
  //   last_name: "",
  //   email_address: "",
  //   phone_number: "",
  //   message: "",
  // };
  // const [formData, setFormData] = useState(keyValues);
  // const [error, setError] = useState(null);

  // function handleChange(event) {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const abortController = new AbortController();
  //   try {
  //     await createEntry(formData, abortController.signal);
  //     // Reset formData to initial state after successful submission
  //     setFormData(keyValues);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  

  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-lg-6 ">
          {/* <hr className="mb-4"></hr> */}
          {/* <form className="" onSubmit={handleSubmit}> */}
            <h3 className="fontLight ">
              <span className="bold">Schedule your in-home estimate today</span>{" "}
              and take the first step towards a happier, cleaner home!
            </h3>
            <p className="fontLight mt-5">
              Ready for a cleaner space? We offer easy and quick in-home
              estimates that fit into your busy schedule. Just fill out a short
              form with your contact details and a preferred time for the
              estimate. I'll be in and out in just 15 minutes, ensuring a fast,
              efficient process tailored just for you.
            </p>
            <hr className="mt-4"></hr>
            {/* <ErrorAlert error={error} />
            <label for="firstName" class="form-label mt-3">
              Name:
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="firstName"
              value={formData.first_name}
              name="first_name"
         
            /> */}
            {/* <label for="lastName" class="form-label mt-3">
              Last Name
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="lastName"
              value={formData.last_name}
              name="last_name"
              // placeholder="Last Name"
            /> */}
            {/* <label for="emailAddress" class="form-label mt-3">
              Email Address
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="emailAddress"
              value={formData.email_address}
              name="email_address"
           
            />
            <label for="phoneNumber" class="form-label mt-3">
              Phone Number
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="phoneNumber"
              value={formData.phone_number}
              name="phone_number"
              // placeholder="Phone Number"
            />

      
            <div className="form-group">
      <label for="serviceType" className="form-label mt-3 w-100">
        What Type of Service?
      </label>
      <select
        className="form-select  "
        id="serviceType"
        name="service_type"
        value={formData.service_type}
        onChange={handleChange}
      >
        <option value="default">Select Service Type</option>
        <option value="oneTime">One Time</option>
        <option value="recurring">Recurring</option>
        <option value="moveInOut">Move In/Out</option>
      </select>
    </div> */}
           
            {/* <label for="message" class="form-label mt-2">
              Please leave two potential for 15 min estimate? Check email for confirmation.
            </label>
            <textarea
              className="form-control "
              type="text"
              onChange={handleChange}
              id="message"
              value={formData.message}
              name="message"
              // placeholder="What date and time could work for you?"
            /> */}
   <div className="mb-5">
          <CalendlyEmbed/>
      </div>
          {/*  <button type="submit" className="btn btn-outline-primary mt-2">
              Submit
            </button>
            <button
              className="btn btn-outline-secondary mt-2"
              onClick={cancelAndReturn}
            >
              Cancel
            </button>
          </form> */}
        </div>
        <div className="col-lg-6">
          <img
            src={Image5}
            class="img-fluid slide-in right-aligned-img pic bounce-in handMargin"
            alt="..."
          />
        </div>

      </div>
      <hr className="mt-5"></hr>
      <div className="row">

        <div className="col-lg-12 ">
          <Footer/>
      </div>
      </div>

    </div>
  );
}

export default Request;
