import React from "react";
import backEndPng from "../../assets/images/BackEndPng.png";
import FrontEndHomepage from "../../assets/images/FrondEndHomepage.png";
import FullBackEndPng from "../../assets/images/FullBackEndPng.png";
import FullFrontEnd from "../../assets/images/FullFrontEnd.png";
import githubLogo from "../../assets/images/github-mark-white.png";

const Portfolio = () => {
    return(
        <div className="portfolio">
            <h1 className="heading__primary">Strongest projects</h1>
            <div className="portfolio__container">
                <div className="portfolio__github">
                    <h2 className="heading__secondary">Github <img className="portfolio__github--image" src={githubLogo} alt="github logo"/></h2>
                    <a className="portfolio__github--link" href="https://github.com/Darinic" target="_blank" rel="noreferrer">Link</a>
                </div>
            </div>
            <div className="portfolio__projects">
                <div className="portfolio__frontEnd">
                    <h2 className="heading__secondary">Strongest Front-End Project</h2>
                    <a href={FullFrontEnd} target="_blank" rel="noreferrer">
                    <img src={FrontEndHomepage} alt="project" />
                    </a>
                    <ul className="portfolio__list">
                        <li>React.js</li>
                        <li>Context</li>
                        <li>React Router</li>
                        <li>React Hooks</li>
                        <li>Pagination</li>
                        <li>HOC's</li>
                        <li>SASS</li>
                    </ul>
                    <a className="portfolio__link" href="https://github.com/Darinic/FrontEndPC" target="_blank" rel="noreferrer">Link</a>
                </div>
                <div className="portfolio__backEnd">
                    <h2 className="heading__secondary">Strongest Back-End Project</h2>
                    <a href={FullBackEndPng} target="_blank" rel="noreferrer">
                    <img src={backEndPng} alt="project" />
                    </a>
                    <ul className="portfolio__list">
                        <li>.NET</li>
                        <li>AspNetCore</li>
                        <li>Entity Framework</li>
                        <li>Clean Architecture</li>
                        <li>Middleware</li>
                        <li>Identity</li>
                        <li>Tests</li>
                    </ul>
                    <a className="portfolio__link" href="https://github.com/Darinic/BackEndPC/tree/master" target="_blank" rel="noreferrer">Link</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;