import { Newsreader, Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const serif = Newsreader({ subsets: ['latin'], weight: ['400','500'], style: ['normal','italic'], variable: '--font-serif', display: 'swap' });
const sans = Geist({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono', display: 'swap' });

export function generateMetadata() {
  // 2.3 — keep the Vercel preview deploys out of the index. Only the production
  // domain should ever be crawlable.
  const isProd = process.env.VERCEL_ENV === 'production';
  return {
    metadataBase: new URL('https://dukesseafood.com'),
    title: {
      default: "Duke's Seafood — Wild Pacific Seafood Since 1977",
      template: "%s | Duke's Seafood",
    },
    description: "Six family-owned restaurants across Western Washington serving sustainable wild Pacific seafood, grass-fed burgers, and award-winning chowder since 1977.",
    alternates: { canonical: '/' },
    openGraph: {
      siteName: "Duke's Seafood",
      type: 'website',
      url: '/',
      title: "Duke's Seafood — Wild Pacific Seafood Since 1977",
      description: "Sustainable wild Pacific seafood, grass-fed burgers, and award-winning chowder. Six family-owned restaurants across Western Washington since 1977.",
      images: ['/images/dukes-sign.jpg'],
    },
    twitter: { card: 'summary_large_image' },
    ...(isProd ? {} : { robots: { index: false, follow: false } }),
  };
}

export default function RootLayout({ children }) {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': 'https://dukesseafood.com/#organization',
    name: "Duke's Seafood",
    url: 'https://dukesseafood.com',
    logo: 'https://dukesseafood.com/images/dukes-logo.png',
    image: 'https://dukesseafood.com/images/dukes-sign.jpg',
    description: "Family-owned Pacific Northwest seafood restaurants since 1977. Sustainable wild seafood, grass-fed burgers, and award-winning chowder across six Western Washington locations.",
    servesCuisine: 'Seafood',
    priceRange: '$$',
    foundingDate: '1977',
    sameAs: [
      'https://www.instagram.com/dukesseafood/',
      'https://www.facebook.com/DukesSeafood/',
    ],
  };
  const siteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://dukesseafood.com/#website',
    url: 'https://dukesseafood.com',
    name: "Duke's Seafood",
    publisher: { '@id': 'https://dukesseafood.com/#organization' },
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
