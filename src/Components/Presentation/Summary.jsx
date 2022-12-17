import "../styles/PersonalInfo.css";
import { titleCase } from "../../utils/helper"


function PersonalInfo(props) {
    const contacts = {
        fullname: "CHUKWUNAZAEKPERE OBIOMA",
        phone: "(+234)0-8169-54-7035",
        email: "ceo.naza.tech@gmail.com",
        github: "https://github.com/Chukwunazaekpere",
        linkedIn: "https://www.linkedin.com/in/chukwunazaekpere-obioma/",
    }
    return (
        <div className="personal__info">
            <h2 style={{fontWeight: "bold"}} className="info__title py-2 text text-danger">Summary:</h2>
           <p style={{fontWeight:"bold", fontSize: "25px"}}>
                I’m a Full – stack and MERN - stack developer with over three years of <br />
                programming experience; working as both a mobile and web developer, <br />
                with experience setting-up NGINX server and other Dev-Ops operations. <br />
                I’ve got an app on google playstore, having its backend and all other <br />
                architectures solely written by me. I’ve succeded in Turing’s tech-stack <br />
                test, made some tech publications as well on Dev-community and <br />
                medium; with some claimed badges on stackoverflow.
           </p>
        </div>
    );
}

export default PersonalInfo;