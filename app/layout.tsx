import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextAuthProvider from './context/NextAuthProvider';
import { Texts } from './lib/texts';

const inter = Inter({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: Texts.BRAND_NAME,
  description: Texts.SLOGAN,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='font-mono text-lg text-white'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <NextAuthProvider>
        <body className={inter.className}>
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
