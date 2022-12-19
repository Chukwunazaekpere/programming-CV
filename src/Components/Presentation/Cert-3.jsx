import "../styles/Stack.css";
import { a } from "react-router-dom"
const JSBasic = require("../image/JSBasic.png")

const Cert3 = (props) => {
    // const test = [
    //     HackerRank: 
    // ]
    return (
        <div style={{flexDirection: "column",}} className="stack__info mt-3">
            <h2 className="pt-5">Assessments (3)</h2>
            <h5>Credential ID: 0766B3A6820A</h5>
            <section className="">
                <span>
                    <img src={JSBasic} alt="" />
                    <hr />
                    <a target={"_blank"} style={{cursor: "pointer", fontSize: "19px"}} href="https://www.hackerrank.com/certificates/iframe/0766b3a6820a">Credential Link</a>
                    <p style={{fontSize: "20px", color: "cornsilk"}}>It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.</p>
                </span>
            </section>
        </div>
    );
}

export default Cert3;