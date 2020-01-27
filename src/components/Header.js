import React from 'react';
import ProtTypes from 'prop-types'

const Header = ({title}) => {
    return(
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
    )
}
Header.prototype = {
    totle: ProtTypes.string.isRequired
}
export default Header;