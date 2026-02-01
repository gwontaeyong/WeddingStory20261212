/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ GitHub Pages 등 정적 호스팅을 원하면 아래를 유지하세요.
  //    (Vercel만 쓸 거면 output:'export' 제거해도 됩니다)
  output: 'export',
  images: { unoptimized: true },

  // ✅ GitHub Pages에 올릴 때만 아래 2개를 레포명으로 켜세요.
  // basePath: '/REPO_NAME',
  // assetPrefix: '/REPO_NAME/',
};

export default nextConfig;
