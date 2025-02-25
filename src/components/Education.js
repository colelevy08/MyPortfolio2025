// src/components/Education.js
import React from 'react';
import '../App.css';

const Education = ({ education }) => {
  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.school}</h3>
          <p><strong>Studies:</strong> {edu.studies}</p>
          <p><strong>Date:</strong> {edu.date}</p>
          <p><strong>Description:</strong> {edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
