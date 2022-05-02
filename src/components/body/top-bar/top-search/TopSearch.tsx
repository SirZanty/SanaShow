import React from 'react'
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';
import './TopSearch.css'

const TopSearch = () => {
    return(
        <div className="p-mr-3 top-search">
            <span className="p-input-icon-left a-p-inputtext">
                                        <i className="pi pi-search"/>
                                        <InputText value="" placeholder="Search" />
                         </span>
        </div>
    )
}

export default TopSearch