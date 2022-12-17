import "../styles/Stack.css";


const DevTests = (props) => {
    // const test = [
    //     HackerRank: 
    // ]
    return (
        <div className="stack__info">
            <h2 className="info__title">Dev - Stack</h2>
            
            <section className="stack__content">
                <ul>
                    <li className="prog__lang">
                        <h3 style={{fontWeight: "bold", color: "#ff00ff"}}>HackerRank:</h3>
                        <ul>
                            <li>Python (Basic)</li>
                        </ul>
                    </li >
                    <hr />
                    <li className="prog__lang">
                        <h3 style={{fontWeight: "bold", color: "#ff00ff"}}>Turing:</h3>
                        <ul>
                            <li>I've also been successful in twelve MCQ's of turing tests</li>
                        </ul>
                    </li >
                </ul>
            </section>
        </div>
    );
}

export default DevTests;