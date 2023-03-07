import React from "react";

const Experience = () => {
    return (
        <div className="experience">
            <h1 className="heading__primary">Certificates and Education</h1>
            <div className="experience__container">
                <div className="experience__item">
                    <h3 className="heading__secondary">Certificates</h3>
                    <div>
                        <ul className="experience__list">
                            <li>Modern React with Redux</li>
                            <li>Complete NodeJs Developed in 2022(Grapql, MongoDB, + more)</li>
                            <li>Mastering TypeScript-2022 edition</li>
                            <li>The Ultimate MySQL Bootcamp: Go from SQL beginner to Expert</li>
                            <li>React, NodeJS, Express & MongoDB- The Mern Fullstack Guide</li>
                            <li>Javascript Unit Testing-The practical Guide</li>
                            <li>Clean Code</li>
                            <li>DOM 2022 Build Dynamic Websites Javascript Part1 & Part2</li>
                            <li>React Native- The Practical Guide[2022]</li>
                            <li>Complete C# Masterclass</li>
                        </ul>
                    </div>
                </div>
                <div className="experience__item">
                <h3 className="heading__secondary">Education/ Academies</h3>
                    <div className="experience__educationBox">
                        <div>
                            <h4 className="heading__fourth">Baltic Institute of Technology(BIT) </h4>
                            <div>
                                <ul className="experience__subjects">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 className="heading__fourth">Full Stack academy at Present Connection</h4>
                            <div>
                                <ul className="experience__subjects">
                                    <li>React</li>
                                    <li>.NET</li>
                                    <li>C#</li>
                                    <li>SQL</li>
                                    <li>Entity Framework</li>
                                    <li>AspNetCore</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;