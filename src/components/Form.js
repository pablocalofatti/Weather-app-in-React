import React, { useState } from 'react';
import Error from './Error';
import ProtTypes from 'prop-types'

const Form = ({search, saveSearch, saveConsult}) =>{
    
    const [error, saveError] = useState(false);
    //extract city and country
    const { city, country} = search;
    const handleChange = e => {
        //update state
        saveSearch({
            // copy of state
            ...search,
            //update value
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = e =>{
        e.preventDefault();
        //validate
        if(city.trim()==='' || country.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);
        //pass it to the main component
        saveConsult(true);

    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="Both fields are required" />:null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City:</label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select a country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="UY">Uruguay</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                </select>    
                <label htmlFor="city">Country:</label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="search weather"
                    className="wave-effect wave-light -btn-large btn-block yellow accent-4"                    
                />
            </div>
        </form>
    );
}
Form.prototype = {
    search : ProtTypes.object.isRequired,
    saveSearch: ProtTypes.func.isRequired,
    saveConsult:ProtTypes.func.isRequired
}
export default Form;