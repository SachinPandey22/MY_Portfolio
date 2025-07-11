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
          Hi! I’m Sachin Pandey — a Computer Science student at Texas State University, with a focus on software engineering and a minor in data analytics. I’m passionate about building things that work, solve problems, and make an impact.<br></br> Right now, I’m sharpening my skills in Java and Python, diving deeper into Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), and learning how to write clean, efficient, and scalable code. I’m also exploring full-stack web development with the MERN stack, and picking up essential tools like Git, GitKraken, and APIs along the way.<br></br> I’m currently preparing for a software engineering internship in summer 2026, while also building personal projects to improve my problem-solving and development skills. This portfolio is where I share those projects, my research experiences, and everything I’ve been learning as I grow in the tech world.<br></br> This portfolio showcases my projects, research, and technical skills as I continue to learn and grow in the tech industry.
        </p>
      </div>
    </section>
  );
}

export default About;
