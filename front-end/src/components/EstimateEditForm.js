import {React, useState} from "react";
import EstimateForm from "./EstimateForm";
import { useParams } from "react-router-dom";
import { updateEstimate } from "../utils/api";

function EstimateEditForm(){
    const[error, setError] = useState(null);
    const [estimate, setEstimate] = useState({})
    const {estimate_id} = useState(useParams) 
    const[formData, setFormData]=useState();
    const title="Edit Estimate"
    const keyValues={
        name:"",
        email:"",
        phone_number:"",
        number_of_beds:0,
        number_of_baths:0,
        square_footage:0,
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
            await updateEstimate(
                formData.estimate_id,
                formData,
                abortController.signal
            )
            history.push(`/estimates?name=${formData.name}`)
        }catch(error){
            setError(error)
        }

    }

    return (
        <div>
            <EstimateForm title={title} formData={formData} error={error} setFormData={setEstimate} handleChange={handleChange} handleSubmit={handleSubmit} estimateId={estimate.estimateId}/>
        </div>
    )
}

export default EstimateEditForm

