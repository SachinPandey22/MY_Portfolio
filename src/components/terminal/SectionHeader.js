function SectionHeader({ command }) {
  return (
    <div className="cmd-line" aria-hidden="true">
      <span className="cmd-user">sachin@portfolio</span>
      <span className="cmd-sep">:</span>
      <span className="cmd-path">~</span>
      <span className="cmd-dollar">$</span>
      <span className="cmd-command">{command}</span>
    </div>
  );
}

export default SectionHeader;
