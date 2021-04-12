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
import Modal from 'react-bootstrap/Modal';
import ConfigurationBox from "../Configuration/ConfigurationBox";
import {Button as ButtonDNB} from "@dnb/eufemia/components";
import { trash } from '@dnb/eufemia/icons'
import { render } from "@testing-library/react";


export default function Environments() {
    // Explanation of useState() (hooks), and the javascript syntax of let and the []-brackets: 
    // https://reactjs.org/docs/hooks-state.html
    let [environments, SetEnvironments] = React.useState([]);


    React.useEffect( () => {        
        RestClient.getAllEnvironments()
            .then(environments => SetEnvironments(environments))
            .catch(err => alert(err))
    }, [])



    const deleteEnvironment = (id:number) => () => {           
        RestClient.deleteEnvironmentById(id, "")
        .then( () => {
            // A new rest call made to update the state of the component: 
            // TODO: Investigate if better to manipulate environments-variable manually (at frontend)
            RestClient.getAllEnvironments()
                .then( (envs) => SetEnvironments(envs))
        })
        .catch( (e)=>alert(e) );
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

                        <Popup environment={props.environment} deleteEnvironment={deleteEnvironment} />

                        
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }

    // Source Bootstrap <Button>: https://react-bootstrap.github.io/components/buttons/
    // Source Bootstrap <Modal>: https://react-bootstrap.github.io/components/modal/
    function Popup(props: any) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const deleteEnvironment = props.deleteEnvironment;

        return (
            <>            
            <ButtonDNB
                variant="secondary"
                text="Delete environment"
                icon={trash}
                size="large"
                onClick={handleShow}                    
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete environment?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Do you want to delete '${props.environment.description}'?`}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={deleteEnvironment(props.environment.id)}>
                    Delete environment
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }


}


