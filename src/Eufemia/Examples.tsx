import {Button} from "@dnb/eufemia/components";

export default function EufemiaExamples() {
    return (
        <div>
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