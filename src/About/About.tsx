import sps from './sps.png';
import './About.css';

export default function About() {
    return (

        <div>
            <h1>About S3P</h1>
            <p>Learning to code is like learning a new language!</p>
            <p>
                Salim, Petter, Sigbjørn and Svetlana
            </p>
            <img src={sps} className="sps" />
        </div>

    )}