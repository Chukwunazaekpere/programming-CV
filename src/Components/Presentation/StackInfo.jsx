import "../styles/Stack.css";


const StackInfo = (props) => {
    return (
        <div className="stack__info">
            <h3 className="info__title">Stack - Info</h3>
            
            <section className="stack__content">
                <ul>
                    <li className="prog__lang">
                        <h4>Languages:</h4>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                        </ul>
                    </li >
                    <li className="frame__lib">
                        <h4>Framework/Libraries</h4>
                        <ul>
                            <li>Pyhthon's data - science libraries</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>React - Native</li>
                            <li>Mocha</li>
                            <li>Express.JS</li>
                            <li>Redux.JS</li>
                        </ul>

                    </li>
                    <li className="envs">
                        <h4>Environments:</h4>
                        <ul>
                            <li>Node.JS</li>
                            <li>Github</li>
                        </ul>

                    </li>
                    <li className="dbs">
                        <h4>Database:</h4>
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                        </ul>

                    </li>
                    <li className="OS">
                        <h4>OS:</h4>
                        <ul>
                            <li>Linux (Ubuntu)</li>
                            <li>Windows</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default StackInfo;