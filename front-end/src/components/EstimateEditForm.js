import {React, useState} from "react";
import EstimateForm from "./EstimateForm";

function EstimateEditForm(){

    const[error, setError] = useState(null);
    const[formData, setFormData]=useState();

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

        }catch{

        }

    }

    return (
        <div>
            <EstimateForm />
        </div>
    )
}

export default EstimateEditForm

