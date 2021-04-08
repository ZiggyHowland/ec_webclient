import React from "react";
import RestClient from "../RestClient";

export default function TestSigbjorn() {
    let [configs, setConfigs] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllConfigurations()
            .then(configs => setConfigs(configs));
    }, [])


    return (
        <div>
            <h1>Hello from Sigbjørn</h1>
            This is Sigbjørns page

            <h2>Showing all configs:</h2>
            <ul>
            {configs.map(
                ( config: any, i: number ) =>
                    <li key={i}>
                        {`Key = ${config.key} : Value = ${config.value}`}
                    </li>                
            )}
            </ul>
        </div>
    )
}