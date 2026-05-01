import { NavLink } from 'react-router-dom';

const navItems = [
  { label: '홈', icon: 'home', to: '/' },
  { label: '자산', icon: 'assets', to: null },
  { label: '상품', icon: 'products', to: '/startups' },
  { label: '투자', icon: 'investment', to: '/startups' },
  { label: '메뉴', icon: 'menu', to: null },
];

const icons = {
  home: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5L12 4l9 7.5v8.5a1 1 0 0 1-1 1h-5V14H9v7H4a1 1 0 0 1-1-1v-8.5z" />
    </svg>
  ),
  assets: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16v11H4z" />
      <path d="M7 7V4h10v3" />
      <path d="M8 12h8" />
      <path d="M8 16h6" />
    </svg>
  ),
  products: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 6h14l-1.5 12.5a1 1 0 0 1-1 .9H7.5a1 1 0 0 1-1-.9L5 6z" />
      <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      <path d="M10 11h4" />
    </svg>
  ),
  investment: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16l4-4 4 4 8-8" />
      <path d="M12 12l4-4" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
};

function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-divider bg-card/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        {navItems.map((item) => (
          item.to ? (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `inline-flex flex-col items-center justify-center gap-1 rounded-3xl px-4 py-2 text-xs font-semibold transition ${
                  isActive ? 'text-primary' : 'text-tertiary'
                }`
              }
            >
              {icons[item.icon]}
              <span>{item.label}</span>
            </NavLink>
          ) : (
            <button
              key={item.label}
              type="button"
              className="inline-flex flex-col items-center justify-center gap-1 rounded-3xl px-4 py-2 text-xs font-semibold text-tertiary"
              aria-label={item.label}
            >
              {icons[item.icon]}
              <span>{item.label}</span>
            </button>
          )
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
