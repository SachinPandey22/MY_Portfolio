import SectionHeader from '../terminal/SectionHeader';

function ExperienceSection({ experiences, awards, affiliations }) {
  return (
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
  );
}

export default ExperienceSection;
