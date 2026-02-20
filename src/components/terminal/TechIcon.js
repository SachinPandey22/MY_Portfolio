import techLogoMap from '../../constants/techLogoMap';

const groupsWithLogos = new Set([
  'Languages',
  'Frameworks/Libraries',
  'Tools',
  'Databases',
  'Cloud/Deployment'
]);

function TechIcon({ label, group }) {
  const letter = label.charAt(0).toUpperCase();
  const useLogo = groupsWithLogos.has(group);
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
