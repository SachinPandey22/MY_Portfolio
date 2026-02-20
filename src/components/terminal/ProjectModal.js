import { useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 id="project-modal-title">{project.title}</h3>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt || `${project.title} preview`}
            className="project-modal-image"
          />
        ) : (
          <div className="project-image-placeholder" aria-hidden="true">
            project image
          </div>
        )}
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="project-modal-links">
          {project.githubUrl && project.githubUrl !== '#' ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <span>N/A GitHub</span>
          )}
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : (
            <span>N/A Live Demo</span>
          )}
        </div>
        <button type="button" className="close-modal" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;
