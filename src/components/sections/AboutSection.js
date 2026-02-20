import SectionHeader from '../terminal/SectionHeader';
import socialLogoMap from '../../constants/socialLogoMap';

function AboutSection({ hero, education }) {
  return (
    <section id="about" className="terminal-section">
      <SectionHeader command="cat about.txt" />
      <div className="section-body hero-layout">
        <div className="hero-copy">
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
        {hero.photoUrl ? (
          <figure className="hero-photo-panel">
            <div className="hero-photo-frame">
              <img src={hero.photoUrl} alt={hero.photoAlt || hero.name} className="hero-photo" />
            </div>
            <figcaption className="hero-photo-caption">id://sachin_pandey</figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}

export default AboutSection;
