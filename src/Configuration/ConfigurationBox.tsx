import RestClient from "../RestClient";
import './ConfigurationBox.css';
import { getGlobalVariables } from '../environment.js';
import React, { createRef, useState } from 'react';
import { Icon } from "@dnb/eufemia/components";

// Named ES import
import { edit } from '@dnb/eufemia/icons'

// or named import with modifier
//import { bell as Bell } from '@dnb/eufemia/icons'

// Default and explicit ES import
//import Bell from '@dnb/eufemia/icons/bell'



export default function ConfigurationBox(props: any) {
    //var date = new Date(configuration.timestamp_modified).toLocaleDateString(getGlobalVariables().date_locale);
    
    // Source: https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
    const thisElement = createRef<HTMLDivElement>();


    const deleteConfig = ({id, key_name}:any) => () => {
        var msg = `Do you want to delete config with key ${key_name}`;
        if (window.confirm(msg)) {
            RestClient.deleteConfigurationById(id, "")
                .then( () => {                                        
                    if (thisElement.current) {                                                
                        thisElement.current.remove()
                    }
                    
                })
                .catch( (e)=>alert(e) );
            
        }
    }


    const updateDescription = (configuration: any) => () => {
        var newValue = prompt("Please enter new value", configuration.value)
        if (newValue) {
            let objectToUpdate = {
                id: configuration.id,
                key_name: configuration.key_name,
                value: newValue 
            }

            RestClient.updateConfiguration(configuration.id, objectToUpdate, undefined)
                .then( () => {                                   
                    window.location.reload(false);
                    //alert("Updated successfully");
                })
                .catch( (err) => alert(err))

           
        }
    }

    


    return (
        <div className="configBox" ref={thisElement}>
            <p className="box-header">{`${props.key_name} => ${props.value}`}</p>
            Key name: {props.key_name}<br />
            <span>
                Value: {props.value}                  
                <button className="dnb-anchor" onClick={updateDescription(props)}><Icon icon={edit} /> </button>
            </span>
      
            
                <br />
            Last changed: {props.timestamp_modified}<br />
            <p>
                <code className="dnb-code">{JSON.stringify(props)}</code>
            </p>
                        
            <button className="dnb-anchor" onClick={deleteConfig(props)}>Delete configuration</button>
            
            
        </div>
    )

}

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return
}