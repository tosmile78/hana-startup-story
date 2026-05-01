import { NavLink } from 'react-router-dom';

const navigation = [
  { to: '/', label: '홈' },
  { to: '/startups', label: '스타트업' },
];

function Navigation() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <div>
          <p className="font-semibold text-lg text-primary">하나 성장지원센터</p>
          <p className="text-sm text-tertiary">스타트업 스토리</p>
        </div>
        <nav className="flex items-center gap-3">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-primary text-white shadow-soft'
                    : 'text-tertiary hover:bg-section'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
