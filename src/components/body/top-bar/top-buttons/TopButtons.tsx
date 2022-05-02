import React from 'react'
import 'primeflex/primeflex.css';
import './TopButtons.css'

const TopButtons = () => {
    return(
        <div className="p-mr-3 top-buttons">
            <div className="p-d-flex">
                <div className="p-m-2">
                    <i className="pi pi-heart"/>
                </div>
                <div className="p-m-2">
                    <i className="pi pi-envelope"/>
                </div>
                <div className="p-m-2">
                    <i className="pi pi-user"/>
                </div>
            </div>
        </div>
    )
}

export default TopButtons