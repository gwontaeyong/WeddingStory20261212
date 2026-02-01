export type InviteConfig = typeof invite;

export const invite = {
  meta: {
    title: "태용 ♥︎ 재이 결혼합니다",
    description: "2026년 3월 21일 토요일 오후 2시, 라온컨벤션 3F 라온홀",
    // 배포 후 실제 URL로 바꿔주세요 (공유/OG에 사용)
    siteUrl: "",
    // public/og.jpg로 교체 (선택)
    ogImage: "/og.svg",
  },

  hero: {
    smallTitle: "Wedding Invitation",
  },

  couple: {
    groom: { name: "태용", phone: "010-0000-0000" },
    bride: { name: "재이", phone: "010-0000-0000" },
  },

  schedule: {
    // 로컬 시간(한국: Asia/Seoul)
    dateTimeLocal: "2026-03-21T14:00:00",
    dateText: "2026.03.21 (토)",
    timeText: "오후 2:00",
    durationMinutes: 90,
    timezone: "Asia/Seoul",
  },

  location: {
    venueName: "라온컨벤션 3F 라온홀",
    address1: "서울특별시 강남구 테헤란로 123",
    address2: "",
    transport: [
      { title: "지하철", body: "2호선 역삼역 3번 출구 도보 5분" },
      { title: "주차", body: "건물 지하주차장 2시간 무료" },
    ],
  },

  message: {
    subtitle: "소중한 분들을 모십니다",
    body: `서로의 하루가 되어
함께 걸어가려 합니다.

귀한 걸음 하시어
두 사람의 시작을 축복해 주세요.`,
  },

  timeline: [
    { time: "13:30", title: "하객 입장" },
    { time: "14:00", title: "예식 시작" },
    { time: "15:30", title: "피로연" },
  ],

  media: {
    // public/hero.jpg 를 추천 (세로 3:4)
    heroImage: "/hero.svg",
    // public/gallery/1.jpg ... 넣으면 자동 표시
    galleryImages: [
      "/gallery/1.svg",
      "/gallery/2.svg",
      "/gallery/3.svg",
      "/gallery/4.svg",
      "/gallery/5.svg",
      "/gallery/6.svg",
    ],
  },

  accounts: {
    groom: [
      { name: "신랑 태용", bank: "국민", account: "123456-01-234567", note: "축하해 주셔서 감사합니다" },
    ],
    bride: [
      { name: "신부 재이", bank: "신한", account: "110-123-456789", note: "" },
    ],
  },

  // RSVP(참석 여부) — 구글폼/네이버폼 링크를 넣으면 됩니다.
  rsvp: {
    link: "https://forms.gle/xxxxxxxxxxxxxxxxx",
  },
} as const;
