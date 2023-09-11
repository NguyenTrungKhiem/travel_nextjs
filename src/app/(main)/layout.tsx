import Header from '@/common/header/Header';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/common/footer/Footer';
import TopFooter from '@/common/footer/TopFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel Web',
  description: 'Website to find tourist destinations for you',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
        <TopFooter />
        <Footer />
      </body>
    </html>
  );
}
