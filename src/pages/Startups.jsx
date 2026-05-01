const newsItems = [
  {
    title: '망 사용료부터 쿠팡까지, 한국 압박하는 미국',
    tags: ['#국제', '#미국'],
    date: '2026.04.29',
    color: 'from-purple-200 via-indigo-200 to-sky-200',
  },
  {
    title: '전세 매물 33% 증발, 서울 전세난 비상',
    tags: ['#부동산', '#정책'],
    date: '2026.04.27',
    color: 'from-amber-200 via-orange-200 to-pink-200',
  },
  {
    title: "오픈AI '덕테이프' 정체 공개, 이미지 AI 판 흔들까",
    tags: ['#비즈니스', '#AI'],
    date: '2026.04.24',
    color: 'from-slate-200 via-slate-300 to-slate-200',
  },
];

const contentItems = [
  {
    title: '마음이 불편하다면 투자를 잘 하고 있는 것',
    subtitle: '시황 한 스푼',
    icon: '📈',
  },
  {
    title: '같은 부동산 다른 가격, 매매가격 vs …',
    subtitle: '부동산 Q&A',
    icon: '🏘️',
  },
  {
    title: '전문가들이 전하는 금융시장 동향',
    subtitle: '이달의 투자 가이드',
    icon: '💰',
  },
];

function Startups() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-4 sm:px-6 lg:px-8">
      <div className="space-y-5">
        <section className="rounded-card bg-card p-5 shadow-card">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-secondary">뉴스</p>
            </div>
            <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-tertiary">
              전체 보기
              <span className="text-base">›</span>
            </button>
          </div>

          <div className="space-y-4">
            {newsItems.map((item) => (
              <article key={item.title} className="flex items-center gap-4 rounded-3xl border border-divider bg-section p-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color}`}>
                  <span className="text-lg">📰</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-primary truncate">{item.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-tertiary">
                    <span>{item.tags.join(' ')}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-card bg-card p-5 shadow-card">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-secondary">콘텐츠</p>
            </div>
            <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-tertiary">
              전체 보기
              <span className="text-base">›</span>
            </button>
          </div>

          <div className="space-y-3">
            {contentItems.map((item) => (
              <article key={item.title} className="flex items-center gap-4 rounded-3xl border border-divider bg-section px-4 py-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary text-lg">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-primary truncate">{item.title}</p>
                  <p className="mt-1 text-sm text-tertiary">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Startups;
