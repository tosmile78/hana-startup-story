import { Link } from 'react-router-dom';

const colorTokens = [
  {
    group: 'Brand / Primary',
    items: [
      { token: '--hana-primary', hex: '#00B3A8', label: 'Primary', usage: 'CTA, 액티브 탭, 강조 수치' },
      { token: '--hana-primary-dark', hex: '#009188', label: 'Primary Dark', usage: 'hover / pressed' },
      { token: '--hana-primary-light', hex: '#E6F7F6', label: 'Primary Light', usage: '칩 배경, 연한 강조' },
      { token: '--hana-primary-text', hex: '#007A72', label: 'Primary Text', usage: '텍스트 위 primary (접근성)' },
    ],
  },
  {
    group: 'Accent',
    items: [
      { token: '--hana-accent-pink', hex: '#FF4D6A', label: 'Accent Pink', usage: '신상품 배지, 알림 뱃지' },
      { token: '--hana-accent-blue', hex: '#4A90D9', label: 'Accent Blue', usage: 'AI 아이콘' },
      { token: '--hana-accent-purple', hex: '#B39DDB', label: 'Accent Purple', usage: '히어로 그라데이션 보조' },
    ],
  },
  {
    group: 'Background',
    items: [
      { token: '--bg-page', hex: '#F2F2F7', label: 'BG Page', usage: '페이지 기본 배경' },
      { token: '--bg-card', hex: '#FFFFFF', label: 'BG Card', usage: '카드, 모달, 입력필드' },
      { token: '--bg-section', hex: '#F8F8F8', label: 'BG Section', usage: '섹션 구분 배경' },
    ],
  },
  {
    group: 'Text',
    items: [
      { token: '--text-primary', hex: '#1A1A1A', label: 'Text Primary', usage: '메인 타이틀, 금액' },
      { token: '--text-secondary', hex: '#4A4A4A', label: 'Text Secondary', usage: '카드 제목, 메뉴' },
      { token: '--text-tertiary', hex: '#8E8E93', label: 'Text Tertiary', usage: '보조 설명, 날짜' },
      { token: '--text-disabled', hex: '#C7C7CC', label: 'Text Disabled', usage: '비활성 상태' },
    ],
  },
  {
    group: 'Semantic',
    items: [
      { token: '--color-positive', hex: '#00B3A8', label: 'Positive', usage: '상승, 이익' },
      { token: '--color-negative', hex: '#FF3B30', label: 'Negative', usage: '하락, 오류' },
      { token: '--color-warning', hex: '#FF9500', label: 'Warning', usage: '경고' },
      { token: '--color-info', hex: '#007AFF', label: 'Info', usage: '안내' },
    ],
  },
];

const typeScale = [
  { name: 'Display', size: '28px', weight: '700', sample: '12,084,730원', usage: '금액·히어로 수치' },
  { name: 'H1', size: '22px', weight: '700', sample: '하나성장지원센터', usage: '페이지 타이틀' },
  { name: 'H2', size: '18px', weight: '700', sample: '놓치면 안 되는 꿀 이벤트', usage: '섹션 헤더' },
  { name: 'H3', size: '17px', weight: '600', sample: '달려라 하나 적금', usage: '카드 타이틀' },
  { name: 'Body', size: '15px', weight: '400', sample: '카드 설명, 메뉴 리스트 본문 텍스트입니다.', usage: '본문' },
  { name: 'Caption', size: '13px', weight: '400', sample: '#태그  2026.05.02', usage: '날짜, 해시태그, 보조' },
  { name: 'Label', size: '12px', weight: '600', sample: '신상품  NEW', usage: '배지, 레이블' },
];

const radiusTokens = [
  { token: '--radius-card', value: '16px', label: 'Card' },
  { token: '--radius-card-sm', value: '12px', label: 'Card SM' },
  { token: '--radius-pill', value: '50px', label: 'Pill' },
];

const shadowTokens = [
  { token: '--shadow-card', value: '0 2px 8px rgba(0,0,0,0.06)', label: 'Card' },
  { token: '--shadow-card-lg', value: '0 4px 16px rgba(0,0,0,0.08)', label: 'Card LG' },
];

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-divider">{title}</h2>
      {children}
    </section>
  );
}

function TokenLabel({ token }) {
  return (
    <code className="text-[11px] text-tertiary font-mono bg-hanaGray-100 px-1.5 py-0.5 rounded">
      {token}
    </code>
  );
}

function DesignSystem() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* 헤더 */}
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="text-tertiary hover:text-primary transition text-lg">←</Link>
          <div>
            <h1 className="text-2xl font-bold text-primary">디자인 시스템</h1>
            <p className="text-sm text-tertiary mt-0.5">하나원큐 디자인 토큰 · 컴포넌트 레퍼런스</p>
          </div>
        </div>

        {/* 컬러 토큰 */}
        <Section title="컬러 토큰">
          {colorTokens.map((group) => (
            <div key={group.group} className="mb-6">
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-3">{group.group}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.items.map((item) => (
                  <div key={item.token} className="flex items-center gap-3 bg-card rounded-card-sm border border-divider p-3">
                    <div
                      className="h-10 w-10 shrink-0 rounded-[10px] border border-divider"
                      style={{ backgroundColor: item.hex }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-primary">{item.label}</p>
                      <p className="text-xs text-tertiary">{item.hex}</p>
                      <p className="text-xs text-tertiary truncate mt-0.5">{item.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* 타이포그래피 */}
        <Section title="타이포그래피">
          <div className="bg-card rounded-card border border-divider overflow-hidden">
            {typeScale.map((t, i) => (
              <div key={t.name} className={`px-5 py-4 ${i !== typeScale.length - 1 ? 'border-b border-divider' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="text-xs font-semibold text-tertiary w-14 shrink-0 pt-0.5">{t.name}</span>
                  <p className="flex-1 text-primary truncate" style={{ fontSize: t.size, fontWeight: t.weight }}>
                    {t.sample}
                  </p>
                </div>
                <div className="flex items-center gap-3 pl-14">
                  <span className="text-[11px] text-tertiary">{t.size} / {t.weight}</span>
                  <span className="text-[11px] text-disabled">—</span>
                  <span className="text-[11px] text-tertiary">{t.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 버튼 컴포넌트 */}
        <Section title="버튼">
          <div className="bg-card rounded-card border border-divider p-6 space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
              <button className="h-[52px] px-8 rounded-pill bg-hana text-white text-[17px] font-semibold transition hover:bg-primaryDark">
                Primary
              </button>
              <button className="h-[52px] px-8 rounded-pill bg-card border border-border text-primary text-[17px] font-semibold transition hover:border-hana">
                Secondary
              </button>
              <button className="text-sm text-tertiary hover:text-primary transition">
                텍스트 링크 →
              </button>
            </div>
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center gap-2">
                <TokenLabel token="rounded-pill" />
                <span className="text-xs text-tertiary">h-[52px], font-semibold 17px</span>
              </div>
              <div className="flex items-center gap-2">
                <TokenLabel token="bg-hana" />
                <span className="text-xs text-tertiary">= #00B3A8</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 카드 컴포넌트 */}
        <Section title="카드">
          <div className="space-y-3">
            <div className="bg-card rounded-card shadow-card border border-divider p-5">
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-1">Card Default</p>
              <p className="text-base font-semibold text-primary">달려라 하나 적금</p>
              <p className="text-sm text-secondary mt-1">연 4.5% · 12개월 자동이체 우대</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-tertiary px-1">
              <TokenLabel token="rounded-card" />
              <span>16px</span>
              <span>·</span>
              <TokenLabel token="shadow-card" />
              <span>0 2px 8px rgba(0,0,0,0.06)</span>
            </div>
          </div>
        </Section>

        {/* 배지 & 칩 */}
        <Section title="배지 & 칩">
          <div className="bg-card rounded-card border border-divider p-5">
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-pill bg-accentPink text-white text-[12px] font-bold">
                신상품
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-pill border border-hana text-hana text-[12px]">
                기능 태그
              </span>
              <span className="inline-flex items-center px-[18px] py-2 rounded-pill bg-hanaGray-900 text-white text-[15px] font-semibold">
                선택됨
              </span>
              <span className="inline-flex items-center px-[18px] py-2 rounded-pill bg-hanaGray-100 text-hanaGray-800 text-[15px] font-semibold">
                비선택
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-tertiary">
              <TokenLabel token="rounded-pill" />
              <span>·</span>
              <TokenLabel token="--hana-accent-pink" />
              <span>·</span>
              <TokenLabel token="--hana-primary" />
            </div>
          </div>
        </Section>

        {/* 라디우스 & 그림자 */}
        <Section title="Border Radius & Shadow">
          <div className="bg-card rounded-card border border-divider p-5 space-y-5">
            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-3">Border Radius</p>
              <div className="flex flex-wrap gap-4 items-end">
                {radiusTokens.map((r) => (
                  <div key={r.token} className="flex flex-col items-center gap-2">
                    <div
                      className="h-12 w-12 bg-hanaGray-100 border border-divider"
                      style={{ borderRadius: r.value }}
                    />
                    <span className="text-xs text-primary font-semibold">{r.label}</span>
                    <span className="text-[11px] text-tertiary">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-3">Shadow</p>
              <div className="flex flex-wrap gap-4">
                {shadowTokens.map((s) => (
                  <div key={s.token} className="flex flex-col gap-2">
                    <div className="h-12 w-28 bg-card rounded-card-sm" style={{ boxShadow: s.value }} />
                    <span className="text-xs text-primary font-semibold">{s.label}</span>
                    <TokenLabel token={s.token} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 폰트 */}
        <Section title="폰트">
          <div className="bg-card rounded-card border border-divider p-5">
            <p className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Pretendard' }}>
              Pretendard
            </p>
            <p className="text-sm text-secondary mb-3">
              Apple SD Gothic Neo → -apple-system → sans-serif 순 fallback
            </p>
            <TokenLabel token="--font-family" />
          </div>
        </Section>

      </div>
    </div>
  );
}

export default DesignSystem;
