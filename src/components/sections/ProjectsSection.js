import SectionHeader from '../terminal/SectionHeader';

function ProjectsSection({ projects, onOpenProject }) {
  return (
    <section id="projects" className="terminal-section">
      <SectionHeader command="cat projects.json" />
      <div className="section-body project-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-card"
            onClick={() => onOpenProject(project)}
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
  );
}

export default ProjectsSection;
