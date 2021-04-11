import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";
import { Anchor } from '@dnb/eufemia/elements'


export default function Menu() {


    const isLoggedIn =  (sessionStorage.getItem("admin-token") != null )
    return (
        <nav>
          <ul>
            <li><Anchor href="/">Home</Anchor></li>            
            <li><Anchor href="/environments">Environments</Anchor></li>            
            <li><Anchor href="/configurations">Configurations</Anchor></li>
            <li><Anchor href="/users">Users</Anchor></li>
            <li><Anchor href="/login">{isLoggedIn ? "Log out" : "Log in"}</Anchor></li>
            <li><Anchor href="/about">About</Anchor></li>
            <hr /> 
            <li><Anchor href="/hello">Hello World (token)</Anchor></li>
            <li><Anchor href="/eufemia/examples">Eufemia examples</Anchor></li>            
            <hr /> 
            <li><Anchor href="http://localhost:8111/swagger-ui/" target="_blank">Backend API (Swagger)</Anchor></li>
            <li><Anchor href="http://localhost:8111/h2-console" target="_blank">H2 Console</Anchor></li>
            <li><Anchor href="https://github.com/Toendel96/ec_webserver" target="_blank">GitHub: Backend</Anchor></li>
            <li><Anchor href="https://github.com/ZiggyHowland/ec_webclient" target="_blank">GitHub: Frontend</Anchor></li>
            
          </ul>
        </nav>  
    )
}