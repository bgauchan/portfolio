import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bardan Gauchan',
  description: 'Personal portfolio of Bardan Gauchan',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics ga_id="G-PMJF30VQD6" />
      </body>
    </html>
  );
}
