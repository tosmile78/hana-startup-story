import { useState } from "react";
import { Link } from "react-router-dom";
import { startups } from "../data/startups";

function Home() {
  const [activeTag, setActiveTag] = useState("전체");

  const allTags = ["전체", "핀테크", "AI", "블록체인", "에듀테크", "플랫폼", "소상공인"];

  const filtered = activeTag === "전체"
    ? startups
    : startups.filter(s => s.tags.includes(activeTag));

  return (
    <div className="w-full">
      {/* 히어로 섹션 */}
      <div
        className="relative h-[32vh] md:h-[35vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-hana/70 to-hana/50"></div>

        {/* 텍스트 */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            청년과 창업의 이야기
          </h1>
          <p className="text-base md:text-lg text-white/90">
            하나원큐 애자일랩과 함께하는 스타트업들의 도전과 성장
          </p>
        </div>
      </div>

      {/* 필터 탭 */}
      <div className="sticky top-20 z-20 bg-page/95 backdrop-blur border-b border-border-default">
        <div className="max-w-7xl mx-auto px-4 py-3 flex overflow-x-auto gap-2 md:gap-3">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-[18px] py-2 rounded-pill text-[15px] font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTag === tag
                  ? "bg-hanaGray-900 text-white"
                  : "bg-hanaGray-100 text-hanaGray-800 hover:bg-hanaGray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 카드 그리드 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((startup) => (
            <Link
              key={startup.id}
              to={`/startups/${startup.id}`}
              className="group"
            >
              <div className="h-full bg-card rounded-radius-card border border-border-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-lg hover:-translate-y-1">
                {/* 썸네일 이미지 */}
                <div className="h-48 bg-tertiary overflow-hidden">
                  <img
                    src={startup.thumbnailUrl}
                    alt={startup.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* 컨텐츠 */}
                <div className="p-5">
                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {startup.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 bg-hana/10 text-hana text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 회사명 */}
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {startup.name}
                  </h3>

                  {/* One-liner */}
                  <p className="text-sm text-secondary line-clamp-2 mb-4">
                    {startup.oneLiner}
                  </p>

                  {/* 더보기 링크 */}
                  <div className="flex items-center text-hana font-medium text-sm group-hover:gap-2 transition-all duration-300">
                    <span>자세히 보기</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 결과 없음 상태 */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-tertiary text-lg">
              "{activeTag}" 카테고리에 맞는 스타트업이 없습니다.
            </p>
          </div>
        )}
      </div>

      {/* 디자인 시스템 플로팅 버튼 */}
      <Link
        to="/design-system"
        className="fixed bottom-28 right-4 z-40 flex items-center gap-2 rounded-pill bg-hanaGray-900 px-4 py-2.5 shadow-cardLg transition-all hover:bg-hanaGray-800 active:scale-95"
        title="디자인 시스템"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="8" strokeDasharray="3 2" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
        <span className="text-[13px] font-semibold text-white whitespace-nowrap">디자인 시스템</span>
      </Link>
    </div>
  );
}

export default Home;
