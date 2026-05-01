# 하나원큐 디자인 시스템

## 실제 앱 스크린샷 분석 기반 (2026.05)

> 9장의 실제 하나원큐 앱 화면에서 추출한 토큰.
> 목업 개발 시 이 파일을 기준으로 스타일 적용.

---

## 1. 컬러 토큰

### Brand / Primary
```css
--hana-primary:        #00B3A8;   /* 메인 틸-그린: 버튼, 금리수치, 액티브 탭, 태그 */
--hana-primary-dark:   #009188;   /* hover / pressed 상태 */
--hana-primary-light:  #E6F7F6;   /* 연한 배경, 칩 배경 (적금 페이지 히어로) */
--hana-primary-text:   #007A72;   /* 텍스트 위 primary 사용 시 (접근성 확보) */
```

### Accent (보조 강조)
```css
--hana-accent-pink:    #FF4D6A;   /* 신상품 배지, 알림 뱃지 (N) */
--hana-accent-blue:    #4A90D9;   /* 하이챗봇 AI 아이콘 */
--hana-accent-purple:  #B39DDB;   /* 홈 히어로 그라데이션 보조색 */
```

### Background
```css
--bg-hero:      linear-gradient(180deg, #C9D4F0 0%, #DFD9F0 50%, #E8DFF5 100%);
                /* 홈 & 자산 상단 히어로 — 라벤더-블루 그라데이션 */
--bg-page:      #F2F2F7;   /* 페이지 기본 배경 (iOS 시스템 그레이 계열) */
--bg-card:      #FFFFFF;   /* 카드, 모달, 입력필드 배경 */
--bg-section:   #F8F8F8;   /* 섹션 구분 배경 (약한 그레이) */
--bg-hero-product: linear-gradient(135deg, #E8F5F4 0%, #F0FAF9 100%);
                /* 상품 페이지 상단 — 연한 틸 그라데이션 */
```

### Text
```css
--text-primary:    #1A1A1A;   /* 메인 타이틀, 금액 */
--text-secondary:  #4A4A4A;   /* 카드 제목, 메뉴 텍스트 */
--text-tertiary:   #8E8E93;   /* 보조 설명, 날짜, 해시태그 */
--text-disabled:   #C7C7CC;   /* 비활성 상태 */
--text-primary-on: #FFFFFF;   /* primary 버튼 위 텍스트 */
--text-teal:       #00B3A8;   /* 금리 수치, 강조 수치 */
--text-pink:       #FF4D6A;   /* 신상품 배지 텍스트 */
```

### Border / Divider
```css
--border-card:    rgba(0,0,0,0.06);   /* 카드 테두리 (은은함) */
--border-default: #E5E5EA;            /* 일반 구분선 */
--border-primary: #00B3A8;            /* 포커스, 선택된 태그 테두리 */
--divider:        #F2F2F7;            /* 섹션 사이 구분 */
```

### Semantic
```css
--color-positive:  #00B3A8;   /* 상승, 이익 (틸 계열로 통일) */
--color-negative:  #FF3B30;   /* 하락, 오류 */
--color-warning:   #FF9500;   /* 경고 */
--color-info:      #007AFF;   /* 안내 */
```

---

## 2. 타이포그래피

### Font Family
```css
--font-family: 'Pretendard', 'Apple SD Gothic Neo', -apple-system, sans-serif;
/* 앱 전반 한국어 최적화 산세리프 */
```

### Scale (실측 기반)
```css
/* 금액/히어로 */
--text-display:  28px, weight 700, letter-spacing -0.5px;
/* 예: "12,084,730원" */

/* 페이지 타이틀 */
--text-h1:       22px, weight 700, letter-spacing -0.3px;
/* 예: "퍼스트 손님을 위한 혜택", "상품" */

/* 섹션 헤더 */
--text-h2:       18px, weight 700, letter-spacing -0.2px;
/* 예: "놓치면 안 되는 꿀 이벤트", "모든 상품" */

/* 카드 타이틀 */
--text-h3:       17px, weight 600, letter-spacing -0.2px;
/* 예: "달려라 하나 적금", "현재 보유중인 쿠폰 1개" */

/* 본문 */
--text-body:     15px, weight 400, letter-spacing 0px;
/* 예: 카드 설명, 메뉴 리스트 */

/* 보조/캡션 */
--text-caption:  13px, weight 400, letter-spacing 0px;
/* 예: "퍼스트 손님을 위한 쿠폰", 날짜, 해시태그 */

/* 레이블/배지 */
--text-label:    12px, weight 600, letter-spacing 0px;
/* 예: "신상품", "계좌이동서비스", "하나 합" */
```

---

## 3. 컴포넌트 스펙

### 카드 (Card)
```css
background:    #FFFFFF;
border-radius: 16px;
box-shadow:    0 2px 8px rgba(0,0,0,0.06);
padding:       20px;

/* 리스트형 카드 (적금 목록) */
border-radius: 12px;
padding:       18px 20px;
```

### 버튼
```css
/* Primary (보내기) */
background:    #00B3A8;
color:         #FFFFFF;
border-radius: 50px;      /* pill 형태 */
height:        52px;
font-size:     17px;
font-weight:   600;

/* Secondary (가져오기) */
background:    #FFFFFF;
border:        1.5px solid #E5E5EA;
color:         #1A1A1A;
border-radius: 50px;
height:        52px;

/* 텍스트 링크 버튼 ("확인하기 >", "전체보기 >") */
color:         #8E8E93;
font-size:     14px;
font-weight:   400;
```

### 배지 / 태그 / 칩
```css
/* 신상품 배지 (핑크) */
background:    #FF4D6A;
color:         #FFFFFF;
border-radius: 100px;
padding:       3px 8px;
font-size:     12px;
font-weight:   700;

/* 기능 태그 (계좌이동서비스, 하나 합) */
background:    transparent;
border:        1px solid #00B3A8;
color:         #00B3A8;
border-radius: 100px;
padding:       3px 10px;
font-size:     12px;

/* 상단 카테고리 탭 (조회/이체/자산관리) */
background:    #1A1A1A;   /* 선택됨 */
color:         #FFFFFF;
border-radius: 100px;
padding:       8px 18px;
font-size:     15px;
font-weight:   600;

/* 비선택 탭 */
background:    #F2F2F7;
color:         #4A4A4A;
```

### 바텀 네비게이션
```css
height:           64px;
background:       #FFFFFF;
border-top:       0.5px solid #E5E5EA;

/* 탭 구성: 홈 / 자산(W원) / 상품(쇼핑백) / 투자(차트) / 메뉴(≡) */
/* 액티브: 채워진 아이콘 + 레이블 */
--tab-active-color:   #1A1A1A;   /* 홈탭: 검정 채움 */
--tab-inactive-color: #8E8E93;
--tab-label-size:     10px;
```

### 아이콘
```css
/* 그리드 아이콘 (상품 페이지 카테고리) */
size:          40px (아이콘 영역)
icon-size:     26px
/* 컬러: 각 카테고리별 고유 색상 사용 (틸, 파랑, 핑크, 보라, 주황 등) */

/* 네비/기능 아이콘 */
size:          24px
color:         #8E8E93 (비활성), #1A1A1A (활성)
```

### 입력 / 검색
```css
background:    #FFFFFF;
border-radius: 12px;
border:        none;
box-shadow:    0 1px 4px rgba(0,0,0,0.08);
height:        48px;
padding:       0 16px;
font-size:     15px;
placeholder:   #C7C7CC;
```

### 히어로 섹션 (홈 상단)
```css
background:    linear-gradient(180deg, #C9D4F0 0%, #E8DFF5 100%);
padding:       20px 20px 32px;
/* 계좌명: 13px gray, 금액: 28px bold black */
/* 버튼 쌍: 가져오기(흰) + 보내기(틸), border-radius 50px */
```

### 뉴스/콘텐츠 리스트
```css
/* 썸네일: 60×60px, border-radius 8px */
/* 제목: 15px 600 검정, 2줄 말줄임 */
/* 해시태그: 13px #8E8E93, 날짜: 동일 */
/* 아이템 간격: 20px */
```
```

---

## 4. 레이아웃 & 간격

```css
/* 기준 뷰포트 */
--viewport-width:   390px;   /* iPhone 14 기준 */
--safe-top:         59px;    /* 상태바 + 앱바 */
--safe-bottom:      83px;    /* 바텀탭 + 홈인디케이터 */

/* 페이지 좌우 여백 */
--page-padding-x:   20px;

/* 카드 간격 */
--card-gap:         12px;

/* 섹션 간격 */
--section-gap:      24px;

/* 아이콘 그리드 */
/* 4열, 아이콘+레이블 80px 단위 */
```

---

## 5. 모션 (관찰 기반 추정)

```css
/* 탭 전환 */
transition: all 0.2s ease;

/* 카드 hover/press */
transform: scale(0.98);
transition: transform 0.1s ease;

/* 페이지 슬라이드 */
/* 우→좌 슬라이드인 (네이티브 iOS 네비게이션 패턴) */
```

---

## 6. 웹 구현 시 적용 방법 (Tailwind 커스텀)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'hana': {
          primary:   '#00B3A8',
          dark:      '#009188',
          light:     '#E6F7F6',
          text:      '#007A72',
        },
        'hana-pink':   '#FF4D6A',
        'hana-gray': {
          50:  '#F8F8F8',
          100: '#F2F2F7',
          200: '#E5E5EA',
          400: '#C7C7CC',
          600: '#8E8E93',
          800: '#4A4A4A',
          900: '#1A1A1A',
        }
      },
      borderRadius: {
        'card': '16px',
        'card-sm': '12px',
        'pill': '50px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-lg': '0 4px 16px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        'sans': ['Pretendard', 'Apple SD Gothic Neo', '-apple-system', 'sans-serif'],
      }
    }
  }
}
```

---

## 7. 핵심 디자인 원칙 (관찰 요약)

1. **여백이 넓다** — 카드 내부 20px, 섹션 간 24px 이상. 답답하지 않음.
2. **색은 아낀다** — 틸(`#00B3A8`)은 강조 포인트에만. 배경·카드는 흰색/회색 중심.
3. **카드가 기본 단위** — 모든 정보를 흰 카드로 묶고 라운드 처리.
4. **금액과 금리는 틸** — 숫자 강조는 항상 primary 컬러 적용.
5. **바텀탭 5구성** — 홈/자산/상품/투자/메뉴. 탭바는 항상 흰 배경.
6. **배지는 pill** — 모든 태그·배지는 border-radius 100px (완전 원형).
7. **히어로는 라벤더** — 홈·자산 상단만 예외적으로 그라데이션 배경 사용.
