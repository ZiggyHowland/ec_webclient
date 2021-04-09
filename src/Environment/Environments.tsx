//import React from "react";
import Environment from "./Environment";
import RestClient from "../RestClient";
import './Environment.css';
import { Anchor } from '@dnb/eufemia/elements'
import React, { createRef, useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Environments() {
    let [environments, SetEnvironments] = React.useState([]);
    //const thisElement = createRef<HTMLDivElement>();
    const history = useHistory();

    React.useEffect( () => {
        RestClient.getAllEnvironments()
        .then(environments => SetEnvironments(environments))
        .catch(err => alert(err))
    }, [])

    /*const functiona = () => {
    } */

    const deleteEnvironment = ({id}:any) => () => {
        /*const deleteEnvironment = (environment:any) => () => {
            var id = environment.id; */
        var msg = `Do you want to delete config with key ${id}`;
        if (window.confirm(msg)) {
            RestClient.deleteEnvironmentById(id, "")
            .then( () => {
                //history.push("environments"); //Updates URL, but will not refresh
                window.location.reload(false);
            /*if (thisElement.current) {
                thisElement.current.remove();
            }*/
        })
        .catch( (e)=>alert(e) );
    } 
}


    return (
        <div id="envBackground">
            <h1>Environment</h1>
            <h2>All environments</h2>
            <button className="envButtonAdd">Add environment</button>

            <ul>
                {environments.map(
                    (environment: any, i:number ) =>
                    //<div ref={thisElement} key={i}>
                        <li key={i}>
                            {/* <div className="envKey">{`Key = ${environment.id}`}  */}
                            {/*<a id="envKey" href={`/environment/${environment.id}`}>{environment.id}</a> */ }
                            {/* </div> */}
                            <div className="envValue"><a id="envKey" href={`/environment/${environment.id}`}>{environment.id}</a> {`Name = ${environment.short_name}, description = ${environment.description}`} <button className="envButtonDelete" onClick={deleteEnvironment(environment)}>Delete environment</button></div>
                             {/*`Key = ${environment.id} : Value = ${environment.short_name}, ${environment.description}` */}
                        </li> //</div >
                )}
            </ul> 
            {/*<Environment/>*/}
            </div>
    )
}


