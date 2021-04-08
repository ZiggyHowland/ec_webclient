import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";

export default function Menu() {

    const handleLogin = () => {
        
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


    return (
        <nav>
          <ul>
            <li><a href="/">Home</a></li>   
            <li><a href="/hello">Hello World</a></li>         
            <li><a href="/environments">Environments</a></li>
            <li><a href="/salim">Salims side</a></li>
            <li><a href="/sigbjorn">Sigbjørns side</a></li>
            <hr />
            <li>
                <a href="" onClick={handleLogin}>Admin login</a>
            </li>            
            <li><a href="#" onClick={showToken}>Show token</a></li>
          </ul>
        </nav>  
    )
}