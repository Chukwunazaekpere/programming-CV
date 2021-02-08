import React from 'react';

const EducationalInfo = (props) => {
    return (
        <section className="education">
            <h3 className="info__title">Educational - Info:</h3>
            <ul>
                <li>
                    <h4>First degree:</h4>
                    <p>School: Rivers State University</p>
                    <p>Qualification: B.Tech, Marine engineering</p>
                    <p>Date: 2013 - 2018</p>
                </li>
                <li>
                    <h4>National Youth Service - NYSC</h4>
                    <p>Date: 2019/2020</p>
                </li>
            </ul>
        </section>
    );
}

export default EducationalInfo;