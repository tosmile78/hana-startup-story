import { Link, useParams } from "react-router-dom";
import { startups } from "../data/startups";
import { tagColors } from "../data/tagColors";

function StartupDetail() {
  const { id } = useParams();
  const startup = startups.find((item) => item.id === id);

  if (!startup) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-lg font-semibold text-primary mb-6">찾을 수 없는 스타트업입니다.</p>
        <Link to="/" className="inline-block bg-hana text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-cardLg">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 상단 백링크 */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2">
        <Link to="/" className="inline-flex items-center text-secondary hover:text-primary transition">
          <span className="text-lg mr-2">←</span>
          <span>목록으로</span>
        </Link>
      </div>

      {/* 1. 커버 섹션 */}
      <div className="w-full py-12 px-4" style={{ backgroundColor: startup.brandColor }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{startup.name}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">{startup.slogan}</p>
        </div>
      </div>

      {/* 2. 정보 카드 섹션 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-card rounded-card border border-borderCard p-6 md:p-8 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* 태그 칩 — tagColors.off 적용 */}
            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wide mb-3">분야</p>
              <div className="flex flex-wrap gap-2">
                {startup.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${tagColors[tag]?.off ?? 'bg-hanaGray-100 text-hanaGray-600'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wide mb-3">설립</p>
              <p className="text-lg font-bold text-primary">{startup.founded}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wide mb-3">대표이사</p>
              <p className="text-lg font-bold text-primary">{startup.ceo}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wide mb-3">애자일랩</p>
              <p className="text-lg font-bold text-primary">{startup.cohort}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-tertiary uppercase tracking-wide mb-3">웹사이트</p>
              <a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hana font-semibold hover:underline text-sm"
              >
                방문하기 →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 상세 이미지 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <img
          src={startup.detailImageUrl}
          alt={startup.name}
          loading="lazy"
          className="w-full h-60 md:h-80 object-cover rounded-card shadow-card"
        />
      </div>

      {/* 4. 창업 스토리 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">창업 이야기</h2>
        <p className="text-base md:text-lg leading-relaxed text-secondary whitespace-pre-wrap">{startup.story}</p>
      </div>

      {/* 5. 인터뷰 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">대표 인터뷰</h2>
        <div className="bg-section rounded-card p-8 border-l-4" style={{ borderLeftColor: startup.brandColor }}>
          <p className="text-base md:text-lg leading-relaxed text-secondary italic">{startup.interview}</p>
        </div>
      </div>

      {/* 6. 하나원큐 협업 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">하나원큐 애자일랩과 함께</h2>
        <p className="text-base md:text-lg leading-relaxed text-secondary">{startup.hanaStory}</p>
      </div>

      {/* 7. 성과 수치 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">숫자로 보는 성과</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {startup.stats.map((stat, idx) => (
            <div key={idx} className="bg-card rounded-card p-6 border border-borderCard text-center shadow-card hover:shadow-cardLg transition">
              <p className="text-3xl md:text-4xl font-bold text-hana mb-2">{stat.value}</p>
              <p className="text-sm md:text-base text-tertiary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. CTA */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <a
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-hana text-white text-center py-4 rounded-card font-bold text-lg transition-all hover:shadow-cardLg"
        >
          공식 홈페이지 방문하기
        </a>
      </div>

      <div className="h-8" />
    </div>
  );
}

export default StartupDetail;
