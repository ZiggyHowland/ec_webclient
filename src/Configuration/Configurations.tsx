import RestClient from "../RestClient";
import ConfigurationBox from "./ConfigurationBox";
import React, { useState } from 'react';



export default function Configurations() {
    let [configs, setConfigs] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllConfigurations()
            .then(configs => setConfigs(configs));
    }, [])
    
    return (
        <div>
            <h1>Configuration</h1>

            <h2>Showing all configurations:</h2>
            <ul>
            {configs.map(
                ( config: any, i: number ) =>
                    <ConfigurationBox key={i} {...config} />         
            )}
            </ul>
        </div>
    )
}
