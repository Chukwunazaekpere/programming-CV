// import "../styles/Experience2.css";
import { Link } from "react-router-dom"
import { titleCase } from "../../utils/helper"


function Experience2(props) {
    return (
        <div className="personal__info">
            <h2 style={{fontWeight: "bold"}} className="info__title py-2 text text-danger">Projects in Production (2):</h2>
            <span>
                <h3>TurboErrands</h3>
                <p style={{fontWeight:"bold", fontSize: "25px"}}>
                    TurboErrands is an admin application for a logistics company built with 
                    Django (Python's web-framework). A mobile-app built with react-native was also 
                    written by me. The application was designed to:
                    <li>Take orders from customers</li>
                    <li>Issue a tracking number for all orders not having the "completed" status.</li>
                    <li>Calculate cost for dispatching order</li>
                    <li>Give summary for transaction details</li>
                </p>
            </span>
            <span>
                Other Projects include (but not limited to):
                <li>Smart Ride (NodeJS - team project)</li>
                <li>Digiext (Flask & React-Native)</li>
            </span>
        </div>
    );
}

export default Experience2;