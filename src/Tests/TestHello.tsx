import React from "react";
import RestClient from '../RestClient';

export default function TestHello() {

    let [message, setMessage] = React.useState([]);

    const messageFromServer = () => {
        RestClient.helloWorld("Petter", sessionStorage.getItem("admin-token"))
            .then( 
                message => setMessage(message))
            .catch(err => alert(err))
    }

    return (
        <div>
            <h1>A warm general welcom</h1>
            This is a test page
            <hr />
            Message from server: {messageFromServer}
        </div>
    )
}