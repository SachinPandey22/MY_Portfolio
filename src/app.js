import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import GitHubLookup from './components/GitHubLookup';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container main-content">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <GitHubLookup />
      <Footer />
    </>
  );
}

export default App;
