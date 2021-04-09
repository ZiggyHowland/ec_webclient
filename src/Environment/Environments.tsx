import React from "react";
import Environment from "./Environment";
import RestClient from "../RestClient";
import './Environment.css';
import { Anchor } from '@dnb/eufemia/elements'

export default function Environments() {
    let [environments, SetEnvironments] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllEnvironments()
        .then(environments => SetEnvironments(environments))
        .catch(err => alert(err))
    }, [])

    /*const functiona = () => {
    } */

    const DeleteEnvironment = (/*id*/) : any => {
        //href={`/environments/deleteEnvironment/${id}`;}
    }

    return (
        <div id="envBackground">
            <h1>Environment</h1>

            <h2>All environments</h2>
            <button className="envButtonAdd">Add environment</button>
            <ul>
                {environments.map(
                    (environment: any, i:number ) =>
                        <li key={i}>
                            {/* <div className="envKey">{`Key = ${environment.id}`}  */}
                            <a id="envKey" href={`/environment/${environment.id}`}>{environment.id}</a>
                            {/* </div> */}
                            <div className="envValue"> {`Value = ${environment.short_name}, ${environment.description}`} <button className="envButtonDelete" onClick={DeleteEnvironment(/*environment.id*/)}>Delete environment</button></div>
                             {/*`Key = ${environment.id} : Value = ${environment.short_name}, ${environment.description}` */}
                        </li>
                )}
            </ul> 
            {/*<Environment/>*/}
            </div>
    )
}


