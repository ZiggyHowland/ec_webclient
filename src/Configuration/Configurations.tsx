import RestClient from "../RestClient";
import ConfigurationBox from "./ConfigurationBox";
import { Anchor } from '@dnb/eufemia/elements'
import { Icon } from "@dnb/eufemia/components";
import { add_circled, arrow_right } from '@dnb/eufemia/icons'
import React, { createRef } from 'react';


export default function Configurations() {
    let [configs, setConfigs] = React.useState([]);
    const thisElement = createRef<HTMLInputElement>();
    var timestamp: string;

    React.useEffect( () => {
        RestClient.getAllConfigurations()
            .then(configs => setConfigs(configs));
    }, [])
    

    const filterList = () => {
        if (thisElement.current) {                                                
           timestamp = thisElement.current.value;
           RestClient.getAllConfigurationsFilteredByDate(timestamp)
                .then(configs => setConfigs(configs));            
        }
    }
    // Kjøring av setConfigs-funksjonen oppdaterer komponenten???



    return (
        <div>
            <h2>All configurations:</h2>

            <p>
                <div className="listHeader">
                    <Anchor href="/configurations/add">
                        <Icon icon={add_circled} /> Add Configuration
                    </Anchor>

                    <span className="configFilter">
                        <ConfigFilter />
                    </span>
                </div>
            </p>

            {configs.map(
                ( config: any, i: number ) =>
                    <ConfigurationBox key={i} {...config} />         
            )}
        </div>
    )


    function ConfigFilter() {
        return (
            <React.Fragment>
                <label>Filter: </label>                
                <input ref={thisElement} id="filter" name="filter" type="text" value={timestamp} />
                <button className="dnb-anchor" onClick={filterList} >
                    <Icon icon={arrow_right} />                            
                </button>                
            </React.Fragment>
        )
    }
}
