import "../styles/CVStyles.css";

function CVPage(props) {
    return (
        <div>
            <section className="personal__info">
                <h3>Personal Info</h3>
            </section>
            <section className="skills">
                <ul>
                    <li className="prog__lang">
                        <h3>Languages</h3>

                    </li >
                    <li className="frame__lib">

                    </li>
                    <li className="envs">

                    </li>
                    <li className="dbs">

                    </li>
                    <li className="OS">

                    </li>
                </ul>
            </section>
            <section>
                <h3>Education</h3>
            </section>
        </div>
    );
}

export default CVPage;