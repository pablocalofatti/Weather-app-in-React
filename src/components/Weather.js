import React from 'react'
import ProtTypes from 'prop-types';

const Weather =({result}) =>{
    //extract value
    const { name, main} = result;
    if(!name) return null;
    //kelvin to celcius
    const kelvin = 273.15;
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {name} is:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin,10).toFixed(2)}<span> &#x2103; </span>
                </p>
                <p> Maximum temperature:
                    {parseFloat(main.temp_max - kelvin,10).toFixed(2)}<span> &#x2103; </span>
                </p>
                <p> Minimum temperature:
                    {parseFloat(main.temp_min - kelvin,10).toFixed(2)}<span> &#x2103; </span>
                </p>
            </div>
        </div>

    );
}
Weather.prototype = {
    result: ProtTypes.object.isRequired
}
export default Weather;