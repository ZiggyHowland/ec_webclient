import React from "react";
import RestClient from "../RestClient";
import './ConfigurationBox.css';
import { getGlobalVariables } from '../environment.js';

export default function ConfigurationBox(configuration: any) {
    //var date = new Date(configuration.timestamp_modified).toLocaleDateString(getGlobalVariables().date_locale);

    return (
        <div className="configBox">
            <p className="box-header">{`${configuration.key_name} => ${configuration.value}`}</p>
            Key name: {configuration.key_name}<br />
            Value: {configuration.value}<br />
            Last changed: {configuration.timestamp_modified}<br />
            <p>
                <code className="dnb-code">{JSON.stringify(configuration)}</code>
            </p>
        </div>
    )

}