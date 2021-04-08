import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";

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
              <li> Hei</li>
            <li><a href="/">Home</a></li>   
            <li><a href="/hello">Hello World</a></li>         
            <li><a href="/petter">Petters side</a></li>
            <li><a href="/salim">Salims side</a></li>
            <li><a href="/sigbjorn">Sigbjørns side</a></li>
            <hr />
            <li><a href="" onClick={login}>Auto login</a></li>
            <li><a href="" onClick={showToken}>Show token</a></li>
            <li><a href="" onClick={logout}>Auto logout</a></li>
          </ul>
        </nav>  
    )
}