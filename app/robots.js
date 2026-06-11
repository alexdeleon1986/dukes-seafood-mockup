const BASE = 'https://dukesseafood.com';

export default function robots() {
  const isProd = process.env.VERCEL_ENV === 'production';

  // On preview/development deploys, disallow everything so the Vercel preview
  // URL never gets crawled or indexed (belt-and-suspenders with the layout
  // robots:noindex in generateMetadata).
  if (!isProd) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    };
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
