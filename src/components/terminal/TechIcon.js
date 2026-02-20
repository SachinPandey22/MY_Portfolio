const techLogoMap = {
  LinkedIn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Django REST': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitKraken: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitkraken/gitkraken-original.svg',
  Jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  'Agile/Scrum': `${process.env.PUBLIC_URL}/photos/agile.png`, // Custom icon for Agile/Scrum
  Bitbucket: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  Netlify: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
  Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'Bitbucket Pipelines': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg'    
};

function TechIcon({ label, group }) {
  const letter = label.charAt(0).toUpperCase();
  const useLogo = group === 'Languages' || group === 'Frameworks/Libraries' || group === 'Tools' || group === 'Cloud/Deployment' || group === 'Databases' || group === 'Cloud/Deployment';
  const logoUrl = techLogoMap[label];


  return (
    <span className="tech-chip" title={label}>
      {useLogo && logoUrl ? (
        <img src={logoUrl} alt="" className="tech-logo-image" loading="lazy" decoding="async" />
      ) : (
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pixel-icon">
          <rect x="1" y="1" width="18" height="18" className="pixel-icon-frame" />
          <rect x="4" y="4" width="12" height="12" className="pixel-icon-fill" />
          <text x="10" y="13" textAnchor="middle" className="pixel-icon-text">
            {letter}
          </text>
        </svg>
      )}
      <span>{label}</span>
    </span>
  );
}

export default TechIcon;
