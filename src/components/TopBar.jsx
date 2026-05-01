function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-divider bg-card/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <h1 className="text-2xl font-bold text-primary tracking-tight">
          하나성장지원센터
        </h1>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-card text-tertiary transition hover:border-primary hover:text-primary"
          aria-label="AI 채팅"
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
