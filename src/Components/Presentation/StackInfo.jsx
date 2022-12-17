import "../styles/Stack.css";


const StackInfo = (props) => {
    return (
        <div className="stack__info">
            <h2 className="info__title">Dev - Stack</h2>
            
            <section className="stack__content">
                <ul>
                    <li className="prog__lang">
                        <h4 style={{fontWeight: "bold", color: "#ff00ff"}}>Languages:</h4>
                        <ul>
                            <li>Python</li>
                            <li>JavaScript (Typescript)</li>
                        </ul>
                    </li >
                    <hr />
                    <li className="frame__lib">
                        <h4 style={{fontWeight: "bold", color: "#ff00ff"}}>Framework/Libraries</h4>
                        <ul>
                            <li>Django</li>
                            <li>React</li>
                            <li>React - Native</li>
                            <li>Flask</li>
                            <li>ExpressJS</li>
                            <li>ReduxJS</li>
                        </ul>

                    </li>
                    <hr />
                    <li className="envs">
                        <h4 style={{fontWeight: "bold", color: "#ff00ff"}}>Environments:</h4>
                        <ul>
                            <li>NodeJS</li>
                            <li>Github</li>
                        </ul>

                    </li>
                    <hr />
                    <li className="dbs">
                        <h4 style={{fontWeight: "bold", color: "#ff00ff"}}>Database:</h4>
                        <ul>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                        </ul>

                    </li>
                    <hr />
                    <li className="OS">
                        <h4 style={{fontWeight: "bold", color: "#ff00ff"}}>OS:</h4>
                        <ul>
                            <li>Linux (Ubuntu)</li>
                            <li>Windows</li>
                        </ul>
                    </li>
                    <hr />
                </ul>
            </section>
        </div>
    );
}

export default StackInfo;