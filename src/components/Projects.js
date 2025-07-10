import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="project-list">
        <div className="card">
          <h3>1. Research on Muscles Using Different Wearable Sensors</h3>
          <p>Used IMU and EMG sensor data to analyze muscle activity during tasks...</p>
        </div>
        <div className="card">
          <h3>2. The Teacher Reuse Website Redesign</h3>
          <p>Redesigned the UI for <a href="http://www.theteacherreuse.org" target="_blank" rel="noreferrer">theteacherreuse.org</a>, improving user experience...</p>
        </div>
        <div className="card">
          <h3>3. Personal Portfolio Website (this site)</h3>
          <p>Built with HTML, CSS, and JavaScript to showcase my projects...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
