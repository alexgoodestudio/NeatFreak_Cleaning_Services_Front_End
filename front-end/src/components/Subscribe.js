import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { createEntry } from "../utils/api";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";
import Footer from "./Footer";

function Subscribe() {
  const history = useNavigate();

  function cancelAndReturn() {
    history(-1);
  }

  const keyValues = {
    name: "",
    email_address: "",
    service_type: "",
  };
  const [formData, setFormData] = useState(keyValues);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      await createEntry(formData, abortController.signal);
      // Reset formData to initial state after successful submission
      setFormData(keyValues);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row ">
      <div className="col-lg-3 "></div>
        <div className="col-lg-6 ">
          {/* <hr className="mb-4"></hr> */}
          <form className="" onSubmit={handleSubmit}>
            <h3 className="fontLight bg-secondary text-light p-3 br">
              <span className="bold">
                Join Our <span className=" underline">Exclusive</span> <span className="italics3"> Cleaning </span>Tips Newsletter
              </span>
            </h3>
            <p className="fontLight mt-3">
              Stay ahead in the game of cleanliness! Subscribe to our exclusive
              newsletter and receive monthly insights straight to your inbox.
              From expert cleaning hacks to eco-friendly solutions, we cover it
              all to help you maintain a sparkling home with ease. Whether
              you're tackling stubborn stains or seeking ways to organize your
              space more efficiently, our tips are tailored to make your
              cleaning routine a breeze. Plus, subscribers get first dibs on
              special offers and updates about our services. Sign up now and
              transform the way you clean!
            </p>
            <hr className="mt-4"></hr>
            <ErrorAlert error={error} />

            <label for="name" class="form-label mt-3">
              Name:
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="name"
              value={formData.name}
              name="name"
            />

            <label for="emailAddress" class="form-label mt-3">
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


            <div className="form-group">
              <label for="serviceType" className="form-label mt-3 w-100">
                How did you hear about us?
              </label>
              <select
                className="form-select  "
                id="serviceType"
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
              >
                <option value="default">select an option</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-outline-primary mt-4">
              Submit
            </button>
            <button
              className="btn btn-outline-secondary mt-4"
              onClick={cancelAndReturn}
            >
              Cancel
            </button>
          </form>
        </div>
        {/* <div className="col-lg-6">
          <img
            src={Image5}
            class="img-fluid  right-aligned-img pic bounce-in handMargin"
            alt="..."
          />
        </div> */}
        <div className="col-lg-3 "></div>
      </div>

      <div className="row">
        <div className="col-lg-12 sizeIncrease">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
