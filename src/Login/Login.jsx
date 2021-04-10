import RestClient from "../RestClient";
import React, { useState } from 'react';
import {Button} from "@dnb/eufemia/components";
import { useForm } from "react-hook-form";
import './Login.css';


export default function Login(props) {
    var history = props.history;
    var match = props.match;

    const isLoggedIn = (sessionStorage.getItem("admin-token") != null );    

    // Source: https://react-hook-form.com/api/useform/getvalues
    const { register, handleSubmit, getValues } = useForm();


    function onSubmit(data) {
        return !isLoggedIn
            ? login(data)
            : logout();
    }


    function login(data) {
        RestClient.loginAdmin(data.username, data.password)
            .then( (u) => {
                sessionStorage.setItem("admin-token", u.token);                
                alert("You are logged in as admin");
                history.push('.');

            })
            .catch( (e) => alert("Unable to log in"))
    }


    function logout() {
        sessionStorage.removeItem("admin-token");
        alert("Bye bye admin");
    }

    
    React.useEffect( () => {
        // Calling RestServices only on click
    }, []);


    return (
        !isLoggedIn 
            ? <LoginForm />
            : <LogoutForm />
        
    
   
    )


    function LoginForm() {
        return (
            <form class="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                
                <div className="form-group">
                    <label class="control-label col-sm-2" for="username">Username</label>
                    <div class="col-sm-10">
                        <input id="username" name="username" type="text" {...register('username')} />
                    </div>
                </div>
    
                <div className="form-group">
                    <label class="control-label col-sm-2" for="password">Password</label>
                    <div class="col-sm-10">
                        <input name="password" type="password" {...register('password')} />                
                    </div>
                </div>
    
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <span className="token"><Button type="submit" text="Log in"/></span>                    
    
                    </div>
                </div>
               
            </form>
        )
    }
    
    function LogoutForm() {
        return (
            <form class="form-horizontal" onSubmit={onSubmit}>
                <h1>Logout</h1>
                <p>Click logout button to log out of this amazing app.</p>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <span className="token"><Button type="submit" text="Log out"/></span>                    
    
                    </div>
                </div>
    
    
            </form>
        )
    }
    



}



