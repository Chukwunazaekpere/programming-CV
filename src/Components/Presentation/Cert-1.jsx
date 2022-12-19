import "../styles/Stack.css";
import { a } from "react-router-dom"
const JSIntermediateCert = require("../image/JS-intermediate.png")

const Cert1 = (props) => {
    // const test = [
    //     HackerRank: 
    // ]
    return (
        <div style={{flexDirection: "column",}} className="stack__info mt-3">
            <h2 className="pt-5">Assessments (1)</h2>
            <h5>Credential ID: 693887B70F21</h5>
            <section className="">
                <span>
                    <img src={JSIntermediateCert} alt="" />
                    <hr />
                    <a target={"_blank"} style={{cursor: "pointer", fontSize: "19px"}} href="https://www.hackerrank.com/certificates/iframe/693887b70f21">Credential Link</a>
                    <p style={{fontSize: "20px", color: "cornsilk"}}>JavaScript (Intermediate) It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.</p>
                </span>
            </section>
        </div>
    );
}

export default Cert1;