import { Anchor } from '@dnb/eufemia/elements'

export default function() {
    return (
        <div>
            <h1>Resources</h1>
                <ul>                
                    <li><Anchor href="http://localhost:8111/swagger-ui/" target="_blank">Backend API (Swagger)</Anchor></li>
                    <li><Anchor href="http://localhost:8111/h2-console" target="_blank">H2 Console</Anchor></li>
                    <li><Anchor href="https://github.com/Toendel96/ec_webserver" target="_blank">GitHub: Backend</Anchor></li>
                    <li><Anchor href="https://github.com/ZiggyHowland/ec_webclient" target="_blank">GitHub: Frontend</Anchor></li>
                    
                </ul>

            <h1>Test pages</h1>
                <ul>            
                    <li><Anchor href="/hello">Hello World (token)</Anchor></li>
                    <li><Anchor href="/eufemia/examples">Eufemia examples</Anchor></li>            
                </ul>
            
        </div>

    )

}
