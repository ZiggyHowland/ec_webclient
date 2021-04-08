import React from "react";
import RestClient from '../RestClient';

export default function TestHello() {
    let [message, setMessage] = React.useState([]);

    React.useEffect( () => {
        var token = sessionStorage.getItem("admin-token");
        alert(token);
        RestClient.helloWorld("Petter", token)
            .then(                 
                message => setMessage(message)             
            )
    }, [])

    return (
        <div>
            <h1>A warm general welcome</h1>
            This is a test page
            <hr />
            Message from server: {message}
        </div>
    )
}