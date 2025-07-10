import React, { useEffect, useState } from 'react';

function Header() {
  const [text, setText] = useState('');
  const fullText = "Saachin Pandey";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  const handleToggle = () => setIsDark(!isDark);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="site-title">{text}</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={handleToggle} className="btn">Toggle Dark Mode</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
