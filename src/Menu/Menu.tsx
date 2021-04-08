import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";

export default function Menu() {

    const handleLogin = () => {
        
        RestClient.loginAdmin("Salim", "pass1")
            .then( (u) => {
                localStorage.setItem("admin-user", u.token);
            })
            .catch( (e) => alert("Feil: " + e))
    };

    const showToken = () => {
        const u = localStorage.getItem("admin-user");
        alert(u);
    }


    return (
        <nav>
          <ul>
            <li>
                <a href="" onClick={handleLogin}>Admin login</a>
            </li>
            
            <li><a href="#" onClick={showToken}>Show token</a></li>
            <li><a href="/petter">Petters side</a></li>
            <li><a href="/salim">Salims side</a></li>
            <li><a href="/sigbjorn">Sigbjørns side</a></li>
          </ul>
        </nav>  
    )
}