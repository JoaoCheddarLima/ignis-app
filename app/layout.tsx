import './globals.css';

import type { Metadata } from 'next';
import { Inter_Tight as Font } from 'next/font/google';

import MainTopNav from './components/nav/mainNav';
import NextAuthProvider from './context/NextAuthProvider';

const font = Font({
  subsets: ['latin'],
  weight: '900'
});

export const metadata: Metadata = {
  title: "Fire Automate",
  description: "Empower your work with Fire Automate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='font-mono text-lg'>
      <NextAuthProvider>
        <body className={font.className}>
          <MainTopNav />
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
