import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': '홈',
  '/startups': '투자',
};

function TopBar() {
  const { pathname } = useLocation();
  const title = pathname === '/startups' ? '투자' : pathname.startsWith('/startups/') ? '투자' : pageTitles[pathname] ?? '투자';

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-divider bg-card/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-primary/10 text-primary shadow-card-lg">
            <span className="text-lg font-semibold">투</span>
          </div>
          <div>
            <p className="text-base font-semibold text-primary">{title}</p>
            <p className="text-xs text-tertiary">하나원큐 뱅킹</p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary-light"
          aria-label="AI"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7l-4 4V4a1 1 0 0 1 1-1z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default TopBar;
