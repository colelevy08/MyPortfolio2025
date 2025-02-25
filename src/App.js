import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './components/Data'; // Importing the data from Data.js
import Education from './components/Education'; // Importing Education component
import WorkHistory from './components/WorkHistory'; // Importing WorkHistory component
import HeaderNavbar from './components/HeaderNavbar'; // Importing HeaderNavbar component
import Timeline from './components/Timeline'; // Importing Timeline component
import Homepage from './components/Homepage'; // Importing Homepage component

function App() {
  return (
    <Router>
      <div>
        {/* Render the Navbar only once */}
        <HeaderNavbar /> {/* Rendering the Navbar */}

        <main>
          {/* Routes */}
          <Routes>
            {/* Route for Education component */}
            <Route 
              path="/Education" 
              element={<Education education={Data.education} />} 
            />
            {/* Route for WorkHistory component */}
            <Route 
              path="/WorkHistory" 
              element={<WorkHistory workHistory={Data.workHistory} />} 
            />
            {/* Route for Timeline component */}
            <Route 
              path="/Timeline" 
              element={<Timeline education={Data.education} experience={Data.workHistory} />} 
            />
            {/* Default route for Home */}
            <Route 
              path="/" 
              element={<Homepage />} 
            />
          </Routes> {/* <-- This closing tag was missing */}
        </main>
      </div>
    </Router>
  );
}

export default App;
