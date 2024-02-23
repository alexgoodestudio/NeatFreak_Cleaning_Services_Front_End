import React from "react";

function EstimateForm(){


    return (
        <div>
            <form>
                <input />
                <input />
                <input />
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
                        type=""
                        value=""
                        onChange={handleCheckBox}
                        checked={form.checked}
                        />
                </div>
            </form>
        </div>
    )
}

export default EstimateForm