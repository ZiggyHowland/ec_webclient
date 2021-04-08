import {Button} from "@dnb/eufemia/components";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>This is our welcome page. We will add summary of environments, configurations and users/admins here.</p>
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
        </div>
    )
    
}