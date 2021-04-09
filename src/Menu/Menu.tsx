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
            <li><Anchor href="/users">User</Anchor></li>
            <li><Anchor href="/configurations">Configuration</Anchor></li>
            <li><Anchor href="/eufemia/examples">Eufemia examples</Anchor></li>
            <hr />
            <span className="token"><Button className="login" text="Auto login" onClick={login}/></span>
            <span className="token"><Button className="login" text="Show token" onClick={showToken}/></span>
            <span className="token"><Button className="login" text="Auto logout" onClick={logout}/></span>
            <hr /> 
            <li><Anchor href="http://localhost:8111/swagger-ui/" target="_blank">Backend API</Anchor></li>
            <li><Anchor href="https://github.com/Toendel96/ec_webserver" target="_blank">GitHub: Backend</Anchor></li>
            <li><Anchor href="https://github.com/ZiggyHowland/ec_webclient" target="_blank">GitHub: Frontend</Anchor></li>
            
          </ul>
        </nav>  
    )
}