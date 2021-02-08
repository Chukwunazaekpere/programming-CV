import "../styles/CVStyles.css";
import PersonalInfo from "../Presentation/PersonalInfo";
import EducationalInfo from "../Presentation/EducationalInfo";
import StackInfo from "../Presentation/StackInfo";

import {useState} from "react";

const CVPage = (props) => {
    const display_list = ["personalInfo", "stackInfo", "educationalInfo"]
    const [navigation, setNavigation] = useState({
        index: 0,
        location: 'personalInfo'
    })

    let display_index = navigation['index']
    const handleNavigationChange = (char) => {
        if(char === "+"){
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
                    navigation['location'] === "educationalInfo" ?
                    <EducationalInfo /> :
                    navigation['location'] === "stackInfo" ?
                    <StackInfo /> :
                    <PersonalInfo />
                }
            </section>

            <section className="nav__btn">
                <button disabled={navigation['location'] === "personalInfo" ?  true : false }
                    className="left__btn"
                    onClick={() => handleNavigationChange('-')}>
                    {`<`}
                </button> 
            
                <button disabled={navigation['location'] === "educationalInfo" ?  true : false } 
                className="right__btn" 
                onClick={() => handleNavigationChange('+')}>{`>`}</button> 
            </section>
        </div>
    );
}

export default CVPage;