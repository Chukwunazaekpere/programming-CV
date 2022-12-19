import "../styles/Stack.css";
import { a } from "react-router-dom"
const PythonHackerRankCert = require("../image/Python-HackerRank-Cert.png")

const Cert2 = (props) => {
    // const test = [
    //     HackerRank: 
    // ]
    return (
        <div style={{flexDirection: "column",}} className="stack__info mt-3">
            <h2 className="pt-5">Assessments (2)</h2>
            <h5>Credential ID: E2613606C4A3</h5>
            <section className="">
                <span>
                    <img src={PythonHackerRankCert} alt="" />
                    <hr />
                    <a target={"_blank"} style={{cursor: "pointer", fontSize: "19px"}} href="https://www.hackerrank.com/certificates/iframe/e2613606c4a3">Credential Link</a>
                    <p style={{fontSize: "20px", color: "cornsilk"}}>It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes.</p>
                </span>
            </section>
        </div>
    );
}

export default Cert2;