import React from "react";
import RestClient from "../RestClient";
import './TestPetter.css';

export default function TestPetter() {
    let [environments, SetEnvironments] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllEnvironments()
        .then(environments => SetEnvironments(environments))
        .catch(err => alert(err))
    }, [])



    return (
        <div>
            <h1>Greetings from Petter</h1>
            This is Petters page

            <h2>All environments</h2>
            <ul>
                {environments.map(
                    (environment: any, i:number ) =>
                        <li key={i}>
                            <div className="envKey">{`Key = ${environment.id}`}</div>
                            <div className="envValue">{`Value = ${environment.short_name}, ${environment.description}`}</div>
                             {/*`Key = ${environment.id} : Value = ${environment.short_name}, ${environment.description}` */}
                        </li>
                )}
            </ul>
        </div>
    )
}