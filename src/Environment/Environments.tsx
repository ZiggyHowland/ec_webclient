//import React from "react";
import Environment from "./Environment";
import RestClient from "../RestClient";
import './Environment.css';
import { Anchor } from '@dnb/eufemia/elements'
import React, { createRef, useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ConfigurationBox from "../Configuration/ConfigurationBox";
import {Button as ButtonDNB} from "@dnb/eufemia/components";
import { trash } from '@dnb/eufemia/icons'


export default function Environments() {
    let [environments, SetEnvironments] = React.useState([]);


    React.useEffect( () => {        
        RestClient.getAllEnvironments()
            .then(environments => SetEnvironments(environments))
            .catch(err => alert(err))
    }, [])


    //This method receives description.id as a parameter
    const deleteEnvironment = (environment: any) => () => {       
        var msg = `Do you want to delete '${environment.description}'`;

        if (window.confirm(msg)) {
            RestClient.deleteEnvironmentById(environment.id, "")
            .then( () => {
                // A new rest call made to update the state of the component: 
                // TODO: Investigate if better to manipulate environments-variable manually (at frontend)
                RestClient.getAllEnvironments()
                    .then( (envs) => SetEnvironments(envs))
            })
            .catch( (e)=>alert(e) );
        } 
    }


    return (
        <div id="envBackground">
            <h1>Environments</h1>
            {/* <button className="envButtonAdd">Add environment</button> */}

            <Accordion defaultActiveKey="0">
                {environments.map(
                    (environment: any, i:number ) =>                    
                        <AddCard key={i} environment={environment} eventKey={i} />                                        
                )}
            </Accordion>
        </div>
    )


    function AddCard(props:any) {
        const eventKey = props.environment.id;
        const environmentId = props.environment.id;
        const environmentName = props.environment.description;

        return(
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                    {environmentName} - {eventKey}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>                        
                        <Link to={`/environment/${environmentId}`}>
                            <ButtonDNB
                                variant="secondary"
                                text="Open environment details"
                                icon="chevron_right_medium"
                                size="large"
                            />
                        </Link>

                        <ButtonDNB
                                variant="secondary"
                                text="Delete environment"
                                icon={trash}
                                size="large"
                                onClick={deleteEnvironment(props.environment)}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}


