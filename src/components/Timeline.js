import React from 'react';
import '../App.css';

const Timeline = ({ education, experience }) => {
    return (
        <div className="timeline">
            <h2>Education</h2>
            <ul>
                {education.map((edu, index) => (
                    <li key={index} className="timeline-item">
                        <h3>{edu.school}</h3> {/* Map to 'school' from Data.js */}
                        <p>{edu.studies}</p> {/* Map to 'studies' from Data.js */}
                        <span>{edu.date}</span> {/* Map to 'date' from Data.js */}
                        <p>{edu.description}</p> {/* Map to 'description' from Data.js */}
                    </li>
                ))}
            </ul>

            <h2>Experience</h2>
            <ul>
                {experience.map((exp, index) => (
                    <li key={index} className="timeline-item">
                        <h3>{exp.title} at {exp.company}</h3> {/* Map to 'title' and 'company' from Data.js */}
                        <span>{exp.date}</span> {/* Map to 'date' from Data.js */}
                        <p>{exp.description}</p> {/* Map to 'description' from Data.js */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
