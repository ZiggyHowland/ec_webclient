import React from "react";
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
        <div>
            <h1>Hi from Salim/</h1>
            This is Salims page

            <h2>All users:</h2>
            <ul>
                {users.map(
                    (user: any, i:number ) =>
                        <li key={i}>
                            <div className="envKey">{`Key = ${user.id}`}</div>
                            <div className="envValue">{`Value = ${user.username}, ${user.password}, ${user.user_type}, ${user.token}`}</div>
                             {/*`Key = ${user.id} : Value = ${user.username}, ${user.password}, ${user.user_type}, ${user.token} ` */}
                        </li>
                )}
            </ul>
        </div>
    )
}
