import React from "react";
import ErrorAlert from "./ErrorAlert";

function EstimateForm({
  formData,
  switchState,
  error,
  handleCheckBox,
  handleChange,
  handleSubmit,
}) {

  if (!formData) {
    return null; 
  }

  return (
    <div>
      <ErrorAlert error={error && error.message} />
      {switchState && (
        <div onChange={handleSubmit} className="alert alert-primary">
          {"Got it!"}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="name"
          value={formData.name}
          name="name"
        />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="email"
          value={formData.email_address}
          name="email_address"
        />

        <label htmlFor="phoneNumber" className="form-label">
          Phone Number:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="phoneNumber"
          value={formData.phone_number}
          name="phone_number"
        />

        <label htmlFor="address" className="form-label">
          Address:
        </label>
        <input
          className="form-control formMargin"
          type="address"
          onChange={handleChange}
          id="address"
          value={formData.address}
          name="address"
        />

        <label htmlFor="NumberOfBeds" className="form-label">
          Number of Beds:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="numberOfBeds"
          value={formData.number_of_beds}
          name="number_of_beds"
        />

        <label htmlFor="numberOfBaths" className="form-label">
          Number of Baths:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="numberOfBaths"
          value={formData.number_of_baths}
          name="number_of_baths"
        />

        <label htmlFor="squareFootage" className="form-label">
          Square Footage:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="squareFootage"
          value={formData.square_footage}
          name="square_footage"
        />

        <label htmlFor="additionalInfo" className="form-label">
          Additional Info:
        </label>
        <input
          className="form-control formMargin"
          type="text"
          onChange={handleChange}
          id="additionalInfo"
          value={formData.additional_info}
          name="additional_info"
        />

        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onChange={handleCheckBox}
          checked={formData.checkbox}
        />

        <label htmlFor="checkbox" className="ms-2 form-label">
          May we contact you?
        </label>

        <button type="submit" className="btn btn-outline-primary d-flex mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EstimateForm;
