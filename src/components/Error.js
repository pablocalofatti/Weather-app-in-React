import React from 'react'
import ProtTypes from 'prop-types'

const Error =({message})=>{
    return(
       <p className="red darken-4">{message}</p> 
    );
}
Error.prototype = {
    message: ProtTypes.string.isRequired
}
export default Error;