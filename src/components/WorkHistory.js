// src/components/WorkHistory.js
import React from 'react';
import '../App.css';


const WorkHistory = ({ workHistory }) => {
  return (
    <div>
      <h1>Work History</h1>
      {workHistory.map((job, index) => (
        <div key={index} className="job">
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p>{job.date}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
