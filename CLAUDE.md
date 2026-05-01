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
- 인라인 스타일 사용 금지
- 하드코딩 컬러값 사용 금지

## 디자인 토큰
- `--hana-primary`
- `--hana-primary-dark`
- `--hana-primary-light`
- `--hana-accent-pink`
- `--hana-accent-blue`
- `--hana-accent-purple`
- `--bg-page`
- `--bg-card`
- `--bg-section`
- `--bg-hero`
- `--text-primary`
- `--text-secondary`
- `--text-tertiary`
- `--text-disabled`
- `--border-card`
- `--border-default`
- `--shadow-card`
- `--shadow-card-lg`
- `--radius-card`
- `--radius-pill`

## 기술 스택
- React + Vite + Tailwind CSS
- React Router
- 데이터: `src/data/startups.json`

## 라우팅
- `/` — 홈
- `/startups` — 스타트업 리스트
- `/startups/:id` — 스타트업 상세

## 파일 참조
- `DESIGN_SYSTEM.md` — 디자인 토큰 및 규칙
- `src/styles/tokens.css` — 실제 CSS 변수
- `tailwind.config.js` — Tailwind 커스텀 색상 및 토큰 매핑
- `src/data/startups.json` — 정적 스타트업 데이터

## 금지사항
- 인라인 스타일 사용 금지
- 하드코딩 컬러값 금지
- 리액트 컴포넌트에 프레임워크 없이 직접 DOM 조작 금지
