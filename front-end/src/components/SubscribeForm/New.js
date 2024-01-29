import React from "react";
import { useState } from "react";
import { createEntry } from "../../utils/api";

function NewForm() {
    const title = "Stay ahead in the game of cleanliness! Subscribe to our exclusive newsletter and receive monthly insights straight to your inbox. From expert cleaning hacks to eco-friendly solutions, we cover it all to help you maintain a sparkling home with ease. Plus, subscribers get first dibs on special offers and updates about our services. Sign up now and transform the way you clean! ";
    const keyValues = {
        name: "",
        email_address: "",
        service_type: "",
    }
    const [formData, setFormData] = useState(keyValues)
    const [error, setError] = useState(null);

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
        const handleSubmit = async (event) => {
            event.preventDefault();
            const abortController = new AbortController();
            try {
                await createEntry(formData, abortController.signal);
                history.push(`/request?id=${formData.estimate_id}`);
            } catch (error) {
                setError(error);
            }
        };

        return (
            <SubscribeForm title={title} error={error} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
        )
    }
export default NewForm;