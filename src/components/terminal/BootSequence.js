import { useEffect, useMemo, useState } from 'react';

const bootLines = [
  '[boot] initializing portfolio kernel...',
  '[sys] mounting /home/sachin',
  '[net] loading profile data',
  '[ok] terminal ready'
];

function BootSequence({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState([]);

  const canSkipMessage = useMemo(() => 'Press any key or click to skip', []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => {
        if (prev >= bootLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    const timeout = setTimeout(() => {
      onComplete();
    }, 3200);

    const handleSkip = () => onComplete();

    window.addEventListener('keydown', handleSkip);
    window.addEventListener('click', handleSkip);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
    };
  }, [onComplete]);

  useEffect(() => {
    setVisible(bootLines.slice(0, lineIndex));
  }, [lineIndex]);

  return (
    <div className="boot-screen" role="status" aria-live="polite">
      <div className="boot-panel">
        {visible.map((line) => (
          <p key={line} className="boot-line">
            {line}
          </p>
        ))}
        <p className="boot-line boot-cursor">_</p>
        <button type="button" className="skip-boot" onClick={onComplete}>
          {canSkipMessage}
        </button>
      </div>
    </div>
  );
}

export default BootSequence;
