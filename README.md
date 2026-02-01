# 모바일 청첩장 (Next.js) — 완성형 템플릿

이 프로젝트는 **Next.js(App Router) 기반 모바일 청첩장 템플릿**입니다.
- ✅ Vercel(권장)로 즉시 호스팅 가능
- ✅ GitHub Pages 정적 배포도 가능(Static export)
- ✅ 내용은 `src/invite.config.ts`만 수정하면 끝

## 1) 로컬 실행
```bash
npm i
npm run dev
# http://localhost:3000
```

## 2) 내용 수정(가장 중요)
`src/invite.config.ts`에서
- 이름, 날짜, 장소, 주소, 연락처, 갤러리 사진, 계좌 안내 등 수정하세요.

## 3) Vercel 배포(가장 쉬움)
1. 이 폴더를 GitHub에 푸시
2. Vercel에서 Import → Deploy

## 4) GitHub Pages 배포(정적 export)
> 레포 이름이 `my-invite`라면, GitHub Pages는 `https://<USER>.github.io/my-invite` 형태입니다.

1. `next.config.mjs`에서 `basePath/assetPrefix`를 설정하세요.
2. 빌드/배포
```bash
npm run deploy:gh
```

## 5) 자주 묻는 것
- 지도는 기본적으로 **Google Maps iframe**을 사용합니다(키 필요 없음).
- RSVP는 구글폼 링크를 넣거나, 외부 설문 링크를 넣는 방식으로 구현했습니다(서버 없이 안정적).
# 개발/배포 가이드

## 개발 환경
- Node.js 20 사용
- `.nvmrc` 포함 (nvm 사용 시 `nvm use`)

## 실행
```bash
npm run dev
```

## 빌드 (정적 export 포함)
```bash
npm run export
```

## S3 배포
```bash
export S3_BUCKET=네-버킷-이름
npm run deploy:s3
```

## S3 배포 (드라이런)
```bash
export S3_BUCKET=네-버킷-이름
npm run deploy:s3:dry
```
