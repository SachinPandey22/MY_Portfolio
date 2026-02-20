import { useEffect, useState } from 'react';

function useActiveSection(sectionIds, enabled) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'about');

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) {
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
  }, [enabled, sectionIds]);

  return activeSection;
}

export default useActiveSection;
