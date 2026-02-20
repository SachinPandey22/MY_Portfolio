function TerminalNav({ items, activeId, onNavigate }) {
  return (
    <header className="terminal-nav-wrap">
      <nav className="terminal-nav" aria-label="Primary">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              className={`terminal-tab${active ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-current={active ? 'page' : undefined}
            >
              [{item.label}]
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default TerminalNav;
