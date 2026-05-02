/**
 * 태그별 칩 색상 맵 — 필터 칩(Home), 카드 태그(Home/StartupDetail) 공통 사용
 * on  : 필터 칩 선택(active) 상태
 * off : 필터 칩 비선택 / 카드·상세 태그 칩 상태
 */
export const tagColors = {
  '전체':    { on: 'bg-primary text-white',        off: 'bg-primaryLight text-primaryText' },
  '핀테크':  { on: 'bg-accentBlue text-white',     off: 'bg-accentBlueLt text-accentBlue' },
  'AI':      { on: 'bg-accentPurpleDk text-white', off: 'bg-accentPurpleLt text-accentPurpleDk' },
  '블록체인': { on: 'bg-hanaGray-900 text-white',   off: 'bg-hanaGray-100 text-hanaGray-600' },
  '에듀테크': { on: 'bg-warning text-hanaGray-900', off: 'bg-warningLt text-warning' },
  '플랫폼':  { on: 'bg-info text-white',           off: 'bg-infoLt text-info' },
  '소상공인': { on: 'bg-accentPink text-white',     off: 'bg-accentPinkLt text-accentPink' },
};

const fallback = { on: 'bg-hanaGray-900 text-white', off: 'bg-hanaGray-100 text-hanaGray-600' };

export function tagChipClass(tag, isActive = false) {
  const colors = tagColors[tag] ?? fallback;
  return isActive ? colors.on : colors.off;
}
