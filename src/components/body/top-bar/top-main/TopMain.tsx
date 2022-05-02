import React, {Component} from 'react';
import './TopMain.css';
import TopLogo from "../top-logo/TopLogo";
import TopSearch from "../top-search/TopSearch";
import TopButtons from "../top-buttons/TopButtons";
import 'primeflex/primeflex.css';

export default class TopMain extends Component {
    render(){
        return(
            <div className="p-d-flex top-bar p-mb-2">
                <TopLogo/>
                <TopSearch/>
                <TopButtons/>
            </div>
        )
    }
}

