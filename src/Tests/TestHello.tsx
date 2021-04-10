import React from "react";
import RestClient from '../RestClient';
import {Button} from "@dnb/eufemia/components";
import './TestHello.css';

export default function TestHello(props: any) {
    let [helloMessage, setMessage] = React.useState("Hello unknown");

    React.useEffect( () => {
        var token = sessionStorage.getItem("admin-token");
        RestClient.helloWorld("Salim", token)
            .then(                                 
                result => { 
                    setMessage(result)
            })
            .catch(
                e => alert(e)
            )
    })


    
    const login = () => {
        RestClient.loginAdmin("Salim", "pass1")
            .then( (u) => {
                sessionStorage.setItem("admin-token", u.token);
                alert("Auto login successfull. Token available.");
                window.location.reload(false);
            })
            .catch( (e) => alert("Feil: " + e))
    };

    const showToken = () => {
        const u = sessionStorage.getItem("admin-token");
        alert(u);
    }

    const logout = () => {
        sessionStorage.removeItem("admin-token");
        alert("Auto logout completed. Token invalidated");
        window.location.reload(false);
    }



    return (
        <div>
            <h1>A warm general welcome</h1>
            This is a test page
            <hr />
            Message from server: <b> {helloMessage}</b>
            <hr />
            <span className="token"><Button className="login" text="Auto login" onClick={login}/></span>
            <span className="token"><Button className="login" text="Show token" onClick={showToken}/></span>
            <span className="token"><Button className="login" text="Auto logout" onClick={logout}/></span>
        </div>
    )
}