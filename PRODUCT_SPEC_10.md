# PRODUCT_SPEC.md
# 하나 스타트업 스토리 — Claude Code 구현 스펙

> 이 문서를 읽고 그대로 구현하세요.
> 디자인 토큰은 DESIGN_SYSTEM.md를 따릅니다.

---

## 기술 스택

```
React + Vite / Tailwind CSS (커스텀 토큰) / React Router v6
데이터: src/data/startups.js (정적 배열)
이미지: Unsplash Source API (외부 URL, 다운로드 불필요)
배포: Vercel (GitHub 연동)
```

---

## 페이지 구조

```
/ → Home (히어로 + 필터 + 카드 목록)
/startup/:id → StartupDetail (개별 소개 페이지)
```

---

## 페이지 1: Home ( / )

### 1-A. 히어로 섹션

```
높이: 화면의 30~35vh (최소 280px)
배경 이미지: 아래 URL 사용
  https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80
  (청년들이 테이블에 모여 회의하는 사진, 라이선스 무료)
  
  대체 URL (위 로딩 실패 시):
  https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80

배경 처리:
  object-fit: cover
  오버레이: linear-gradient(rgba(0,145,126,0.65), rgba(0,50,45,0.75))
  /* 하나 그린 계열 반투명 오버레이 */

오버레이 텍스트 (중앙 정렬):
  메인: "청년의 창업을 응원합니다" — 흰색, 32px bold
  서브: "하나성장지원센터가 함께한 스타트업들의 이야기" — 흰색 80% 투명도, 16px
  
하단 띠 (히어로 바로 아래):
  배경: #00B3A8
  텍스트: "2015년부터 현재까지 · 200개+ 스타트업 · 하나원큐 애자일랩"
  흰색, 14px, 가운데 정렬, padding 10px
```

### 1-B. 필터 탭

```
히어로 아래 sticky 위치 (스크롤 시 상단 고정)
배경: 흰색, 하단 border: 1px solid #E5E5EA

태그 버튼 목록:
  [전체] [핀테크] [AI] [블록체인] [에듀테크] [플랫폼] [소상공인]

선택된 태그: bg #00B3A8, 흰 텍스트
비선택 태그: bg #F2F2F7, 텍스트 #4A4A4A
border-radius: 100px, padding: 6px 16px, font-size: 14px

기능: 클릭 시 해당 태그를 가진 카드만 보이도록 필터링
      "전체" 선택 시 전체 표시
      다중 선택 불가 (단일 선택)
```

### 1-C. 카드 그리드

```
레이아웃:
  PC(768px+): 3열 그리드, gap 20px
  모바일: 1열, gap 16px
  좌우 패딩: 20px (PC), 16px (모바일)

카드 스펙:
  배경: 흰색
  border-radius: 16px
  box-shadow: 0 2px 8px rgba(0,0,0,0.06)
  hover: translateY(-4px), shadow 강화
  transition: 0.2s ease
  cursor: pointer → /startup/:id 로 이동

카드 내부 구성 (위→아래):
  [1] 회사 썸네일 이미지
      height: 180px, object-fit: cover
      border-radius: 16px 16px 0 0
      이미지 URL: 각 스타트업 데이터의 thumbnailUrl 사용

  [2] 콘텐츠 영역 (padding 16px)
      - 태그 칩들 (분야 태그, 기수 배지)
      - 회사명 (18px, bold, #1A1A1A)
      - 한줄 소개 (14px, #4A4A4A, 2줄 말줄임)
      - 하단: "자세히 보기 →" 링크 (#00B3A8)
```

---

## 페이지 2: StartupDetail ( /startup/:id )

```
상단: 뒤로가기 버튼 "← 목록으로"

[섹션 1] 커버
  배경: 각 회사의 brandColor (데이터 참조)
  높이: 200px
  중앙: 회사명 (흰색 또는 brandColor 보색, 28px bold)
  서브: 슬로건 (16px)

[섹션 2] 회사 기본 정보 카드
  흰 카드, padding 20px, 그림자
  - 분야 태그들
  - 설립연도 · 대표자 · 하나원큐 애자일랩 기수
  - 홈페이지 링크 버튼: "공식 홈페이지 방문 →" (외부 링크, target="_blank")

[섹션 3] 대표 이미지
  height: 240px, object-fit: cover, border-radius: 12px
  이미지: 각 회사의 detailImageUrl 사용

[섹션 4] 창업 스토리
  제목: "창업 이야기" (20px bold)
  본문: story 텍스트 (16px, line-height 1.8, #3D3D3D)

[섹션 5] 대표 인터뷰
  제목: "대표 인터뷰"
  인용 블록 스타일:
    border-left: 4px solid #00B3A8
    background: #F8F8F8
    padding: 16px 20px
    font-style: italic
    16px, #4A4A4A

[섹션 6] 하나은행과의 협업
  제목: "하나원큐 애자일랩과 함께"
  본문: hanaStory 텍스트

[섹션 7] 숫자로 보는 성과
  3개 스탯 카드 (가로 배열)
  각 카드: 수치 (24px bold #00B3A8) + 레이블 (12px #8E8E93)

[섹션 8] 홈페이지 CTA 버튼
  "공식 홈페이지 방문하기" — 풀 와이드, 하나 그린 버튼
```

---

## 스타트업 데이터 (src/data/startups.js)

```javascript
export const startups = [
  {
    id: "dunamu",
    name: "두나무",
    slogan: "블록체인으로 금융의 경계를 넘다",
    tags: ["블록체인", "핀테크"],
    cohort: "초기 파트너사",
    founded: "2012",
    ceo: "이석우",
    brandColor: "#1A1A2E",
    oneLiner: "업비트를 운영하는 대한민국 대표 블록체인·핀테크 기업",
    website: "https://www.dunamu.com",
    thumbnailUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&q=80",
    // 블록체인/암호화폐 관련 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    story: "두나무는 2012년 소셜 주식 거래 플랫폼으로 출발했습니다. 창업자들은 '금융 정보의 민주화'라는 비전 아래, 누구나 쉽게 금융 시장에 참여할 수 있는 플랫폼을 꿈꿨습니다. 2017년 카카오와 협력해 출시한 업비트는 출시 직후 국내 1위 암호화폐 거래소로 자리잡았습니다. 지금은 블록체인 기술을 금융 인프라에 접목하는 실험을 하나금융그룹과 함께 이어가고 있습니다.",
    interview: "\"처음 블록체인을 접했을 때, 이게 단순한 투기 수단이 아니라 금융 인프라 자체를 바꿀 수 있는 기술이라는 확신이 들었습니다. 하나은행이 그 비전에 공감해 주신 덕분에 실제 금융 서비스에 블록체인을 접목할 수 있었습니다.\" — 이석우 대표",
    hanaStory: "두나무는 하나금융그룹과 블록체인 기반 글로벌 금융 서비스 개발 협약을 체결하고, 자체 개발한 레이어2 블록체인 '기와체인'을 하나은행 외환망에 적용하는 프로젝트를 진행하고 있습니다.",
    stats: [
      { value: "2012", label: "설립연도" },
      { value: "1위", label: "국내 암호화폐 거래소" },
      { value: "3,000억+", label: "2025년 영업이익" }
    ]
  },
  {
    id: "upstage",
    name: "업스테이지",
    slogan: "한국어를 가장 잘 아는 AI",
    tags: ["AI"],
    cohort: "16기",
    founded: "2020",
    ceo: "김성훈",
    brandColor: "#1C3557",
    oneLiner: "Solar LLM으로 기업의 AI 전환을 이끄는 글로벌 AI 스타트업",
    website: "https://www.upstage.ai",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    // AI 관련 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    story: "업스테이지는 2020년 네이버 AI팀 출신 연구자들이 모여 창업했습니다. '한국어를 가장 잘 이해하는 AI'를 만들겠다는 목표로, 자체 개발 LLM '솔라(Solar)'를 출시해 글로벌 벤치마크에서 상위권에 올랐습니다. 금융, 법률, 의료 등 전문 분야에 특화된 AI 솔루션을 50개 이상의 기업에 공급하며 빠르게 성장하고 있습니다.",
    interview: "\"카카오에서 AI 개발을 하면서 '왜 한국 기업들은 영어 AI에 의존해야 하나'라는 질문을 계속 했어요. 하나원큐 애자일랩에서 금융 특화 AI의 가능성을 직접 검증할 수 있었고, 그게 저희 B2B 사업의 출발점이 됐습니다.\" — 김성훈 대표",
    hanaStory: "하나원큐 애자일랩 16기로 선발된 업스테이지는 하나은행의 금융 문서 처리 자동화 프로젝트에 Solar LLM을 적용하며 금융 특화 AI 모델의 실증 사례를 만들었습니다.",
    stats: [
      { value: "2020", label: "설립연도" },
      { value: "50개+", label: "글로벌 기업 고객" },
      { value: "1.3조", label: "기업 가치 (프리IPO)" }
    ]
  },
  {
    id: "wrtn",
    name: "뤼튼",
    slogan: "AI를 일상으로, 모두의 창작 파트너",
    tags: ["AI", "플랫폼"],
    cohort: "초기 파트너사",
    founded: "2021",
    ceo: "이세영",
    brandColor: "#6C2FF2",
    oneLiner: "Z세대가 가장 많이 쓰는 국내 1위 AI 플랫폼",
    website: "https://wrtn.ai",
    thumbnailUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    // 창작/AI 플랫폼 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    story: "뤼튼은 '모든 사람이 AI로 더 잘 쓰고 만들 수 있는 세상'을 꿈꾸며 2021년 출발했습니다. GPT, Claude, Gemini 등 다양한 최신 AI 모델을 무료로 제공하는 플랫폼으로, 특히 MZ세대 사이에서 빠르게 확산됐습니다. 하나원큐 애자일랩을 통해 금융 분야 B2B 레퍼런스를 처음으로 확보하며 기업 시장에도 발을 넓혔습니다.",
    interview: "\"AI를 '도구'가 아니라 '친구'처럼 느끼게 하고 싶었어요. 처음엔 소비자 서비스에 집중했는데, 하나은행과의 협업이 기업 고객도 저희를 필요로 한다는 걸 알게 해준 계기였습니다.\" — 이세영 대표",
    hanaStory: "뤼튼은 하나원큐 애자일랩을 통해 하나은행 내부 업무 자동화 프로젝트에 참여하며, 금융 특화 AI 글쓰기 솔루션의 가능성을 실증했습니다.",
    stats: [
      { value: "2021", label: "설립연도" },
      { value: "500만+", label: "월간 활성 사용자" },
      { value: "1위", label: "국내 AI 플랫폼" }
    ]
  },
  {
    id: "fount",
    name: "파운트",
    slogan: "AI가 관리하는 나의 자산",
    tags: ["핀테크", "AI"],
    cohort: "초기 파트너사",
    founded: "2016",
    ceo: "김영빈",
    brandColor: "#0B6E4F",
    oneLiner: "AI 로보어드바이저로 퇴직연금을 자동 운용하는 핀테크",
    website: "https://fount.co",
    thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    // 자산관리/금융 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    story: "파운트는 '누구나 전문가 수준의 자산관리를 받을 수 있어야 한다'는 신념으로 출발했습니다. AI 알고리즘이 시장 상황을 분석해 포트폴리오를 자동 리밸런싱하는 서비스를 개발, 하나은행과 함께 금융권 최초로 AI 로보어드바이저 IRP 일임 서비스를 출시했습니다.",
    interview: "\"퇴직연금 가입자 대부분이 원리금 보장 상품에 그냥 묶여 있어요. AI가 자동으로 리밸런싱해주면 장기 수익률이 크게 달라질 수 있습니다. 하나은행이 그 첫 번째 파트너가 되어주었습니다.\" — 김영빈 대표",
    hanaStory: "파운트는 하나은행과 금융권 최초 AI 로보어드바이저 IRP 퇴직연금 일임 서비스를 공동 출시했습니다. 하나원큐 앱을 통해 가입자들이 AI 포트폴리오 운용 서비스를 이용할 수 있습니다.",
    stats: [
      { value: "2016", label: "설립연도" },
      { value: "최초", label: "AI IRP 일임 서비스" },
      { value: "1,000억+", label: "운용 자산" }
    ]
  },
  {
    id: "jaranda",
    name: "자란다",
    slogan: "한 아이를 기르려면 온 마을이 필요하다",
    tags: ["에듀테크", "플랫폼"],
    cohort: "초기 파트너사",
    founded: "2015",
    ceo: "김민준",
    brandColor: "#F97316",
    oneLiner: "아이 돌봄·교육 선생님을 연결하는 O2O 에듀테크 플랫폼",
    website: "https://jaranda.kr",
    thumbnailUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    // 교육/아이 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    story: "자란다는 '일하는 부모와 좋은 선생님을 신뢰 있게 연결하자'는 아이디어에서 시작됐습니다. AI 매칭 알고리즘으로 아이의 성향과 학습 스타일에 맞는 선생님을 연결하고, 수업 일지·결제·소통을 앱 하나로 해결합니다. 하나은행과의 협업으로 안전결제 시스템을 도입하면서 부모들의 신뢰도가 크게 올라갔습니다.",
    interview: "\"부모들이 돌봄에서 가장 원하는 건 '신뢰'예요. 좋은 선생님을 찾는 것도 중요하지만, 결제가 안전하고 수업이 제대로 이뤄지는지 투명하게 확인할 수 있어야 합니다. 하나은행의 안전결제 인프라가 그 신뢰를 만들어줬어요.\" — 김민준 대표",
    hanaStory: "자란다는 하나원큐 애자일랩을 통해 하나은행 안전결제 시스템을 플랫폼에 통합했습니다. 선생님 급여 자동이체, 수업료 에스크로 서비스 등을 통해 플랫폼 신뢰도를 높였습니다.",
    stats: [
      { value: "2015", label: "설립연도" },
      { value: "140억+", label: "누적 투자 유치" },
      { value: "10만+", label: "누적 매칭 건수" }
    ]
  },
  {
    id: "changtalk",
    name: "창톡",
    slogan: "600만 자영업자의 장사 노하우 플랫폼",
    tags: ["플랫폼", "소상공인"],
    cohort: "15기",
    founded: "2020",
    ceo: "노승욱",
    brandColor: "#DC2626",
    oneLiner: "자영업자와 전문가를 연결하는 장사 노하우 공유 플랫폼",
    website: "https://changtalk.kr",
    thumbnailUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    // 소상공인/카페/식당 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    story: "창톡은 '왜 자영업자들은 혼자 고민해야 하나'라는 질문에서 시작됐습니다. 매장 운영, 메뉴 개발, 마케팅까지—현직 대표들의 실전 노하우를 1:1 상담으로 나눌 수 있는 플랫폼을 만들었습니다. 하나원큐 애자일랩 15기 선발을 계기로 소상공인 금융 서비스와 연계한 종합 지원 플랫폼으로 진화하고 있습니다.",
    interview: "\"자영업자들이 폐업하는 이유 1위는 사실 자금이 아니라 '고립감'이에요. 혼자 결정해야 하는데 믿을 만한 조언을 구할 곳이 없는 거죠. 저희가 그 벽을 허물고 싶었습니다.\" — 노승욱 대표",
    hanaStory: "창톡은 하나원큐 애자일랩 15기 선발 이후 하나은행 소상공인 대출 상품 연계 서비스를 개발했습니다. 창톡 플랫폼 내에서 하나은행 소상공인 금융 서비스에 바로 접근할 수 있는 기능을 구현했습니다.",
    stats: [
      { value: "2020", label: "설립연도" },
      { value: "600만", label: "잠재 타깃 자영업자" },
      { value: "15기", label: "하나원큐 애자일랩" }
    ]
  },
  {
    id: "paywork",
    name: "페이워크",
    slogan: "일한 만큼, 바로 받는 급여",
    tags: ["핀테크", "플랫폼"],
    cohort: "15기",
    founded: "2019",
    ceo: "손지인",
    brandColor: "#2563EB",
    oneLiner: "근무일수에 따라 당일 급여를 지급하는 핀테크 플랫폼",
    website: "https://paywork.io",
    thumbnailUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
    // 급여/결제 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    story: "페이워크는 '왜 급여는 한 달을 기다려야 하나'라는 단순한 질문에서 출발했습니다. 근무한 날만큼 그날 바로 급여를 받을 수 있는 '일당 지급' 서비스를 핀테크 기술로 구현했습니다. 중소기업 직원, 아르바이트생, 프리랜서 등 불규칙한 소득 구조를 가진 분들을 위한 금융 포용 서비스입니다.",
    interview: "\"급여일까지 버티지 못해 사채를 쓰는 사람들을 봤을 때 충격이었어요. '내가 일한 돈인데 왜 30일씩 기다려야 하지?' — 그 질문이 창업의 시작이었습니다.\" — 손지인 대표",
    hanaStory: "페이워크는 하나원큐 애자일랩 15기 선발 후 하나은행 급여 선지급 인프라와 연계해 서비스를 고도화했습니다. 하나은행 기업 고객사 직원들에게 페이워크 서비스가 제공됩니다.",
    stats: [
      { value: "2019", label: "설립연도" },
      { value: "15기", label: "하나원큐 애자일랩" },
      { value: "즉시", label: "급여 지급 속도" }
    ]
  },
  {
    id: "upstage-mono",
    id: "monolabs",
    name: "모노랩스",
    slogan: "시니어의 일상을 스마트하게",
    tags: ["플랫폼", "AI"],
    cohort: "16기",
    founded: "2021",
    ceo: "소태환",
    brandColor: "#7C3AED",
    oneLiner: "시니어 특화 디지털 헬스케어·생활편의 플랫폼",
    website: "https://monolabs.co.kr",
    thumbnailUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&q=80",
    // 시니어/헬스케어 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    story: "모노랩스는 '디지털에서 소외된 시니어를 위한 기술'을 만들겠다는 목표로 창업됐습니다. 복잡한 앱 대신 큰 글씨와 음성 안내로 디지털 서비스를 쉽게 이용할 수 있도록 설계된 시니어 특화 플랫폼입니다. 하나원큐 애자일랩 16기에 선발되어 시니어 금융 서비스 접근성 향상 프로젝트를 진행하고 있습니다.",
    interview: "\"부모님이 앱 설치하다가 포기하시는 걸 보면서 '왜 시니어를 위한 서비스는 없을까' 생각했어요. 기술이 복잡할 필요가 없잖아요. 단순하고 따뜻하면 됩니다.\" — 소태환 대표",
    hanaStory: "모노랩스는 하나원큐 애자일랩 16기 선발 이후 하나은행 시니어 뱅킹 서비스 UI 개선 프로젝트에 협력했습니다. 고령층 고객의 디지털 금융 접근성을 높이는 솔루션을 함께 개발하고 있습니다.",
    stats: [
      { value: "2021", label: "설립연도" },
      { value: "16기", label: "하나원큐 애자일랩" },
      { value: "1000만+", label: "국내 65세 이상 타깃" }
    ]
  },
  {
    id: "gongbuseonbae",
    name: "공부선배",
    slogan: "선배의 경험이 최고의 공부법",
    tags: ["에듀테크", "플랫폼"],
    cohort: "16기",
    founded: "2020",
    ceo: "이용운",
    brandColor: "#059669",
    oneLiner: "대학생 선배와 수험생을 연결하는 멘토링 에듀테크",
    website: "https://gongbuseonbae.com",
    thumbnailUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80",
    // 공부/멘토링 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    story: "공부선배는 '대학 합격의 노하우는 합격한 선배가 가장 잘 안다'는 생각에서 시작됐습니다. 원하는 대학·학과에 합격한 대학생 선배와 수험생을 1:1로 매칭해, 입시 전략부터 멘탈 관리까지 실전 경험을 나눕니다. 하나원큐 애자일랩 16기를 통해 청년 금융 교육 서비스와의 연계를 모색하고 있습니다.",
    interview: "\"학원 선생님보다 '작년에 붙은 선배'가 더 도움이 될 때가 있어요. 살아있는 경험을 나누는 게 저희의 가치입니다.\" — 이용운 대표",
    hanaStory: "공부선배는 하나원큐 애자일랩 16기에 선발되어 하나은행 청년 금융 교육 프로그램과 연계한 '대학생 금융 멘토링' 서비스를 시범 운영했습니다.",
    stats: [
      { value: "2020", label: "설립연도" },
      { value: "16기", label: "하나원큐 애자일랩" },
      { value: "50만+", label: "수험생 타깃" }
    ]
  },
  {
    id: "glowseoul",
    name: "글로우서울",
    slogan: "외국인도 쉽게, 한국 생활 금융",
    tags: ["핀테크", "플랫폼"],
    cohort: "16기",
    founded: "2021",
    ceo: "유정수",
    brandColor: "#DB2777",
    oneLiner: "국내 거주 외국인을 위한 생활·금융 서비스 플랫폼",
    website: "https://glowseoul.com",
    thumbnailUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=600&q=80",
    // 서울/외국인 이미지
    detailImageUrl: "https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?w=800&q=80",
    story: "글로우서울은 한국에 사는 외국인들이 겪는 불편함에서 출발했습니다. 은행 계좌 개설, 월세 납부, 공공요금 납부—한국어를 모르면 하나하나가 장벽입니다. 글로우서울은 이 모든 과정을 다국어로 안내하고 대행해주는 플랫폼으로, 국내 250만 외국인 거주자를 타깃으로 합니다.",
    interview: "\"저 자신이 외국에서 살면서 은행 계좌 하나 만드는 데 몇 주가 걸렸어요. '이 경험을 한국에서 없애보자'가 창업 동기입니다.\" — 유정수 대표",
    hanaStory: "글로우서울은 하나원큐 애자일랩 16기에서 하나은행과 외국인 특화 뱅킹 서비스 연계 프로젝트를 진행했습니다. 외국인 고객이 글로우서울 앱을 통해 하나은행 계좌를 비대면으로 개설할 수 있는 서비스를 개발했습니다.",
    stats: [
      { value: "2021", label: "설립연도" },
      { value: "250만", label: "국내 외국인 거주자" },
      { value: "16기", label: "하나원큐 애자일랩" }
    ]
  }
];
```

---

## 구현 시 주의사항

### 이미지 사용 원칙
- 모든 이미지는 Unsplash Source API 사용 (라이선스 무료, 상업 사용 가능)
- `?w=600&q=80` 파라미터로 최적화
- `loading="lazy"` 속성 필수 적용
- 이미지 로딩 실패 시 brandColor 배경으로 폴백

### 필터 로직
```javascript
// Home.jsx 내 필터 구현 예시
const [activeTag, setActiveTag] = useState("전체");

const filtered = activeTag === "전체"
  ? startups
  : startups.filter(s => s.tags.includes(activeTag));

const allTags = ["전체", "핀테크", "AI", "블록체인", "에듀테크", "플랫폼", "소상공인"];
```

### 라우팅
```javascript
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/startup/:id" element={<StartupDetail />} />
</Routes>

// StartupDetail.jsx
const { id } = useParams();
const startup = startups.find(s => s.id === id);
```

### Tailwind 커스텀 설정
```javascript
// tailwind.config.js
colors: {
  'hana': '#00B3A8',
  'hana-dark': '#009188',
  'hana-light': '#E6F7F6',
}
```

### 외부 링크
모든 `website` 링크는 `target="_blank" rel="noopener noreferrer"` 적용

---

## 참고 URL 정리 (실제 기업 홈페이지)

| 기업 | 홈페이지 |
|------|----------|
| 두나무 | https://www.dunamu.com |
| 업스테이지 | https://www.upstage.ai |
| 뤼튼 | https://wrtn.ai |
| 파운트 | https://fount.co |
| 자란다 | https://jaranda.kr |
| 창톡 | https://changtalk.kr |
| 페이워크 | https://paywork.io |
| 모노랩스 | https://monolabs.co.kr |
| 공부선배 | https://gongbuseonbae.com |
| 글로우서울 | https://glowseoul.com |
| 하나원큐 애자일랩 | https://www.kebhana.com/1QLab/index.jsp |
