import SectionHeader from '../terminal/SectionHeader';
import socialLogoMap from '../../constants/socialLogoMap';

function AboutSection({ hero, education }) {
  const socialLinks = hero.quickLinks.filter(
    (link) => link.label === 'LinkedIn' || link.label === 'GitHub'
  );

  return (
    <section id="about" className="terminal-section">
      <SectionHeader command="cat about.txt" />
      <div className="section-body hero-layout">
        <div className="hero-copy">
          <h1 className="hero-title">{hero.name}</h1>
          <p className="hero-location">location: {hero.location}</p>

          <div className="hero-typewrap" aria-label="intro">
            <p className="hero-type-line type-line-1">
              <span>&gt; Software Engineer</span>
            </p>
            <p className="hero-type-line type-line-2">
              <span>&gt; Full-Stack Developer</span>
            </p>
          </div>

          <div className="hero-social-row">
            {socialLinks.map((link) => (
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
