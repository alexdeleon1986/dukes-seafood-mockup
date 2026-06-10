import { Newsreader, Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const serif = Newsreader({ subsets: ['latin'], weight: ['400','500'], style: ['normal','italic'], variable: '--font-serif', display: 'swap' });
const sans = Geist({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: "Duke's Seafood — Wild Pacific Seafood Since 1977",
  description: "Six family-owned restaurants across Western Washington serving sustainable wild Pacific seafood, grass-fed burgers, and award-winning chowder since 1977.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
