import React from "react";
import RestClient from "../RestClient";
import './Welcome.css';
import { Table } from '@dnb/eufemia/elements'

export default function Welcome() {
    let [ summary, setSummary ] = React.useState([]);

    React.useEffect( () => {
        //console.log("Hei" + Date())
        RestClient.getSummary()
            .then( s => setSummary(s))
            .catch( err => console.log(err))

    }, []) // TODO: Why does the service loop over and over again without the square brackets???

    

    return (
        <div className="summary">            
            <h1>Summary</h1>
            
            <Table className="dnb-table">
                <thead>
                    <tr className="dnb-table__tr">
                        <th className="dnb-table__th">
                            Summary description
                        </th>
                        <th className="dnb-table__th">
                            Count
                        </th>                        
                    </tr>                    
                </thead>

                <tbody>
                    {summary.map(                        
                        (su: any, i: number) =>                         
                            <TableRow key={i} description={su.key} value={su.value} />                       
                    )}
                </tbody>
            </Table>

        </div>

    )
    

    function TableRow(props: any) {
        var format: string = ( (props.key % 2 == 0) ? "dnb-table__tr--odd" : "dnb-table__tr--even")
        return (
            <tr key={props.i} className={`dnb-table__tr ${format}`}>
                <td className="dnb-table__td">{props.description}</td>
                <td className="dnb-table__td">{props.value}</td>
            </tr> 
        )
    }

}