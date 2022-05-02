import React from 'react'
import 'primeflex/primeflex.css';
import './TopLogo.css'
import logo from '../../../../assets/sanashow.png'

const TopLogo = () => {
    return(
        <div className="p-mr-3 top-logo p-d-flex">
            <img src={logo}  alt="SanaShow logo" width="100%" height="100%"/>
        </div>
    )
}

export default TopLogo