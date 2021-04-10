import sps from './sps.png';
import './Welcome.css';

export default function Welcome() {
    return (
        <div className="welcomeDiv">
            <h1>Group SPS</h1>
            <p>
                Salim, Petter and Sigbjørn
            </p>
            <img src={sps} className="sps" />
            <h2>Summary</h2>
            
        </div>
    )
    
}