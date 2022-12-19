// import "../styles/Experience1.css";
import { Link } from "react-router-dom"
import { titleCase } from "../../utils/helper"


function Experience1(props) {
    return (
        <div className="personal__info">
            <h2 style={{fontWeight: "bold"}} className="info__title py-2 text text-danger">Projects in Production (1):</h2>
            <span>
                <h3>HotelPro:</h3>
                <p style={{fontWeight:"bold", fontSize: "25px"}}>
                    HotelPro is a PMS (property management system) in production, being used by <br />
                    nine hotels (as at December 15th 2022). <br /> I programmed this system for ChannelPro as a fullstack developer, with the MERN stack: <br />
                    <hr />
                    <li>
                        <b>MongoDB</b> <br />
                    </li>
                    <li>
                        <b>Express</b>, <br />
                    </li>
                    <li>
                        <b>React (Typescript)</b>, <br />
                    </li>
                    <li>
                        <b>NodeJS (Typescript)</b>, <br />
                    </li>
                    <hr />
                    <b>Redux was as we used at the frontend for state management.</b>,
                    This system is where I gathered most of my experience as a backend and frontend developer  
                    and also getting acquainted to server optimisation and operations. It's an ERP app designed to manage
                    the day to day operations of a hotel; from reservations, check-ins, restaurant, bar, financial-transactions
                    forecasts, trial-balance etc.
                </p>
                <p>
                    I'll provide you a demo link to the HotelPro demo web-app <br />
                    <a href="http://hotelpro-demo.netlify.app/">HotelPro Demo</a> <br />
                    {/* username: ChannelPro <br />
                    password: ChannelPro@2020 */}
                </p>
            </span>
        </div>
    );
}

export default Experience1;