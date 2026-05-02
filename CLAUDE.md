# CLAUDE.md

## 프로젝트 개요
하나성장지원센터 스타트업 스토리 홍보 웹사이트.

## 디자인 원칙
- 반드시 `DESIGN_SYSTEM.md`의 토큰을 사용할 것
- `src/styles/tokens.css`에 정의된 CSS 변수를 우선해서 사용
- Primary 컬러 `#00B3A8`은 CTA, 강조 수치, 액티브 상태에만 사용
- 카드: `border-radius 16px`, `box-shadow 0 2px 8px rgba(0,0,0,0.06)`
- 배경은 `#FFFFFF`/`#F8F8F8`/`#F2F2F7` 계열로 구성
- 텍스트 컬러는 `--text-primary`, `--text-secondary`, `--text-tertiary`로 구분
- 폰트: `Pretendard` 우선
- 동적 데이터 기반(brandColor 등) 예외 제외 시 인라인 스타일 사용 금지
- 하드코딩 컬러값 금지 (tokens.css 정의 후 CSS 변수 참조)

## 디자인 토큰
- `--hana-primary` / `--hana-primary-dark` / `--hana-primary-light` / `--hana-primary-text`
- `--hana-primary-a10` — primary 10% 투명도 (bg-hana/10 대체)
- `--overlay-hero` — 히어로 그라데이션 오버레이
- `--hana-accent-pink` / `--hana-accent-pink-light`
- `--hana-accent-blue` / `--hana-accent-blue-light`
- `--hana-accent-purple` / `--hana-accent-purple-deep` / `--hana-accent-purple-light`
- `--bg-page` / `--bg-card` / `--bg-section` / `--bg-hero`
- `--text-primary` / `--text-secondary` / `--text-tertiary` / `--text-disabled`
- `--border-card` / `--border-default` / `--divider`
- `--shadow-card` / `--shadow-card-lg`
- `--radius-card` / `--radius-card-sm` / `--radius-pill`
- `--color-warning-light` / `--color-info-light`

## Tailwind 클래스 올바른 사용법
CSS 변수 기반이므로 opacity modifier(`/10`, `/70` 등) 사용 불가. 아래 정확한 별칭 사용:

| 의도 | **올바른 클래스** | ~~잘못된 클래스~~ |
|------|------------------|------------------|
| primary 배경 | `bg-primary` 또는 `bg-hana` | ~~bg-hana/70~~ |
| primary 텍스트 | `text-hana` | — |
| primary 10% 배경 | `bg-hanaA10` | ~~bg-hana/10~~ |
| 히어로 오버레이 | `bg-hero-overlay` | ~~from-hana/70~~ |
| 카드 반경 | `rounded-card` | ~~rounded-radius-card~~ |
| 카드 SM 반경 | `rounded-cardSm` | ~~rounded-card-sm~~ |
| 카드 테두리 | `border-borderCard` | ~~border-border-card~~ |
| 기본 구분선 | `border-border` | ~~border-border-default~~ |
| 큰 그림자 | `shadow-cardLg` | ~~shadow-card-lg~~ |

## 태그 색상 시스템 (tagColors)
태그 칩 색상은 **`src/data/tagColors.js`에서 중앙 관리**. 직접 색상 클래스 작성 금지.

```js
import { tagColors, tagChipClass } from '../data/tagColors';

// 필터 칩 (active/inactive)
tagChipClass(tag, isActive)   // → Tailwind 클래스 문자열 반환

// 카드·상세 태그 칩 (항상 inactive 스타일)
tagColors[tag]?.off           // → bg-xxx text-xxx 클래스
```

태그-색상 배정:
- 전체 → primary 틸 (`--hana-primary`)
- 핀테크 → accent blue (`--hana-accent-blue`)
- AI → accent purple deep (`--hana-accent-purple-deep`)
- 블록체인 → gray dark (`hanaGray-900`)
- 에듀테크 → warning orange (`--color-warning`)
- 플랫폼 → info blue (`--color-info`)
- 소상공인 → accent pink (`--hana-accent-pink`)

## 기술 스택
- React + Vite + Tailwind CSS
- React Router v6
- 데이터: `src/data/startups.js`

## 라우팅
- `/` — 홈
- `/startups` — 뉴스·콘텐츠 피드
- `/startups/:id` — 스타트업 상세
- `/design-system` — 디자인 시스템 레퍼런스

## 파일 참조
- `DESIGN_SYSTEM.md` — 디자인 토큰 및 규칙
- `src/styles/tokens.css` — 실제 CSS 변수
- `tailwind.config.js` — Tailwind 커스텀 색상 및 토큰 매핑
- `src/data/startups.js` — 정적 스타트업 데이터 (10개)
- `src/data/tagColors.js` — 태그별 칩 색상 맵 (공유 모듈)

## 금지사항
- 하드코딩 컬러값 금지 (tokens.css에 정의 후 CSS 변수 참조)
- `bg-hana/10`, `from-hana/70` 등 CSS 변수에 opacity modifier 사용 금지
- `rounded-radius-card`, `border-border-card`, `shadow-card-lg` 등 잘못된 Tailwind 키 사용 금지
- 리액트 컴포넌트에 프레임워크 없이 직접 DOM 조작 금지
- 태그 칩 색상을 컴포넌트 내부에 직접 정의 금지 — tagColors.js 사용
