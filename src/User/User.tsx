//import { useLocation } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import './Users.css';
import RestClient from "../RestClient";
import Configuration from "../Configuration/Configuration";
import ConfigurationBox from "../Configuration/ConfigurationBox";

export default function User() {
    let [user, SetUser] = React.useState(null);

    let { id } : any = useParams();


    React.useEffect( () => {
        RestClient.getUserById(id)
        .then(e => SetUser(e))
        .catch(err => alert(err))
        
    }, [])

    if (user) {
        return (
            <React.Fragment>
                <UserDetails {...user}/>
            
            </React.Fragment>
        )
    } else return <div>test</div>;

    function UserDetails(user : any) {
        return (
            <div>
                <h1>{`${user.id} ${user.username} ${user.password} ${user.user_type}`}</h1> 
                <div>{JSON.stringify(user)}</div>
            </div>
        )
    }

 


}