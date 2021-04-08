import React from "react";
import RestClient from "../RestClient";

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
                    <li key={i}>
                        {`Key = ${config.key_name} : Value = ${config.value}`}
                    </li>                
            )}
            </ul>
        </div>
    )
}