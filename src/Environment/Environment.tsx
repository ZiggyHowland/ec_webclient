//import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Environment.css';

export default function Environment() {

    //const search = useLocation().search;
    //const id= new URLSearchParams(search).get('id');

    let { id } : any = useParams();
    return (
    <div>
        {id}
        <h1>test</h1>
    </div>
    );
}