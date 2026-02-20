import SectionHeader from '../terminal/SectionHeader';
import TechIcon from '../terminal/TechIcon';

function StackSection({ techStack }) {
  return (
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
  );
}

export default StackSection;
