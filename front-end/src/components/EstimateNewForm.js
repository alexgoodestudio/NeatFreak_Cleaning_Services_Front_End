import {React, useState} from "react";
import EstimateForm from "./EstimateForm";
import { createEstimate } from "../utils/api";

function EstimateNewForm(){
    
    const title ="New Estimate"
    const [error, setError] =useState(null); 
    const keyValues={
        name: "",
        email: "",
        phoneNumber:"",
        numberOfBeds:0,
        numberOfBaths:0,
        squareFootage:0,
        checked:false
    }
    
    function handleChange(event){
        if(event.target.numberOfBaths || numberOfBeds || squareFootage){
            setFormData({
                ...keyValues,
                [event.target.name]: Number(event.target.value)
            })
        }else{
            setFormData({
                ...keyValues,
                [event.target.value]: event.target.value
            })
        }
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const abortController = new AbortController();
        try{
            await createEstimate(
                formData,abortController.signal
                )
                history.push(`/estimates?name=${formData.name}`)
        }catch(error){
            setError(error)
        }
    }

    return (
        <div>
            <EstimateForm title={title} formData={formData} error={error} setFormData={setEstimate} handleChange={handleChange} handleSubmit={handleSubmit} estimateId={estimate.estimate_id} />
        </div>
    )

}

export default EstimateNewForm

