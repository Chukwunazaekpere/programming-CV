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
            <h2 className="info__title">Personal - Info:</h2>
            {
                Object.keys(contacts).map((contact, index) => (
                    <span className="d-flex align-items-center py-2" key={contact}>
                        <h3 style={{fontWeight: "bold"}} className="px-2 text-danger">{titleCase(contact)}:</h3>        
                        {
                            index === 0 ?
                            <h4 style={{fontWeight: "bold"}} className="text-success font-bold pt-1">{contacts[contact]}</h4>        
                            :
                            <h5 className="pt-1">{contacts[contact]}</h5>                
                        }
                    </span>
                ))
            }
        </div>
    );
}

export default PersonalInfo;