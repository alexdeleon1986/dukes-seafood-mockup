/** @type {import('next').NextConfig} */
const nextConfig = {
  // 2.1 — Every indexed WordPress URL ends in '/'. Match that so cutover URLs
  // don't each eat a 308 redirect hop.
  trailingSlash: true,

  // 2.5 — Blog/recipes content paths. UNCOMMENT once WordPress is moved to
  // wp.dukesseafood.com (SiteGround) and subdomain SSL is confirmed. Until then,
  // /blog and /recipes still resolve on the current WP apex; do NOT enable these
  // rewrites before the subdomain exists or the paths will 502.
  // This is a JM/JT decision (Phase 2.5 A vs B) — see handoff doc.
  //
  // async rewrites() {
  //   return [
  //     { source: '/blog/:path*', destination: 'https://wp.dukesseafood.com/blog/:path*' },
  //     { source: '/recipes/:path*', destination: 'https://wp.dukesseafood.com/recipes/:path*' },
  //     { source: '/wp-content/:path*', destination: 'https://wp.dukesseafood.com/wp-content/:path*' },
  //   ];
  // },

  // 2.6 — 301s live here once the redirect map (migration/redirect-map.csv) is
  // finalized from the Redirection-plugin export + Screaming Frog crawl.
  // async redirects() {
  //   return [
  //     // { source: '/menus-dukes/', destination: '/menus/', permanent: true },
  //   ];
  // },
};

export default nextConfig;
