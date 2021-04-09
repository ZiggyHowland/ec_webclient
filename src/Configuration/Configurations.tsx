import React from "react";
import RestClient from "../RestClient";
import ConfigurationBox from "./ConfigurationBox";

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
                    <ConfigurationBox {...config} />

                    // <li key={i}>
                    //     {`Key = ${config.key_name} : Value = ${config.value}`}
                    // </li>                
            )}
            </ul>
        </div>
    )
}