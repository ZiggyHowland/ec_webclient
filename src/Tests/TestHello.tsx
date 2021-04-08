import React from "react";
import RestClient from '../RestClient';

export default function TestHello() {
    let [helloMessage, setMessage] = React.useState("Hello unknown");
    // Må se på denne syntaxen

    React.useEffect( () => {
        var token = sessionStorage.getItem("admin-token");
        //alert(token);
        RestClient.helloWorld("Salim", token)
            .then(                                 
                result => {
                    alert(result)               
            })
            .catch(
                e => alert(e)
            )
    })

    return (
        <div>
            <h1>A warm general welcome</h1>
            This is a test page
            <hr />
            Message from server: {helloMessage}
        </div>
    )
}