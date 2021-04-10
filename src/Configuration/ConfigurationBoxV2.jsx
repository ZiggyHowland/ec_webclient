import RestClient from "../RestClient";
import './ConfigurationBox.css';
import { getGlobalVariables } from '../environment.js';
import React, { useState } from 'react';
import { Icon } from "@dnb/eufemia/components";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


// Named ES import
import { edit } from '@dnb/eufemia/icons'

// or named import with modifier
//import { bell as Bell } from '@dnb/eufemia/icons'

// Default and explicit ES import
//import Bell from '@dnb/eufemia/icons/bell'


// Source: https://jasonwatmore.com/post/2020/10/14/react-hook-form-combined-add-edit-create-update-form-example
// Require dependencies: 
//  https://github.com/jquense/yup ("npm install -S yup")
//  https://github.com/react-hook-form/react-hook-form ("npm install react-hook-form" + "npm i @hookform/resolvers")
export default function ConfigurationBox(props) {
    var history = props.history;
    var match = props.match;
    const { id } = match.params;
    const isAddMode = !id;

    const validationSchema = Yup.object().shape({
        key_name: Yup.string()
            .required('Key name is required'),
        value: Yup.string()
            .required('Value is required'),        
    });

    const { register, handleSubmit, reset, setValue, getValues, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    })

    function onSubmit(data) {
        return isAddMode
            ? createConfiguration(data)
            : updateConfiguration(id, data);
    }

    function createConfiguration(data) {
        return RestClient.createConfiguration(data, 2, 2, "")
            .then( () => {
                alert("Configuration added (PS: Remember environmentId + userId hardcoded.");
                history.push(".");
            })
            .catch( (err) => alert("Error added: " + err));

    }

    function updateConfiguration(id, data) {
        data.id = id;        
        return RestClient.updateConfiguration(id, data, "")
            .then( () => {
                alert("Configuration updated");
                history.push("..");
            })      
            .catch((err) => alert("Error updating: " + err))  
    }

    const [configuration, setConfiguration] = useState({});
    

    React.useEffect( () => {
        if (!isAddMode) {
            RestClient.getConfigurationById(id)
                .then( configuration => {
                    const fields = [ 'key_name', 'value' ];
                    fields.forEach(field => setValue(field, configuration[field]));
                    setConfiguration(configuration);
                })
        }

    }, []);



    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
            <div className="form-row">            
                <div className="form-group col-5">
                    <label>Key name</label>
                    <input name="key_name" type="text" {...register('key_name')} className={`form-control ${false ? 'is-invalid' : ''}`} />
                    {/* <div className="invalid-feedback">{errors.key_name?.message}</div> */}
                </div>
                <div className="form-group col-5">
                    <label>Value</label>
                    <input name="value" type="text" {...register('value')} className={`form-control ${false ? 'is-invalid' : ''}`} />
                    {/* <div className="invalid-feedback">{errors.value?.message}</div> */}
                </div>
            </div>
                        
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    )

}
