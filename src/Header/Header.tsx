//import {Button} from "@dnb/eufemia";
import { Button, Icon } from '@dnb/eufemia/components'
import { H1, P, Link } from '@dnb/eufemia/elements'
//import { hamburger as hamburgerIcon } from '@dnb/eufemia/icons/secondary_icons'

function Header(props: any) {


    return (

        <div className="App-header">
            <Button text="Basic Button" />
            <Button
                variant="secondary"
                text="Secondary Button"
                icon="chevron_right_medium"
                size="large"
            />
            <Button
                icon="chevron_right"
                icon_size="medium"
                size="large"
            />
            <p>I'm not Eufemia, true</p>
            <P>I'm not Eufemia, false</P>
            <div id="app" className="dnb-core-style">
                <h1 className="dnb-h--xx-large">I have an Eufemia Style</h1>
                <p className="dnb-p">👉 Me as well</p>
            </div>
            <div className="dnb-core-style">
            
                <header>
                    <h1>{props.appname}</h1>
                </header>

            </div>            
        </div>
    );
}

export default Header;