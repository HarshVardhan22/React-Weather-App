import React from "react";

import './Form.css'

const Form = (props) => { 

    return (
        <div className="form">
        <form onSubmit = {props.getWeather}>
        
        <input type="text" placeholder = "City" name = 'city'/>

        <input type="text" placeholder= "Country" name = "country"/>

        <button>Submit</button>

        </form>
        </div>
    )
}

export default Form;