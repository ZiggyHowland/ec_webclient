import React from "react";
import User from "./Users";
import RestClient from "../RestClient";
import './Users.css';

export default function Users() {
    let [users, SetUsers] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllUsers()
        .then(users => SetUsers(users))
        .catch(err => alert(err))
    }, [])



    return (
        <div id="envBackground">
            <h1>Users</h1>

            <h2>All users:</h2>
            <ul>
                {users.map(
                    (user: any, i:number ) =>
                        <li key={i}>
                            {/* <div className="envKey">{`Key = ${user.id}`}  */}
                            <a id="envKey" href={`/user/${user.id}`}>{user.id}</a>                            <div className="envValue">{`Value = ${user.id}, ${user.username}, ${user.password}, ${user.user_type}`}</div>
                             {/* </div> */}
                             <div className="envValue">{`Value = ${user.id}, ${user.description}`}</div>
                             {/*`Key = ${user.id} : Value = ${user.short_name}, ${user.description}` */}
                        </li>
                )}
            </ul>
          {/*<User/>*/}  
        </div>
    )
}
