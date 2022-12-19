import "../styles/CoverPage.css";
import { Link } from "react-router-dom";


const CoverPage = (props) => {
    return (
        <div className="coverpage">
            <section className="content">
                <h2 className="animate__animated animate__heartBeat">This is Chukwunazaekperes' Portfolio.</h2>

                <Link to="/cv-details" className="exp__btn px-2">
                    Explore
                </Link>
                <p style={{color: "tomato", fontWeight: "bold"}} className="pt-2">Though not extensive, this portfolio just gives a brief of my experience.</p>
            </section>
        </div>
    );
}

export default CoverPage;