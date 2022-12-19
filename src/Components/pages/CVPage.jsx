import "../styles/CVStyles.css";


import PersonalInfo from "../Presentation/PersonalInfo";
import EducationalInfo from "../Presentation/EducationalInfo";
import StackInfo from "../Presentation/StackInfo";
import Summary from "../Presentation/Summary";

import {useState} from "react";
import Experience1 from "../Presentation/Experience1";
import Experience2 from "../Presentation/Experience2";
import Cert1 from "../Presentation/Cert-1";
import Cert2 from "../Presentation/Cert-2";
import Cert3 from "../Presentation/Cert-3";

import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi"

const CVPage = (props) => {
    const display_list = ["personalInfo", "summary", "educationalInfo", "stackInfo", "cert1", "cert2", "cert3", "experience1", "experience2" ]
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
                    navigation['location'] === "cert1" ?
                    <Cert1 /> :
                    navigation['location'] === "cert2" ?
                    <Cert2 /> :
                    navigation['location'] === "cert3" ?
                    <Cert3 /> :
                    navigation['location'] === "experience1" ?
                    <Experience1 /> :
                    navigation['location'] === "experience2" ?
                    <Experience2 /> :
                    navigation['location'] === "educationalInfo" ?
                    <EducationalInfo /> :
                    navigation['location'] === "summary" ?
                    <Summary /> :
                    navigation['location'] === "stackInfo" ?
                    <StackInfo /> :
                    <PersonalInfo />
                }
            </section>

            <section style={{width: "100%", justifyContent: "space-between"}} className="d-flex">
                <button style={{display: navigation["location"] === "personalInfo" ? "none" : undefined} }
                    className="left__btn"
                    onClick={() => handleNavigationChange('-')}>
                <FiChevronsLeft />
                </button> 
            
                <button style={{display: navigation["location"] === "experience2" ? "none" : undefined}} 
                className="right__btn" 
                onClick={() => handleNavigationChange('+')}>
                    <FiChevronsRight />
                    
                </button> 
            </section>
        </div>
    );
}

export default CVPage;