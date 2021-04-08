import React from "react";
import EnvironmentById from "./Environment";
import RestClient from "../RestClient";
import './Environment.css';

export default function Environments() {
    let [environments, SetEnvironments] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllEnvironments()
        .then(environments => SetEnvironments(environments))
        .catch(err => alert(err))
    }, [])

    /*const functiona = () => {
    } */

    return (
        <div id="envBackground">
            <h1>Environment</h1>

            <h2>All environments</h2>
            <ul>
                {environments.map(
                    (environment: any, i:number ) =>
                        <li key={i}>
                            {/* <div className="envKey">{`Key = ${environment.id}`}  */}
                            <a id="envKey" href={`/environment/${environment.id}`}>{environment.id}</a>
                            {/* </div> */}
                            <div className="envValue">{`Value = ${environment.short_name}, ${environment.description}`}</div>
                             {/*`Key = ${environment.id} : Value = ${environment.short_name}, ${environment.description}` */}
                        </li>
                )}
            </ul> 
            {/*<EnvironmentById/> Her kan Environment*/}
        </div>
    )
}


