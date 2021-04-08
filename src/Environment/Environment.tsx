//import { useLocation } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import './Environment.css';
import RestClient from "../RestClient";

export default function Environment() {
    let [environment, SetEnvironment] = React.useState(null);
    //let [environment, SetEnvironment] = React.useState<any>(undefined)

    let { id } : any = useParams();

    if (id == null) {
        id = 1;
    }

    React.useEffect( () => {
        RestClient.getEnvironmentById(id)
        .then(e => SetEnvironment(e))
        .catch(err => alert(err))
    }, [])

    if (environment) {
        return (
            <React.Fragment>
                <EnvironmentDetails {...environment}/>   
                {/*<AddConfiguration/>*/}
            </React.Fragment>
        )
    } else return <div>test</div>;

    function EnvironmentDetails(environment : any) {
        return (
            <div>
                <h1>{`${environment.id} ${environment.short_name} ${environment.description}`}</h1> 
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