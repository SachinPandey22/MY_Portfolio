import { useMemo, useState } from 'react';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import StackSection from './components/sections/StackSection';
import BootSequence from './components/terminal/BootSequence';
import ProjectModal from './components/terminal/ProjectModal';
import PromptFooter from './components/terminal/PromptFooter';
import TerminalNav from './components/terminal/TerminalNav';
import {
  affiliations,
  awards,
  education,
  experiences,
  hero,
  navItems,
  projects,
  techStack
} from './data/portfolioData';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds, bootComplete);

  const handleNavigate = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!bootComplete) {
    return <BootSequence onComplete={() => setBootComplete(true)} />;
  }

  return (
    <div className="app-shell">
      <div className="starfield starfield-back" aria-hidden="true" />
      <div className="starfield-front" aria-hidden="true" />
      <div className="screen-noise" aria-hidden="true" />
      <TerminalNav items={navItems} activeId={activeSection} onNavigate={handleNavigate} />

      <main className="terminal-main">
        <AboutSection hero={hero} education={education} />
        <StackSection techStack={techStack} />
        <ExperienceSection experiences={experiences} awards={awards} affiliations={affiliations} />
        <ProjectsSection projects={projects} onOpenProject={setSelectedProject} />
        <ContactSection quickLinks={hero.quickLinks} />
      </main>

      <PromptFooter />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
