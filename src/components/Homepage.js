import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                <h3>Tehcnical and Software</h3>
                    <li>Python</li> 
                    <li>Flask</li>
                    <li>SQL</li>
                    <li>JavaScript </li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Github</li>
                    <li>VSCode</li>
                    <li>Full Stack Development</li>
                <h3> Communication and Media </h3>
                    <li>Macintosh Applications, Software, and CLI</li>
                    <li>Google Applications and Software</li>
                    <li>Microsoft Office</li>
                <h3> Languages </h3>
                    <li> English </li>
                    <li> Spanish </li>
                    <li> French </li>
                    <li> Mandarin </li>
            </ul>
        </div>
    );
};

const Homepage = () => {
    return (
        <div className="about-me">
            <h1>Summary</h1>
            <p>
                Communication professional with a Bachelor Degree in Communication from SUNY Geneseo, combining strong media literacy, interpersonal skills, and business communication with technical expertise. Experienced in customer support, technical troubleshooting, and organizational management. Skilled Software Developer with a background in designing and developing web applications using HTML, CSS, JavaScript, React, Node.js, Python, Flask, SQL, and more. Adept at full-stack development, web services, and database management, with a proven ability to bridge the gap between technology and effective communication to drive successful project outcomes.
            </p>
            <h2>GitHub Repositories</h2>
            <ul>
                <li><a href="https://github.com/colelevy08/my_portfolio" target="_blank" rel="noopener noreferrer">Solo Project - My Portfolio</a></li>
                <li><a href="https://github.com/colelevy08/EchoEcho" target="_blank" rel="noopener noreferrer">Flatiron School Phase 5 Solo Project - EchoEcho</a></li>
                <li><a href="https://github.com/rachelsteiner91/HappyTrails" target="_blank" rel="noopener noreferrer">Flatiron School Phase 4 Group Project - Happy Trails</a></li>
                <li><a href="https://github.com/YasmeenY/Expense-Tracker-Project" target="_blank" rel="noopener noreferrer">Flatiron School Phase 3 Group Project - Expense Tracker</a></li>
                <li><a href="https://github.com/colelevy08/Closet-Organizer" target="_blank" rel="noopener noreferrer">Flatiron School Phase 2 Group Project - Closet Organizer</a></li>
                <li><a href="https://github.com/ThisBackpackersLife/phase-1-group-project" target="_blank" rel="noopener noreferrer">Flatiron School Phase 1 Group Project - Corny Joke Generator</a></li>
            </ul>
            <Skills />
        </div>
    );
};

export default Homepage;