import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";
import { Anchor } from '@dnb/eufemia/elements'
import {Button} from "@dnb/eufemia/components";

export default function Menu() {

    const login = () => {
        RestClient.loginAdmin("Salim", "pass1")
            .then( (u) => {
                //localStorage.setItem("admin-user", u.token);
                sessionStorage.setItem("admin-token", u.token);
            })
            .catch( (e) => alert("Feil: " + e))
    };

    const showToken = () => {
        //const u = localStorage.getItem("admin-user");
        const u = sessionStorage.getItem("admin-token");
        alert(u);
    }

    const logout = () => {
        sessionStorage.removeItem("admin-token");
    }


    return (
        <nav>
          <ul>
            <li><Anchor href="/">Home</Anchor></li>
            <li><Anchor href="/hello">Hello World</Anchor></li>
            <li><Anchor href="/environments">Environment</Anchor></li>
            <li><Anchor href="/salim">Salims side</Anchor></li>
            <li><Anchor href="/configurations">Configuration</Anchor></li>
            <hr />
            <Button className="login" text="Auto login" onClick={login}/><br/><br/>
            <Button className="login" text="Show token" onClick={showToken}/><br/><br/>
            <Button className="login" text="Auto logout" onClick={logout}/>            
          </ul>
        </nav>  
    )
}