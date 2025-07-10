import React from 'react';
import profile from '../photos/My_Image.jpeg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={profile} alt="Sachin Pandey" className="profile-pic" />
      </div>
      <div className="about-text">
        <h2 className="section-heading">About Me</h2>
        <p>
          Hi! I’m Sachin Pandey — a Computer Science student at Texas State University, with a focus on software engineering and a minor in data analytics...
        </p>
      </div>
    </section>
  );
}

export default About;
