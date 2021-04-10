import RestClient from "../RestClient";
import ConfigurationBox from "./ConfigurationBox";
import React from 'react';
import { Anchor } from '@dnb/eufemia/elements'
import { Icon } from "@dnb/eufemia/components";
import { add_circled } from '@dnb/eufemia/icons'

export default function Configurations() {
    let [configs, setConfigs] = React.useState([]);

    React.useEffect( () => {
        RestClient.getAllConfigurations()
            .then(configs => setConfigs(configs));
    }, [])
    
    return (
        <div>
            <h2>All configurations:</h2>

            <p>
                <Anchor href="/configurations/add">
                    <Icon icon={add_circled} /> Edit Configuration
                </Anchor>
            </p>

            {configs.map(
                ( config: any, i: number ) =>
                    <ConfigurationBox key={i} {...config} />         
            )}
        </div>
    )
}
