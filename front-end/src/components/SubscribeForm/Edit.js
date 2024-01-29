import React from "react";
import { useState } from "react";
import { updateEstimate } from "../../utils/api";
import { useAsyncError } from "react-router-dom";
function EditForm(){
    const keyValues= {
        name:"",
        email_address:"",
        service_type:""
    }
    const title ="Edit Form"
    const [error, setError] = useState(null);
    const [formData, setFormData] = (keyValues)
    
    function handleChange(event){
        setFormData({
            ...formData, 
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const abortController = new AbortController();
        try{
            await updateEstimate(
                formData.estimate_id,
                formData,
                abortController.signal
            )
        }catch(error){
            setError(error)
        }
    }

    return(
        <ReservationForm error={error} formData={formData} title={title} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default EditForm;