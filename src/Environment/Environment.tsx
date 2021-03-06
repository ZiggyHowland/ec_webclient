//import { useLocation } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import './Environment.css';
import RestClient from "../RestClient";
import Configuration from "../Configuration/Configuration";
import ConfigurationBox from "../Configuration/ConfigurationBox";

export default function Environment() {
    //let [environment, SetEnvironment] = React.useState<any>(undefined)
    let [environment, SetEnvironment] = React.useState(null);
    let [configurations, SetConfigurations] = React.useState([]);

    //This method receives the hole environment object, and then shows description value
    const UpdateEnvironment = (environment:any) => () => {
        var newValue = prompt("Please enter new value", environment.description)
        if (newValue) {
            let objectToUpdate = {
                id: environment.id,
                short_name: environment.short_name,
                description: newValue
            }

            RestClient.updateEnvironmentDescription(environment.id, objectToUpdate, undefined)
            .then( () => {
                window.location.reload(false);
            })
            .catch((err) => alert(err))
        }
    }



    let { id } : any = useParams();
    if (id == null) id = 1;


    React.useEffect( () => {
        RestClient.getEnvironmentById(id)
        .then(e => SetEnvironment(e))
        .catch(err => alert(err))
        RestClient.getConfigurationByEnvironmentId(id)
        .then(c => SetConfigurations(c))
        .catch(err => alert(err)) 
    }, [])

    if (environment) {
        return (
        
            <React.Fragment>
                <h1>Environment page:</h1>                
                <EnvironmentDetails {...environment}/>
                <h1>Configurations for this environment</h1>
                {configurations.map(
                    (configuration: any, i:number ) => 
                <div className="cBox"><ConfigurationBox {...configuration}/> </div>)}
            </React.Fragment>
        )
    } else return <div>test</div>;

    function EnvironmentDetails(environment : any) {
        return (
            <div>
                <h1>{`${environment.id} ${environment.short_name} ${environment.description}`}<button className="envButtonUpdate" onClick={UpdateEnvironment(environment)}>Update environment</button></h1>
                <div>{JSON.stringify(environment)}</div>
            </div>
        )
    }













    /*function AddConfiguration() {
        return (
        <div>
			<h2>Add Configuration</h2>
			<form /*onSubmit={handleSubmit} >
				<p>
					<label htmlFor='id'>ID:  </label>
					<textarea id='id' rows={1} cols={20}/>
				</p>
				<p>
                <label htmlFor='environment'>Environment ID:  </label>
					<textarea id='environment' rows={1} cols={20}/>
				</p>
				<p>
                <label htmlFor='id'>key_name:  </label>
					<textarea id='keyname' rows={1} cols={20}/>
				</p>
                <label htmlFor='value'>Value:  </label>
					<textarea id='value' rows={1} cols={20}/>
				<p>
                </p>
                <label htmlFor='modifiedby'>Modified by:  </label>
					<textarea disabled id='modifiedby' placeholder="username" rows={1} cols={20}/>
				<p>    
					<label>&nbsp;</label> //Placeholder
					<button>Add configuration</button>
				</p>
			</form>
		</div>
        ) 
    } */




}