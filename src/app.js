import { useEffect, useMemo, useState } from 'react';
import BootSequence from './components/terminal/BootSequence';
import ProjectModal from './components/terminal/ProjectModal';
import PromptFooter from './components/terminal/PromptFooter';
import SectionHeader from './components/terminal/SectionHeader';
import TechIcon from './components/terminal/TechIcon';
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

const socialLogoMap = {
  LinkedIn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  GitHub: 'https://cdn.simpleicons.org/github/59ff7a'
};

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    if (!bootComplete) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (inView.length > 0) {
          setActiveSection(inView[0].target.id);
        }
      },
      { threshold: [0.35, 0.6, 0.85], rootMargin: '-10% 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [bootComplete, sectionIds]);

  const handleNavigate = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:TODO@example.com?subject=${subject}&body=${body}`;
  };

  if (!bootComplete) {
    return <BootSequence onComplete={() => setBootComplete(true)} />;
  }

  return (
    <div className="app-shell">
      <div className="screen-noise" aria-hidden="true" />
      <TerminalNav items={navItems} activeId={activeSection} onNavigate={handleNavigate} />

      <main className="terminal-main">
        <section id="about" className="terminal-section">
          <SectionHeader command="cat about.txt" />
          <div className="section-body">
            <h1>{hero.name}</h1>
            <p className="muted">location: {hero.location}</p>
            {hero.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <div className="link-grid">
              {hero.quickLinks.map((link) => (
                socialLogoMap[link.label] ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="social-logo-link"
                    aria-label={link.label}
                  >
                    <img src={socialLogoMap[link.label]} alt="" className="social-logo" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}: {link.display}
                  </a>
                )
              ))}
            </div>
            <div className="education-box">
              <p>
                {education.school} - {education.location}
              </p>
              <p>{education.degree}</p>
              <p>{education.graduation}</p>
              <p>GPA: {education.gpa}</p>
            </div>
          </div>
        </section>

        <section id="stack" className="terminal-section">
          <SectionHeader command="ls tech-stack/" />
          <div className="section-body stack-grid">
            {Object.entries(techStack).map(([group, items]) => (
              <article key={group} className="stack-group">
                <h2>{group}</h2>
                <div className="tech-list">
                  {items.map((item) => (
                    <TechIcon key={item} label={item} group={group} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="terminal-section">
          <SectionHeader command="cat experience.log" />
          <div className="section-body">
            {experiences.map((item) => (
              <article key={item.title} className="entry-block">
                <h2>{item.title}</h2>
                <p className="muted">
                  {item.org} | {item.period}
                </p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="entry-block">
              <h2>Awards / Activities</h2>
              <ul>
                {awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </article>

            <article className="entry-block">
              <h2>Affiliations</h2>
              <ul>
                {affiliations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="terminal-section">
          <SectionHeader command="cat projects.json" />
          <div className="section-body project-grid">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt || `${project.title} preview`}
                    className="project-image"
                  />
                ) : (
                  <div className="project-image-placeholder" aria-hidden="true">
                    project image
                  </div>
                )}
                <h2>{project.title}</h2>
                <p>{project.stack.join(' | ')}</p>
                <p className="muted">click to open details</p>
                <div className="project-links-preview">
                  <span>{project.githubUrl && project.githubUrl !== '#' ? 'GitHub: Available' : 'GitHub: N/A'}</span>
                  <span>{project.demoUrl ? 'Live Demo: Available' : 'Live Demo: N/A'}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="terminal-section">
          <SectionHeader command="cat contact.md" />
          <div className="section-body">
            <p>
              Reach me by email:{' '}
              <a href="mailto:xachin300@gmail.com">xachin300@gmail.com</a>
            </p>
            <div className="link-grid">
              {hero.quickLinks.slice(0, 3).map((link) => (
                socialLogoMap[link.label] ? (
                  <a
                    key={`contact-${link.label}`}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="social-logo-link"
                    aria-label={link.label}
                  >
                    <img src={socialLogoMap[link.label]} alt="" className="social-logo" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ) : (
                  <a
                    key={`contact-${link.label}`}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">name</label>
              <input id="name" name="name" value={form.name} onChange={handleInputChange} required />

              <label htmlFor="email">email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="message">message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleInputChange}
                required
              />

              <button type="submit">send via mail client</button>
            </form>
          </div>
        </section>
      </main>

      <PromptFooter />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
