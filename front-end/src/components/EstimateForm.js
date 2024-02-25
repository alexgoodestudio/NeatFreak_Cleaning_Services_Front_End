import React from "react";
import ErrorAlert from "./ErrorAlert"
import { useHistory } from "react-router-dom";


function EstimateForm({title, formData, error, setFormData, handleChange, handleSubmit, estimateId}){

    const history = useHistory();

    function cancelAndReturn() {
      history.goBack();
    }

    return (
        <div>
            <ErrorAlert error={error}/>
            <form>
                <h3>{title}</h3>
                <input 
                className="form-control"
                type="text"
                onChange={handleChange}
                id="name"
                value={formData.name}
                name="name"
                placeholder="Name"
                />
                <input 
                className="form-control"
                type="text"
                onChange={handleChange}
                id="email"
                value={formData.email}
                name="email"
                placeholder="Email"
                />
                <input 
                className="form-control"
                type="text"
                onChange={handleChange}
                id="phoneNumber"
                value={formData.phone_number}
                name="phone_number"
                placeholder="Phone Number"
                />
                <input 
                className="form-control"
                type="text"
                onChange={handleChange}
                id="numberOfBeds"
                value={formData.number_of_beds}
                name="number_of_beds"
                placeholder="Number of Beds"
                />
                <input 
                className="form-control"
                type="text"
                onChange={handleChange}
                id="numberOfBaths"
                value={formData.number_of_baths}
                name="number_of_baths"
                placeholder="Number of Baths?"
                />
                <input 
                className="form-control"
                type="text"
                onChange={handleChange}
                id=""
                value={formData.square_footage}
                name="square_footage"
                placeholder="Square Footage"
                />
                <input 
                className="form-control"
                type="address"
                onChange={handleChange}
                id="address"
                value={formData.addess}
                name="address"
                placeholder="Address"
                />

                <div>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>

                    <input
                        type="checkbox"
                        value="formData.checkbox"
                        onChange={handleCheckBox}
                        checked={form.checked}
                        />
                </div>
            </form>
        </div>
    )
}

export default EstimateForm