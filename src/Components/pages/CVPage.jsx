import "../styles/CVStyles.css";


import PersonalInfo from "../Presentation/PersonalInfo";
import EducationalInfo from "../Presentation/EducationalInfo";
import StackInfo from "../Presentation/StackInfo";
import Summary from "../Presentation/Summary";

import {useState} from "react";
import Experiences from "../Presentation/Experience";
import DevTests from "../Presentation/Tests";

const CVPage = (props) => {
    const display_list = ["personalInfo", "summary", "educationalInfo", "stackInfo", "tests", "experience",  ]
    const [navigation, setNavigation] = useState({
        index: 0,
        location: 'personalInfo'
    })

    let display_index = navigation['index']
    const handleNavigationChange = (char) => {
        if(char === "+"){
            console.log("\n\t display_index: ", display_index)
            display_index++
            setNavigation({
                location: display_list[display_index],
                index: display_index
            })
        }else{
            display_index--
            setNavigation({
                location: display_list[display_index],
                index: display_index
            })
        }

    }
  
    return (
        <div className="cv__details">
            <section className="info__components">
                {
                    navigation['location'] === "tests" ?
                    <DevTests /> :
                    navigation['location'] === "experience" ?
                    <Experiences /> :
                    navigation['location'] === "educationalInfo" ?
                    <EducationalInfo /> :
                    navigation['location'] === "summary" ?
                    <Summary /> :
                    navigation['location'] === "stackInfo" ?
                    <StackInfo /> :
                    <PersonalInfo />
                }
            </section>

            <section className="nav__btn">
                <button style={{display: navigation["location"] === "personalInfo" ? "none" : undefined} }
                    className="left__btn"
                    onClick={() => handleNavigationChange('-')}>
                    {`<`}
                </button> 
            
                <button style={{display: navigation["location"] === "experience" ? "none" : undefined}} 
                className="right__btn" 
                onClick={() => handleNavigationChange('+')}>{`>`}</button> 
            </section>
        </div>
    );
}

export default CVPage;