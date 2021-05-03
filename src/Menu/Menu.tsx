import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";
import { Anchor } from '@dnb/eufemia/elements'


export default function Menu() {


    const isLoggedIn =  (sessionStorage.getItem("admin-token") != null )
    return (
        <React.Fragment>
          <nav>
            <ul>
              <li><Anchor href="/">Home</Anchor></li>            
              <li><Anchor href="/environments">Environments</Anchor></li>            
              <li><Anchor href="/configurations">Configurations</Anchor></li>
              <li><Anchor href="/users">Users</Anchor></li>
              <li><Anchor href="/login">{isLoggedIn ? "Log out" : "Log in"}</Anchor></li>
              <li><Anchor href="/about">About</Anchor></li>            
              <li><Anchor href="/resources">Resources</Anchor></li>            
            </ul>
            <span>Server name: <b>{process.env.REACT_APP_ENVIRONMENT}</b></span><br/>
            <span>RestAPI: <b>{process.env.REACT_APP_REST_ENDPOINT}</b></span>
          </nav>  

          

          

        </React.Fragment>
    )
}