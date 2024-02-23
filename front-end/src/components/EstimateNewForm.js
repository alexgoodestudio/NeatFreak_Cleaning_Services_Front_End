import {React, useState} from "react";
import EstimateForm from "./EstimateForm";

function EstimateNewForm(){

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

    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const abortController = new AbortController();
    }

    return (
        <div>
            <EstimateForm />       
        </div>
    )
}

export default EstimateNewForm

