const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // 3.14.1 이후 버전에서는 환영 메시지를 blog.config.js에서 설정하며, 여러 메시지를 쉼표 ','로 구분합니다.
  HEXO_HOME_BANNER_GREETINGS: [
  '기록 보관소입니다.'
  ], // 홈페이지 배너 문구
  
  HEXO_HOME_NAV_BUTTONS: false, // 홈페이지에 카테고리 대형 아이콘 버튼 표시 여부
  // 알려진 미해결 버그로, 모바일에서 true로 설정 시 이미지를 로드하지 못할 수 있습니다. 임시로 false 설정을 권장합니다.
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 홈페이지 배경 이미지가 스크롤 시 고정되는지 여부, true일 경우 스크롤 시 이미지가 움직이지 않음; false일 경우 마우스 스크롤에 따라 움직임
  // '읽기 시작' 버튼 표시 여부
  HEXO_SHOW_START_READING: true,
  
  // 메뉴 설정
  HEXO_MENU_INDEX: true, // 홈페이지 표시
  HEXO_MENU_CATEGORY: true, // 카테고리 표시
  HEXO_MENU_TAG: true, // 태그 표시
  HEXO_MENU_ARCHIVE: true, // 아카이브 표시
  HEXO_MENU_SEARCH: true, // 검색 표시
  HEXO_MENU_RANDOM: true, // 랜덤 이동 버튼 표시
  
  HEXO_POST_LIST_COVER: true, // 목록에 글 표지 표시
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // 목록에서 마우스 오버 시 확대
  
  HEXO_POST_LIST_COVER_DEFAULT: false, // 표지가 없을 경우 사이트 배경을 기본 표지로 사용
  HEXO_POST_LIST_SUMMARY: true, // 글 요약
  HEXO_POST_LIST_PREVIEW: false, // 글 미리보기
  HEXO_POST_LIST_IMG_CROSSOVER: false, // 블로그 목록 이미지 좌우 교차
  
  HEXO_ARTICLE_ADJACENT: true, // 이전 글 및 다음 글 추천 표시
  HEXO_ARTICLE_COPYRIGHT: true, // 글 저작권 표시
  HEXO_ARTICLE_RECOMMEND: true, // 관련 글 추천
  
  HEXO_WIDGET_LATEST_POSTS: true, // 최신 글 카드 표시
  HEXO_WIDGET_ANALYTICS: false, // 통계 카드 표시
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 댓글 영역으로 이동
  HEXO_WIDGET_DARK_MODE: true, // 야간 모드
  HEXO_WIDGET_TOC: true // 모바일에서 떠다니는 목차
}
export default CONFIG
