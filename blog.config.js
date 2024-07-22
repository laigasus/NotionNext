// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    'ba2adc2f011c42899c1f9bec68474808',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 업데이트 내용 캐시 간격 단위(초), 즉 각 페이지는 5초의 순수한 정적 기간을 가지며 이 기간 동안 몇 번의 방문이 있어도 notion 데이터를 캡처하지 않습니다. 이 값을 높이면 Vercel 자원을 절약하고 동시에 액세스 속도를 높이는 데 도움이 되지만 기사 업데이트가 지연됩니다.
  THEME: process.env.NEXT_PUBLIC_THEME || 'simple', // 현재 테마는 themes 폴더 아래에서 지원하는 모든 테마를 찾을 수 있습니다. 테마 이름은 example, fukasawa, gitbook, heo, hexo, landing, matery, medium, next , nobelium , plog , simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 테마 전환 단추를 보일 지 여부입니다
  LANG: process.env.NEXT_PUBLIC_LANG || 'ko-KR', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || '', // 이를 비워 두면 현재 연도가 사용됩니다.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light 주간 모드, dark 야간 모드, 시간과 테마에 따라 자동 야간 모드
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 야간모드부터 시간까지, false시 끄고 시간에 따라 야간모드 자동전환

  TAG_SORT_BY_COUNT: true, // 태그가 기사 수의 역순으로 배열되어 있는지 여부와 기사가 많은 태그가 앞에 나열됩니다.
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true, // 같은 이름의 태그에 대해 태그의 색상을 구별할 지 여부

  // 3.14.1 버전 후 환영 문구를 여기에 구성하고 영어 쉼표를 분리하여 여러 환영 문구의 타이핑 효과를 지원할 수 있습니다.
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '기록 보관소입니다.',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // 3.12.부터 Menu 타입을 지원합니다. 버전 0부터 각 테마는 테스트 기능인 원래 페이지 유형을 대체하는 유연한 2차 메뉴 구성을 점진적으로 지원합니다.

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Laigasus', // 닉네임
  BIO: process.env.NEXT_PUBLIC_BIO || 'INFJ. 德業一致', // 저자소개
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://laigasus.vercel.app', // 사이트 주소
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog', // 사이트 키워드는 영문 쉼표로 구분

  // 소셜 링크는 공백이 필요하지 않습니다. 예 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'okjaeook98@gmail.com', // 이메일 주소 okjaeook98@gmail.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/laigasus', // github https://github.com/laigasus
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // telegram https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // linkedIn 메인 화면
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // instagram 주소
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // 빌리빌리
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', // 小红书主页
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '', // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion 도메인의 경우 자신의 도메인으로 리버스 에이전트를 실행할 수 있으며 리버스 에이전트가 무엇인지 모르면 이 항목을 수정하지 마십시오.

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 설정, 기본값은 /public/ favicon입니다. ico, https://img.imesong.com/favicon.png 등 온라인 이미지 지원

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 이미지 압축폭 기본값으로 블로그 표지와 글 내용이 작을수록 이미지 로딩이 빠릅니다
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 글과 이미지를 클릭해서 확대한 화질의 폭은, 웹페이지의 실제 전시 폭을 나타내지 않습니다.
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // 랜덤 이미지 API, 아래 키워드가 설정되지 않은 경우 홈페이지 표지, 프로필 사진, 문장 표지 그림이 랜덤 이미지로 대체됩니다.
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'images.unsplash.com', // 그림 바꾸기 url 키워드를 트리거합니다(여러 개의 지원자는 쉼표로 구분됩니다). 그림 주소에 이 키워드가 포함되어 있을 경우에만 위 무작위 그림 url로 바꿉니다.
  // eg: images. unsplash. com(노션 이미지의 모든 그림을 대체합니다) 만약 당신이 notion에 랜덤 그림 url을 추가했다면, 공교롭게도 그 서비스가 실행 중이거나 끊겼을 때, 모든 그림을 원클릭으로 전환하고 싶다면, 이 url을 여기에 설정할 수 있습니다.
  // 기본적으로는 notion에 올린 너의 홈페이지 커버 이미지와 프로필 사진도 교체해 줄 테니, 홈페이지 커버 이미지와 프로필 사진은 다른 도상에 두고 notion에 link를 배치하는 것을 권장합니다.

  // START ************사이트 글꼴*****************
  // ['font-serif','font-sans'] 참고 https://www.jianshu.com/p/55e410bd2115
  // 뒷면 칸으로 구분된 font-light의 글자 굵기는 기본 굵기입니다. https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // 글꼴 CSS https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 산세리프 글꼴 예'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 산세리프 글꼴 예'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 글꼴 아이콘 주소; 옵션 /css/all. min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************사이트 글꼴*****************

  // 경로와 컴포넌트 매핑, 경로별로 주제를 나타내는 어떤 컴포넌트
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',
    '/': 'LayoutIndex',
    '/archive': 'LayoutArchive',
    '/page/[page]': 'LayoutPostList',
    '/category/[category]': 'LayoutPostList',
    '/category/[category]/page/[page]': 'LayoutPostList',
    '/tag/[tag]': 'LayoutPostList',
    '/tag/[tag]/page/[page]': 'LayoutPostList',
    '/search': 'LayoutSearch',
    '/search/[keyword]': 'LayoutSearch',
    '/search/[keyword]/page/[page]': 'LayoutSearch',
    '/404': 'Layout404',
    '/tag': 'LayoutTagIndex',
    '/category': 'LayoutCategoryIndex',
    '/[prefix]': 'LayoutSlug',
    '/[prefix]/[slug]': 'LayoutSlug',
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
    '/signin': 'LayoutSignIn',
    '/signup': 'LayoutSignUp'
  },

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 페이지 콘텐츠 복제가 기본적으로 허용되는지 여부, false로 설정되어 있으면 전체 스택에서 콘텐츠 복제가 금지됩니다.
  // 오른쪽 단추 메뉴 사용자 정의
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // 시스템 메뉴를 덮어쓰는 오른쪽 버튼 메뉴 사용자 정의
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH ||
    true, // 테마 바꾸기
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE || true, // 어두운 색 모드를 보일 지 여부
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK || true, // 공유 링크를 표시할 지 여부
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST || true, // 임의 블로그를 표시할 지 여부
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY || true, // 분류를 표시할 지 여부
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_TAG || true, // 탭 보이기 여부

  // 사용자 정의 외부 스크립트, 외부 스타일
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 사이드바 레이아웃 반전 여부 (왼쪽, 오른쪽, 왼쪽) 지원되는 테마: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 작은 플러그인이 당신을 보여줍니다.facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 연결 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 활성화 messenger 채팅 기능
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 활성화 messenger 채팅 기능 예: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********코드관련********
  // PrismJs 코드관련
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER:
    'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 코드테마 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 코드 블록 기본 테마
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 밝은 색/ 어두운 색 모드 코드 테마를 켤 지 여부입니다. 켜면 다음 테마가 표시됩니다.
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 파스텔 패턴 모티브
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 짙은 색 패턴 테마

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 코드 왼쪽 상단에 Mac의 빨간색, 노란색, 초록색 아이콘 보이기
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 줄 번호 표시 여부
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 접이식 코드 상자 지원 여부
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 접이식 코드는 기본적으로 확장된 상태입니다.

  // END********코드관련********

  // Mermaid 차트 CDN
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN:
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 기사 공유 기능, 하단에 공유 막대가 표시됩니다
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,facebook,twitter,telegram,messenger,line,reddit,linkedin', // 나눔의 서비스, 순서대로 표시, 쉼표 구분
  // 지원되는 모든 공유 서비스：link(링크복사),wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  // 문장 URL 접두사
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // POST 유형 문장의 기본 경로 접두사, 예를 들어 기본 POST 유형의 경로는 /article/[slug]입니다.
  // 이 설정이 ' '비어 있으면 글에 접두사 경로가 없습니다
  // WP와 같은 맞춤 기사 링크 형식을 지원하는 기능: https://wordpress.org/documentation/article/customize-permalinks/ , 현재 %year%/%month%/%day%만 실행 중입니다.
  // 예: 접두사 article + 타임스탬프로 연결하려면 'article/%year%/%month%/%day%' 로 변경하십시오.

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 글 목록 스타일: 페이지 번호 페이지 나누기, 한 페이지 스크롤 로딩
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // 목록에 기사 미리 보기를 불러올 지 여부
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // 블로그 줄 수 미리 보기
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // 추천 글 수
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 정렬 방식 'date'는 시간별로, 'notion'은 notion에 의해 제어됩니다.

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 기사 읽기 시간 초과, 단위 초; 시간 초과 후 404 페이지로 이동

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 여기에서 보기 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 백그라운드를 관리하는 KEY, 코드에 노출되지 않도록 합니다. https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 클라이언트 검색을 위한 KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // Algolia에서 데이터베이스로 사용하기 위한 인덱스를 만듭니다.
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 첫 화면에 가장 많이 보여지는 카테고리 수, 0은 무제한
  PREVIEW_TAG_COUNT: 16, // 첫 화면에 가장 많이 보이는 탭 수, 0은 제한 없음

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || true, // 제목 아이콘을 보일 지 여부
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 그림책 보기 클릭 금지, 친구 링크 페이지의 그림책에 링크 삽입하기 편리

  //   ********동적 효과 상관관계********
  // 마우스 클릭 불꽃놀이 효과
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // 사용유무
  // 불꽃 색상 https://github.com/Vixcity
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 마우스 포인터 사용
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || true,
  // 이 두 가지는 마우스를 따라 켜야만 작동합니다.
  // 마우스 타입 1: 로드셀 산점 2: 하강셀 산점 3: 상승셀 산점 4: 가장자리에서 마우스로 이동셀 산점 5: 추적셀 산점 6: 경로 라인 7: 집합셀 산점 8: 집합셀 9: 이동셀 산점 10 : 상승입자 11 : 회전랜덤 색입자 12 : 원뿔 방사 청색입자 따라가기
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // 마우스 클릭 필터 색상 #xxxxxx 또는 rgba(r,g,b,a)

  // 벚꽃이 내리면 효과
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false,
  // 플로팅 라인 효과
  NEST: process.env.NEXT_PUBLIC_NEST || false,
  // 다이나믹 리본 효과
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,
  // 정적 리본 효과
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false,
  // 별하늘 특수효과. 모두 다크모드일 때 유효합니다.
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false,

  //   ********위젯 구성 요소 연결********
  // AI 기사 요약 생성 @see https://docs_s.tianli0.top/
  TianliGPT_CSS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Chatbase에 chatbase봇 https://www.chatbase.co/ 을 보일 지 여부
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 로봇 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 표시할 지 여부
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 자체 서버 구축 가능
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 배경에서 ID 가져오기
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',
  // 서스펜션 부속
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 애완용 액세서리 보일 지 여부
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 걸쇠 모형 주소 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 블로그 테마를 바꾸려면 애완 동물 걸쇠를 누르십시오

  // 음악 재생 플러그인
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 음악 재생 플러그인을 사용할 지 여부
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 왼쪽 하단에 재생과 전환을 표시할 지 여부, 플레이어를 사용하면 자동 재생을 켜고 숨기면 배경음악과 유사한 방식으로 재생되며 취소와 일시정지가 불가능합니다.
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 자동 재생 여부 단, 자동 재생이 되지 않는 경우가 많습니다(모바일 기기에서는 자동 재생이 지원되지 않음)
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 가사 표시 형식, 옵션 값: 3 | 1 | 0 (0: lrc 가사 사용 안 함, 1:lrc 형식 문자열, 3:lrc 파일 url) (가사 경로가 설정된 경우, meting이 잘못되었습니다)
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 기본 재생 모드, 순서 list, 랜덤 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 예시 음악 목록. 다음 설정 외에 가사도 설정할 수 있으며, 구체적인 설정 항목은 이 문서 https://aplayer.js.org/ #/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
        'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
        'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // MetingJS를 켜고 플랫폼에서 플레이리스트를 가져오시겠습니까? 사용자 정의 MUSIC_PLAYER_AUDIO_LIST 적용되며, 더 많은 설정 정보: https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 음악 플랫폼，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 해당 플레이리스트의 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 옵션값: 3 | 1 | 0 (0: lrc 가사, 1:lrc 형식의 문자열, 3:lrc 파일 url)

  //   ********위젯 구성 요소 연결********
  // ----> 댓글 대화형 WALINE VALINE GISCUSDIS UTTERRANCES GITALK를 동시에 여러 개 열 수 있습니다

  COMMENT_HIDE_SINGLE_TAB:
    process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, // Whether hide the tab when there's no tabs. 코멘트 구성 요소가 하나만 있을 때 토글 구성 요소의 탭을 숨길 지 여부

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert 백엔드 주소 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO 백엔드 주소 텐센트 클라우드 환경 envId, Vercel 환경 도메인 이름 입력, 튜토리얼: https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 블로그 목록에 댓글 수를 표시할 지 여부
  COMMENT_TWIKOO_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL ||
    'https://cdn.staticfile.net/twikoo/1.6.17/twikoo.min.js', // twikoo 클라이언트 cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
    process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 코드 저장소 이름. 예를 들어 'tangly1024/NotionNext' 입니다. 더 많은 문서 참조 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 당신의 깃허브 창고 이름 e. g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 너의 Github Repo IDe. g (giscus 설정이 끝나면 바로 볼 수 있습니다)
  COMMENT_GISCUS_CATEGORY_ID:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // Github Discussions 내의 분류 ID (giscus 설정을 완료하면 볼 수 있습니다)
  COMMENT_GISCUS_MAPPING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 당신의 Github Discussions 는 어떤 방식으로 문장을 교정할 것인지, 'pathname' 을 미리 설정합니다
  COMMENT_GISCUS_REACTIONS_ENABLED:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // Giscus에서 문장 이모티콘 '1' 을 켜는지 여부 '0' 을 켜는지 여부 미리 설정한 값을 끕니다
  COMMENT_GISCUS_EMIT_METADATA:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // Giscus에서 Metadata '1' 을 추출할지 여부 '0' 을( 를) 켜고 끄기 미리 설정하기 닫기
  COMMENT_GISCUS_INPUT_POSITION:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 너의 Giscus 게시글 위치 'bottom' 끝 'top' 맨 위에 'bottom' 미리 설정하기
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 당신의 지스쿠스 언어 e. g 'en', 'zh-TW', 'zh-CN', 사전 설정 'en'
  COMMENT_GISCUS_LOADING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // Giscus를 불러올 때 'lazy' 를 설정합니다.
  COMMENT_GISCUS_CROSSORIGIN:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 너의 Giscus는 'anonymous'라는 도메인을 넘나들 수 있다.

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js', // change this if you're using self-hosted version

  // Gitalk 리뷰 플러그인 참고하기 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // Github 저장소 이름, 예를 들어 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 사용자 이름 e. g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 관리자 사용자 이름(일반적으로 사용자 이름) g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20비트 ID, Gitalk 백그라운드에서 가져오기
  COMMENT_GITALK_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40비트 ID, Gitalk 백그라운드에서 가져오기
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // Facebook과 같은 간섭 없는 모드
  COMMENT_GITALK_JS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk 클라이언트 js cdn
  COMMENT_GITALK_CSS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk 클라이언트  css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter대화방 see https://gitter.im/ 필요 없으면 빈칸 두기
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN:
    process.env.NEXT_PUBLIC_VALINE_CDN ||
    'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 이 설정은 국내 사용자 정의 도메인 사용자들에게 적용되며, 해외 버전은 자동으로 감지됩니다(수동작성 필요 없음) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
    process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 백스테이지와 매칭하여 리뷰를 관리할 수 있습니다. https://github.com/DesertsP/Valine-Admin  리뷰 보기 편리, 이메일 알림, 스팸 댓글 필터링 기능

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // Waline 댓글 주소를 다 설정해 주세요 예를 들어 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 최신 평론

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME:
    process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME:
    process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- 评论插件

  // ----> 사이트 통계
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // 51la 사이트 통계 https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // 微软 Clarity 站点分析
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合

  // <---- 站点统计

  // START---->수익관련

  // 구글 광고
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 월드 와이드 광고
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 월드 와이드 웹 파트 ID 만들기
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // WWADS 광고 차단 플러그인을 켤지 여부를 검사합니다. 켜면 광고 게시판에 @see https://github.com/bytegravity/whitelist-wwads 라고 문자로 표시됩니다.
  
  // END<----수익관련

  // 사용자 정의 설정notion 데이터베이스 필드 이름
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 문장 종류，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // type 문장 유형이 이 값과 같을 때 블로그 텍스트입니다.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // type 문장 유형이 이 값과 같을 때 단일 페이지입니다.
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // type 문장 유형이 이 값과 같을 경우 공지합니다.
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // type 문장 유형이 이 값과 같을 때 메뉴가 됩니다.
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // type 문장 유형이 이 값과 같을 때 하위 메뉴입니다.
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 글의 제목
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // status 상태 값이 같을 때 발행되며, 중국어가 될 수 있습니다.
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // status 상태 값이 같을 경우 게시물을 숨깁니다. 중국어로 할 수 있습니다. 다른 페이지 상태는 블로그에 표시되지 않습니다.
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 필드를 확장하고 복잡한 업무를 위해 json-string을 저장합니다.
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // RSS 피드를 사용할 지 여부
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // mailichimp 메일 구독자 목록 ID 오픈, 자세한 사용법은 문서 참조
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // mailichimp 메일 구독 APIkey 열기

  // ANIMATE.css 动画
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // 动画CDN

  // 웹사이트 이미지
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 마운트된 이미지 주소 불러오기, base64 또는 url 지원
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 이 설정은 유효하지 않으므로 사용하지 마십시오. AMAZON 스키마는 더 이상 지원되지 않으며 Notion 스키마만 지원됩니다. ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 글 그림자에 자동으로 음영을 줄 지 여부
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion 그림 압축 폭

  // 설정 취소
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 저자 프로필 사진, notion의 ICON으로 덮여 있습니다. ICON이 없으면 public 디렉터리 아래의 avatar.png를 가져옵니다
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // 사이트 제목, notion 의 페이지 제목으로 덮어씁니다. 공백은 두지 마십시오. 그렇지 않으면 서버가 컴파일할 수 없습니다.
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 첫 화면 배경의 큰 그림은 notion 의 표지 그림으로 덮어쓰게 됩니다. 표지 그림이 없으면 코드 안의 /public/bg_image 를 사용합니다. jpg 파일
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || '기술 메모장', // 사이트 설명, notion 페이지 설명으로 덮어쓰기

  // 개발관련
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 디버그 단추 보일 지 여부
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === 'build' ||
    process.env.npm_lifecycle_event === 'export', // 기본적으로 패키징 과정에서 캐시가 켜지며 개발 또는 실행 시 이 기능을 켜는 것은 큰 의미가 없습니다.
  isProd: process.env.VERCEL_ENV === 'production' || process.env.EXPORT, // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // 컴파일된 내용을 보여줄지 여부와 크기
  VERSION: process.env.NEXT_PUBLIC_VERSION // 버전 번호
}

module.exports = BLOG
