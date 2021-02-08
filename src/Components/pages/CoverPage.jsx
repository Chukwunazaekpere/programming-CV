import "../styles/CoverPage.css";
import { Link } from "react-router-dom";


const CoverPage = (props) => {
    return (
        <div className="coverpage">
            <section className="content">
                <h2 className="animate__animated animate__heartBeat">This is Chukwunazaekperes' Netlified CV.</h2>

                <Link to="/cv-details" className="exp__btn">
                    CV details
                </Link>
            </section>
        </div>
    );
}

export default CoverPage;